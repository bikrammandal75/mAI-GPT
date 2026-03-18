// pages/google-auth-redirect.jsx
import React, { useEffect } from "react";

const GoogleAuthRedirect = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const credential = urlParams.get("credential");

    if (credential) {
      // Decode JWT or send it to your backend for verification
      console.log("Google Credential Token:", credential);

      // Example: send to backend
      // fetch("/api/login", {
      //   method: "POST",
      //   body: JSON.stringify({ token: credential }),
      // });

      // Redirect to home or dashboard
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <h2>Signing you in...</h2>
    </div>
  );
};

export default GoogleAuthRedirect;
