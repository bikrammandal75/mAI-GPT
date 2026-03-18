import { FaFacebook } from 'react-icons/fa';
const Social_Login_Redirect_Url = import.meta.env
  .VITE_SOCIAL_LOGIN_REDIRECT_URL;
const Facebook_Client_Id = import.meta.env.VITE_FACEBOOK_CLIENT_ID;

const FacebookRedirectLogin = () => {
  const fbLoginUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${Facebook_Client_Id}&redirect_uri=${Social_Login_Redirect_Url}&scope=email,public_profile&response_type=code`;
  const authData = {
    type: 4, // 4 is for Facebook OAuth
  };
  sessionStorage.setItem("social_auth_data", JSON.stringify(authData));
  const handleFacebookLogin = () => {
    window.location.href = fbLoginUrl;
  };

  return (
    <div>
      <button
        onClick={handleFacebookLogin}
        className="border border-gray-300 flex items-center justify-center gap-2 w-full h-[46px] px-4 py-2 rounded  text-black cursor-pointer"
      >
        <FaFacebook size={24} color="#1877F2" />
        Continue with Facebook
      </button>

    </div>

  );
};

export default FacebookRedirectLogin;
