import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { resetPassword } from "./api/put"; // Assuming this path and method are correct

const LoginSecurity = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const email = Cookies.get("email") || "";
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password must match.");
      return;
    }

    try {
      const payload = {
        email,
        oldPassword,
        newPassword,
        confirmPassword,
      };
      await resetPassword(payload);
      alert("Password reset successfully!");
      setShowModal(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="relative mt-8 p-4 md:p-6"> {/* Added padding for overall component on smaller screens */}
      {/* Main Content (blurred when modal is open) */}
      <div className={`p-6 ${showModal ? "blur-sm" : ""}`}>
        <h3 className="text-lg font-bold mb-4">Login</h3>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full md:w-1/2 px-0 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" // w-full on small, w-1/2 on medium
          />
        </div>

        {/* Password Field with 'Reset Password' */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1 w-full md:w-1/2"> {/* w-full on small, w-1/2 on medium */}
            <label className="text-sm font-medium text-gray-700">Password</label>
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={() => setShowModal(true)}
            >
              Reset Password
            </button>
          </div>
          <input
            type="password"
            value="••••••••"
            disabled
            className="w-full md:w-1/2 px-0 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" // w-full on small, w-1/2 on medium
          />
        </div>
      </div>

      {/* Reset Password Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"> {/* Added p-4 for modal padding on small screens */}
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Reset Password</h2>

            {/* Old Password */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">Old Password</label>
              <input
                type={showOld ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowOld(!showOld)}
                className="absolute right-3 top-8 text-sm text-gray-500"
              >
                {showOld ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />} {/* Corrected: Uses showOld */}
              </button>
            </div>

            {/* New Password */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-8 text-sm text-gray-500"
              >
                {showNew ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-8 text-sm text-gray-500"
              >
                {showConfirm ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />} {/* Corrected: Uses showConfirm */}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleResetPassword}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSecurity;