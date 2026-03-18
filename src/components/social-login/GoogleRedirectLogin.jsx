// components/GoogleRedirectLogin.jsx
import { useEffect } from "react";
import { FcGoogle } from 'react-icons/fc';
const SOCIAL_LOGIN_REDIRECT_URL = import.meta.env.VITE_SOCIAL_LOGIN_REDIRECT_URL;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleRedirectLogin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [GOOGLE_CLIENT_ID]);

  const handleLogin = () => {
    const authData = {
    type:  2 // 2 is for Google
  };
  sessionStorage.setItem("social_auth_data", JSON.stringify(authData));
    if (
      window.google &&
      window.google.accounts &&
      window.google.accounts.id
    ) {
      window.google.accounts.oauth2
        .initCodeClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: "email profile",
          redirect_uri: SOCIAL_LOGIN_REDIRECT_URL,
          ux_mode: "redirect",
          state: "some_arbitrary_state",
          prompt: "consent",
        })
        .requestCode();

      window.google.accounts.id.prompt(); // Silent login
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="border border-gray-300 flex items-center justify-center gap-2 w-full h-[46px] px-4 py-2 rounded  text-black cursor-pointer"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>

  );
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  withth: "100%",
  display: "flex",
  backgroundColor: "#4285F4",
  color: "white",
  //fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

export default GoogleRedirectLogin;
