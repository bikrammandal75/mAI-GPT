import { Link, useLocation } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import { useMemo } from "react";
import Logo from "../../components/Logo";
import GoogleRedirectLogin from "../../components/social-login/GoogleRedirectLogin";
import MicrosoftRedirectLogin from "../../components/social-login/MicrosoftRedirectLogin";
import GithubRedirectLogin from "../../components/social-login/GithubRedirectLogin";
import Login from "./login";

const Auth = () => {
  const { pathname } = useLocation();
Login();
  const authMode = useMemo(() => {
    if (pathname === "/register") return "register";
    if (pathname === "/forgot-password") return "forgot-password";
    if (pathname === "/reset-password") return "reset-password";
    if (pathname === "/email-verify") return "email-verify";
    return "login";
  }, [pathname]);

  return (
    <div className="bg-muted/10 flex min-h-screen flex-col dark:bg-zinc-900 dark:text-white">
      <div className="flex">
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
          <div className="animate-fade-in sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <Logo customStyles={"h-12 w-12"} />
            </div>
            <h2 className="mt-3 text-center text-2xl font-extrabold">
              {authMode === "register"
                ? "Register your account"
                : authMode === "forgot-password"
                  ? "Forgot your password?"
                  : authMode === "reset-password"
                    ? "Reset your password"
                    : authMode === "email-verify"
                      ? "Verify your email"
                      : "Welcome Back"}
            </h2>
            <p className="text-muted-foreground mt-2 text-center text-sm">
              {authMode === "register" && (
                <>
                  Or{" "}
                  <Link to="/login" className="redirect-auth-txt">
                    login into your account
                  </Link>
                </>
              )}
              {authMode === "login" && (
                <>
                  Or{" "}
                  <Link to="/register" className="redirect-auth-txt">
                    register to create a new account
                  </Link>
                </>
              )}
              {authMode === "forgot-password" && (
                <>
                  {/* Remembered your password?{" "} */}
                  <Link to="/login" className="redirect-auth-txt">
                    Back to login
                  </Link>
                </>
              )}
              {authMode === "reset-password" && (
                <>
                  Go back to{" "}
                  <Link to="/login" className="redirect-auth-txt">
                    Login
                  </Link>
                </>
              )}
              {authMode === "email-verify" && (
                <>
                  Go back to{" "}
                  <Link to="/register" className="redirect-auth-txt">
                    Register
                  </Link>
                </>
              )}
            </p>
          </div>
          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="glass-panel animate-scale-in px-4 sm:rounded-lg sm:px-10">
              {(pathname === "/register" || pathname === "/login") && (
                <div className="mb-6">
                  {/* <div className="text-center text-sm text-muted-foreground mb-4">Continue with</div> */}
                  <div className="flex w-full flex-col gap-3">
                    <GoogleRedirectLogin />
                    <MicrosoftRedirectLogin />
                    {/* <FacebookRedirectLogin /> */}
                    <GithubRedirectLogin />
                  </div>
                  <div className="relative my-3">
                    <div className="flex items-center">
                      <span className="flex-1 border-t border-gray-300" />
                      <span className="mx-4 text-sm text-muted-foreground whitespace-nowrap">
                        OR
                      </span>
                      <span className="flex-1 border-t border-gray-300" />
                    </div>
                  </div>
                </div>
              )}
              <AuthForm mode={authMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
