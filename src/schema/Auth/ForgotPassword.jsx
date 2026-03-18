import * as Yup from "yup";

export const forgotUserPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address. Must include a valid domain (e.g. .com, .in, etc.)"
        ),
    passcode: Yup.string().required("Passcode is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(15, "Password must not exceed 15 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
});
