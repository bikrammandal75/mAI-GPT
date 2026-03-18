import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_USER } from "./Api/post/index";

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const inviteCode = Cookies.get("inviteCode");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    window.history.replaceState({}, document.title, window.location.origin);

    //if (pathname === "/login") {
    const token = Cookies.get("token");
    if (!token || token === "null" || token === "undefined" || token === "") {
      const code = urlParams.get("code");
      // Remove code from URL immediately after extracting it
      if (code) {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      const authData = JSON.parse(
        sessionStorage.getItem("social_auth_data") || "{}"
      );
      // sessionStorage.removeItem("social_auth_data");
      if (authData?.type > 1 && code) {
        handleLogin(code, authData);
      }
      // else {
      //   window.location.href = "/login";
      // }
      // // window.google?.accounts.id.prompt();
    }
    //}
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteCode = urlParams.get("refcode");

    if (inviteCode) {
      Cookies.set("inviteCode", inviteCode, {
        expires: 1,
        secure: false,
        sameSite: "Strict",
      });
    }
  }, []);

  const handleLogin = async (code, authData) => {
    try {
      const googleData = {
        firstname: "",
        lastname: "",
        email: "",
        password: authData.type === 3 ? authData.codeVerifier : "", // Use a default password for Google auth
        token: code,
        type: authData.type,
        refCode: inviteCode || "",
      };
      const loadingToast = toast.loading("Logging in...");
      const response = await LOGIN_USER(googleData);

      if (response?.status === 200) {
        toast.dismiss(loadingToast);
        Cookies.set("token", response.data.token, {
          expires: 7,
          secure: false, // Use true only in production
          sameSite: "Strict",
        });

        let decodedData = {};
        try {
          decodedData = jwtDecode(response.data.token);
          console.log("decodedData :-", decodedData);
          // Set email in cookies
          if (decodedData?.email) {
            Cookies.set("email", decodedData.email);
          }
        } catch (error) {
          console.error("JWT decode error:", error);
          if (error.response?.status === 401) {
            Cookies.remove("token");
            localStorage.clear();
            window.location.href = "/";
          }
        }

        toast.success(response.data.message || "Login successful!", {
          duration: 200,
        });

        navigate("/");
      } else {
        toast.dismiss(loadingToast);
        toast.error(response.data.message || "Login failed!");
      }
    } catch (err) {
      toast.error("Failed to login. Please try again." + err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-sm">
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
