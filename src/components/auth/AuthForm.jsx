import { BiLoaderAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/Auth/Login";
import { registerSchema } from "../../schema/Auth/Register";
import { forgotUserPasswordSchema } from "../../schema/Auth/ForgotPassword";
import { ACTIVATE_USER, FORGOTUSER_PASS, LOGIN_USER, REGISTER_USER } from "../../pages/auth/Api/post";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { verifyUserPasswordSchema } from "../../schema/Auth/VerifyPassword";

export default function AuthForm({ mode, className, ...props }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const inviteCode = Cookies.get("inviteCode");

    // Retrieve stored email and password and initialize the checkbox
    useEffect(() => {
        if (mode === "login") {
            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");
            const rememberMeChecked = !!storedEmail; // Check if email is stored

            if (storedEmail) {
                formik.setFieldValue("email", storedEmail);
            }
            if (storedPassword) {
                formik.setFieldValue("password", storedPassword);
            }
            setRememberMe(rememberMeChecked);
        } else {
            // Reset all fields when switching to register or forgot-password
            formik.resetForm();
        }
    }, [mode]);

    const validationSchema =
        mode === "register"
            ? registerSchema
            : mode === "forgot-password" || mode === "reset-password"
                ? forgotUserPasswordSchema
                : mode === "email-verify"
                    ? verifyUserPasswordSchema
                    : loginSchema;

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            passcode: "",
        },
        validationSchema: isEmailSent
            ? forgotUserPasswordSchema
            : Yup.object().shape({
                email: Yup.string()
                    .required("Email is required")
                    .matches(
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        "Invalid email address. Must include a valid domain (e.g. .com, .in, etc.)"
                    ),
            }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const loadingToast = toast.loading(
                mode === "login"
                    ? "Logging in..."
                    : mode === "register"
                        ? "Creating account..."
                        : "Processing request..."
            );

            try {
                let response;

                if (mode === "login") {
                    try {
                        response = await LOGIN_USER({
                            email: values.email,
                            password: values.password,
                            type: 1,
                            firstname: "",
                            lastname: "",
                            token: "",
                            refCode: inviteCode || "",
                        });

                        if (response.status === 200) {
                            toast.dismiss(loadingToast);
                            toast.success("Login successful!", { duration: 500 });

                            Cookies.set("token", response.data.token, {
                                expires: 7,
                                secure: false,           // Use true only in production HTTPS
                                sameSite: "Strict",
                            });
                            Cookies.set("email", values.email);

                            if (rememberMe) {
                                localStorage.setItem("email", values.email);
                                localStorage.setItem("password", values.password);
                            } else {
                                localStorage.removeItem("email");
                                localStorage.removeItem("password");
                            }

                            navigate("/");
                            resetForm();
                        } else if (response.status === 400) {
                            toast.dismiss(loadingToast);
                            toast.error(response.data.message || "Login failed!");
                        } else if (response.status === 401) {
                            toast.dismiss(loadingToast);
                            toast.error(response.data.title || "Unauthorized access. Please check your credentials.");
                        }
                    } catch (error) {
                        const errorMessage =
                            error.response?.data?.title ||
                            error.response?.data?.message ||
                            "An error occurred. Please try again.";
                        toast.dismiss(loadingToast);
                        toast.error(errorMessage);
                    } finally {
                        setSubmitting(false);
                    }
                } else if (mode === "register") {
                    try {
                        response = await REGISTER_USER({
                            userId: 0,
                            firstname: values.firstname,
                            lastname: values.lastname,
                            fullname: "",
                            profilePic: "",
                            email: values.email,
                            password: values.password,
                            role: 0,
                            roleDescription: "",
                            organization: 0,
                            mobile: "",
                            designation: "",
                            linkedInURL: "",
                            type: 1,
                            resumeDownloadEnabled: true,
                            searchEnabled: true,
                        });

                        if (response.status === 200) {
                            toast.dismiss(loadingToast);
                            toast.success("Account created successfully!");
                            navigate("/email-verify");
                            resetForm();
                        } else if (response.status === 400) {
                            toast.dismiss(loadingToast);
                            toast.error(response.data.message || "Registration failed!");
                        }
                    } catch (error) {
                        toast.dismiss(loadingToast);
                        toast.error(error.response?.data?.message || "An error occurred. Please try again.");
                    } finally {
                        toast.dismiss(loadingToast);
                        setSubmitting(false);
                    }
                } else if (mode === "forgot-password") {
                    if (!values.passcode) {
                        // Handle email submission
                        response = await FORGOTUSER_PASS({ email: values.email });

                        if (response.status === 200) {
                            toast.dismiss(loadingToast);
                            toast.success("Verification code sent to your email!");
                            setIsEmailSent(true); // Enable passcode and remaining fields
                        } else {
                            toast.dismiss(loadingToast);
                            toast.error(response?.data?.message || "Failed to send verification code.");
                        }
                    } else {
                        // Handle passcode and password submission
                        response = await FORGOTUSER_PASS({
                            email: values.email,
                            passcode: values.passcode,
                            password: values.password,
                        });

                        if (response.status === 200) {
                            toast.dismiss(loadingToast);
                            toast.success("Password reset successful! Please login with your new password.");
                            navigate("/");
                            resetForm();
                        } else {
                            toast.dismiss(loadingToast);
                            toast.error(response?.data?.message || "Failed to reset password.");
                        }
                    }
                } else if (mode === "email-verify") {
                    response = await ACTIVATE_USER({
                        email: values.email,
                        passcode: values.passcode,
                    });

                    if (response.status === 200) {
                        toast.dismiss(loadingToast);
                        toast.success("Email verification successful!");
                        navigate("/login");
                        resetForm();
                    } else {
                        toast.dismiss(loadingToast);
                        toast.error(response?.data?.message || "Email verification failed.");
                    }
                }
            } catch (error) {
                toast.dismiss(loadingToast);
                toast.error(error.response?.data?.message || "An error occurred. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className={className} {...props}>
            <form onSubmit={formik.handleSubmit} className="animate-fade-in space-y-3">
                {mode === "register" && (
                    <>
                        <InputField
                            id="firstname"
                            // label="First Name"
                            placeholder="Enter your first name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstname && formik.errors.firstname}
                        />
                        <InputField
                            id="lastname"
                            // label="Last Name"
                            placeholder="Enter your last name"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastname && formik.errors.lastname}
                        />
                    </>
                )}

                {/* Email Field */}
                <InputField
                    id="email"
                    // label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                />

                {/* Password Fields */}
                {(mode === "login" || mode === "register") && (
                    <div className="relative">
                        <InputField
                            id="password"
                            // label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <span
                            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                        </span>
                    </div>
                )}

                {/* Passcode & Password Fields (only when required) */}
                {isEmailSent && (
                    <>
                        <InputField
                            id="passcode"
                            placeholder="Enter the code sent to your email"
                            value={formik.values.passcode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.passcode && formik.errors.passcode}
                        />
                        <InputField
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <InputField
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </>
                )}

                {/* Reset Password: New Password and Confirm Password */}
                {mode === "reset-password" && (
                    <>
                        <InputField
                            id="password"
                            label="New Password"
                            type="password"
                            placeholder="Enter new password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <InputField
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm new password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </>
                )}

                {mode === "email-verify" && (
                    <>
                        <InputField
                            id="passcode"
                            placeholder="Enter the passcode"
                            value={formik.values.passcode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.passcode && formik.errors.passcode}
                        />
                    </>
                )}

                {/* Remember Me + Forgot Password (Login Only) */}
                {mode === "login" && (
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="text-primary focus:ring-primary mr-2 h-3 w-3"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            />
                            Remember me
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-[#0D77D4] hover:underline dark:text-[#0D77D1]"
                        >
                            Forgot password?
                        </Link>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-700 py-3 text-white hover:bg-zinc-600"
                // disabled={!formik.isValid || formik.isSubmitting}
                >
                    {formik.isSubmitting ? (
                        <>
                            <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />
                            {mode === "login"
                                ? "Logging in..."
                                : mode === "register"
                                    ? "Creating account..."
                                    : mode === "forgot-password"
                                        ? formik.values.passcode
                                            ? "Verifying code..."
                                            : "Sending code..."
                                        : "Saving password..."}
                        </>
                    ) : (
                        (() => {
                            if (mode === "login") {
                                return "Login";
                            } else if (mode === "register") {
                                return "Create Account";
                            } else if (mode === "email-verify") {
                                return "Verify Email";
                            } else if (mode === "forgot-password") {
                                return isEmailSent ? "Continue" : "Send Code";
                            } else {
                                return "Save Password";
                            }
                        })()
                    )}
                </button>
            </form>
        </div>
    );
}

const InputField = ({ id, label, type = "text", error, ...props }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block">
            {label}
        </label>
        <input
            id={id}
            type={type}
            className={`w-full h-[46px] rounded-md border border-gray-300 px-4 py-3 ${error ? "border-red-500" : ""}`}
            {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
);
