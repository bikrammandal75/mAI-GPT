import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import Chat from "./pages/Chat";
import Plans from "./pages/Plans";
import ProfileSettings from "./components/modals/ProfileSettings";
import MySpace from "./components/myspace/myspace";
import NewTerms from "./components/modals/NewTerms";
import Return from "./components/modals/payment/Return";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import DocsLayout from "./pages/ai-docs/DocsLayout";

const App = () => {
    const location = useLocation();
    const { pathname, search } = location;
    const urlParams = new URLSearchParams(search);
    if (urlParams.get("refcode")) {
        const inviteCode = urlParams.get("refcode") || "";
        Cookies.set("inviteCode", inviteCode, {
            expires: 7,
            secure: false,
            sameSite: "Strict",
        });
    }
    return (
        <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/regizster" element={<Auth />} /> {/* Consider removing if a typo */}
            <Route path="/forgot-password" element={<Auth />} />
            <Route path="/reset-password" element={<Auth />} />
            <Route path="/email-verify" element={<Auth />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/terms-of-use" element={<NewTerms />} />
            <Route path="/privacy-policy" element={<NewTerms />} />
            <Route path="/return" element={<Return />} />
            {/* <Route path="/account-settings" element={<AccountSettings />} /> */}
            <Route path="/plans" element={<Plans />} />
            <Route
                path="/myspace"
                element={
                    <Layout>
                        <MySpace /> {/* Chat component handles both "/" and "/c/:chatId" */}
                    </Layout>
                }
            />
            <Route
                path="/*"
                element={
                    <Layout>
                        <Chat /> {/* Chat component handles both "/" and "/c/:chatId" */}
                    </Layout>
                }
            />
            <Route path="/ai-docs/:docId?" element={<Layout><DocsLayout /></Layout>} />


        </Routes>
    );
};

export default App;
