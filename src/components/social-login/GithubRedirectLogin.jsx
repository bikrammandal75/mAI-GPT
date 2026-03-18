import { FaGithub } from 'react-icons/fa';
const Social_Login_Redirect_Url = import.meta.env
  .VITE_SOCIAL_LOGIN_REDIRECT_URL;
const GitHub_CLIENT_ID = import.meta.env.VITE_GitHub_CLIENT_ID;


const GithubRedirectLogin = () => {
  const handleLogin = () => {
    const authData = {
      type: 6, // 6 is for GitHub OAuth
    };
    sessionStorage.setItem("social_auth_data", JSON.stringify(authData));

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${GitHub_CLIENT_ID}&redirect_uri=${Social_Login_Redirect_Url}&scope=read:user user:email`;
  };

  return (
    <div>
      <button onClick={handleLogin}
        className="border border-gray-300 flex items-center justify-center gap-2 w-full h-[46px] px-4 py-2 rounded  text-black cursor-pointer"
      >
        <FaGithub size={24} />
        Continue with GitHub
      </button>

    </div>
  );
};

export default GithubRedirectLogin;
