import React, { useRef, useState, useEffect } from "react";
import { updateUserProfile } from "./api/put";
import { getProfileDataByEmail } from "./api/get";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProfileOverview = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        twitter: "",
        facebook: "",
    });

    const [profilePic, setProfilePic] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get("token");
                let email = "";

                if (token) {
                    try {
                        const decodedToken = jwtDecode(token);
                        email = decodedToken.email;
                    } catch (decodeError) {
                        console.error("Failed to decode JWT token:", decodeError);
                    }
                } else {
                    console.warn("No JWT token found in cookies.");
                }

                if (email) {
                    const response = await getProfileDataByEmail(email);
                    const user = response.data;

                    const fullName = `${user.firstname || ""} ${user.lastname || ""}`.trim();

                    setForm({
                        fullName: user.fullname || "",
                        email: user.email || "",
                        phone: user.mobile || "",
                        linkedin: user.linkedInURL || "",
                        twitter: user.twitter || "",
                        facebook: user.facebook || "",
                    });

                    if (user.profilePic) {
                        setProfilePic(user.profilePic);
                    }
                } else {
                    console.error("Email not available from token. Cannot fetch profile data.");
                }

            } catch (error) {
                console.error("Failed to load user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSave = async () => {
        try {
            const [firstName, ...lastNameParts] = form.fullName.trim().split(" ");
            const updatedData = {
                Firstname: firstName,
                Lastname: lastNameParts.join(" ") || "",
                Email: form.email,
                Mobile: form.phone,
                LinkedInURL: form.linkedin,
                Twitter: form.twitter,
                Facebook: form.facebook,
                ProfilePic: profilePic || "",
            };

            const response = await updateUserProfile(updatedData);
            if (response) {
                console.log("Profile updated successfully:", response);
                setIsEditing(false);
            } else {
                console.error("Failed to update profile.");
            }
        } catch (error) {
            console.error("Save error:", error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="p-6 w-full"> {/* Ensure the main container takes full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Profile Picture - Centered responsively */}
                <div className="col-span-1 md:col-span-2 flex justify-center order-first md:order-none mb-6"> {/* Centering and spacing */}
                    <div className="relative border w-20 h-20 rounded-full overflow-hidden group cursor-pointer">
                        {profilePic ? (
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300 text-white text-xl font-bold">
                                {form.fullName.charAt(0).toUpperCase()}
                            </div>
                        )}

                        {isEditing && (
                            <>
                                <div
                                    onClick={triggerFileSelect}
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {/* Camera Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 7h4l2-3h6l2 3h4a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 11a3 3 0 100 6 3 3 0 000-6z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    ref={fileInputRef}
                                    className="hidden"
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* Left Column (now spanning full width on small screens) */}
                <div className="col-span-1"> {/* Explicitly setting col-span-1 for smaller screens */}
                    <h4 className="font-bold text-lg mb-4">Personal Information</h4>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column (now spanning full width on small screens) */}
                <div className="col-span-1"> {/* Explicitly setting col-span-1 for smaller screens */}
                    <h4 className="font-bold text-lg mb-4">Manage Linked Accounts</h4>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                            <input
                                type="url"
                                name="linkedin"
                                value={form.linkedin}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Twitter</label>
                            <input
                                type="url"
                                name="twitter"
                                value={form.twitter}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Facebook</label>
                            <input
                                type="url"
                                name="facebook"
                                value={form.facebook}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="mt-1 w-full px-0 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start"> {/* Center buttons on small screens */}
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 w-24"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 w-24"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 w-24"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileOverview;