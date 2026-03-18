import * as Yup from "yup";

export const verifyUserPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address. Must include a valid domain (e.g. .com, .in, etc.)"
        ),
    passcode: Yup.string().required("Passcode is required")
});
