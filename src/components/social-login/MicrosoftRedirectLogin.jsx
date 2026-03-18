// components/GoogleRedirectLogin.jsx
import {
  generateCodeVerifier,
  generateCodeChallenge,
} from "../../utils/pkceUtils";
import MicrosoftSvg from "../../assets/microsoft.svg";

const Social_Login_Redirect_Url = import.meta.env
  .VITE_SOCIAL_LOGIN_REDIRECT_URL;
const Microsoft_Client_Id = import.meta.env.VITE_MICROSOFT_CLIENT_ID;

const MicrosoftRedirectLogin = () => {
  const loginWithMicrosoft = async () => {
    const scope =
      "openid profile email offline_access https://graph.microsoft.com/User.Read";
    const codeVerifier = generateCodeVerifier();
    const authData = {
      codeVerifier: codeVerifier,
      type: 3, // 3 is for Microsoft OAuth
    };
    sessionStorage.setItem("social_auth_data", JSON.stringify(authData));

    console.log("Generated code verifier:", codeVerifier);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    sessionStorage.setItem("code_verifier", codeVerifier); // Required for token exchange

    const url =
      `https://login.microsoftonline.com/common/oauth2/v2.0/authorize` +
      `?client_id=${Microsoft_Client_Id}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(Social_Login_Redirect_Url)}` +
      `&response_mode=query` +
      `&scope=${encodeURIComponent(scope)}` +
      `&code_challenge=${codeChallenge}` +
      `&code_challenge_method=S256`;

    window.location.href = url;
  };

  return (
    <button
      onClick={loginWithMicrosoft}
      className="border border-gray-200 flex items-center justify-center gap-2 w-full h-[46px] px-4 py-2 rounded  text-black cursor-pointer"
    >
      <img
        src={MicrosoftSvg}
        width="19"
        height="19"
        alt="Microsoft logo"
        className=""
      />
      Continue with Microsoft
    </button>
  );
};

export default MicrosoftRedirectLogin;
