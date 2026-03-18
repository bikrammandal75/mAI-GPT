import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import MiniSidebar from "../pages/MiniSidebar";

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // default closed (Genspark style)
    const token = Cookies.get("token");
    const location = useLocation();

    const isMySpacePath = location.pathname === "/myspace";

    return (
        <div className="flex h-screen overflow-hidden dark:bg-zinc-800">

            {/* MINI SIDEBAR (Always visible – 56px) */}
            <MiniSidebar setIsSidebarOpen={setIsSidebarOpen} />

            {/* FULL SIDEBAR (Your existing one – slide in/out) */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/20"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}


            {/* MAIN CONTENT */}
            <div
                className="flex flex-1 flex-col bg-white dark:bg-zinc-800 ml-[64px]"
            // onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
            >

                {/* Header */}
                <div className="md:static fixed top-0 left-0 right-0 z-30">
                    <Header
                        setIsMenuOpen={setIsMenuOpen}
                        isMenuOpen={isMenuOpen}
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        token={token}
                    />
                </div>

                {/* Page Content */}
                <main className="h-full overflow-y-auto pt-[60px] md:pt-0">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
