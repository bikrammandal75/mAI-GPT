import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FiLock, FiSettings, FiHelpCircle, FiMenu, FiX } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import ProfileOverview from "./ProfileOverview";
import LoginSecurity from "./LoginSecurity";
import Subscription from "./Subscription";
import SettingsInside from "./SettingsInside";
import HelpSupport from "./HelpSupport";
import { getLLMUserConfiguration } from "./api/put";
import { IoClose } from "react-icons/io5"; // Import the close icon

const tabs = [
  { label: "Profile Overview", icon: <CgProfile size={20} /> },
  { label: "Login & Security", icon: <FiLock size={20} /> },
  { label: "Subscription", icon: <MdSubscriptions size={20} /> },
  { label: "Configuration", icon: <FiSettings size={20} /> },
  { label: "Help & Support", icon: <FiHelpCircle size={20} /> },
];

const renderTabContent = (tab, config) => {
  switch (tab) {
    case "Profile Overview":
      return <ProfileOverview config={config} />;
    case "Login & Security":
      return <LoginSecurity config={config} />;
    case "Subscription":
      return <Subscription config={config} />;
    case "Help & Support":
      return <HelpSupport config={config} />;
    case "Configuration":
      return <SettingsInside config={config} />;
    default:
      return null;
  }
};

const AccountSettingsPanel = ({ selectedTab: initialTab = "Profile Overview" }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [configData, setConfigData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const config = await getLLMUserConfiguration();
        setConfigData(config);
      } catch (err) {
        console.error("Failed to fetch config", err);
      }
    };

    fetchConfiguration();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (tabLabel) => {
    setSelectedTab(tabLabel);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        {/* Mobile Header and Toggle Button (for the main content area) */}
        {/* This header shows the hamburger/X, logo, and the back button for the *overall* page */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b">
          <button onClick={toggleSidebar} className="text-gray-700">
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <img
            src="/icon.svg"
            alt="Logo"
            className="h-7 w-7 cursor-pointer"
            onClick={() => navigate("/")}
          />

        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-[300px] bg-white z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:min-h-screen shadow-lg md:shadow-none`}
        >
          {/* Header for the SIDEBAR itself, visible only on mobile when open */}
          <div className="md:hidden flex justify-end p-4 border-b">
          
            {/* Close button for the sidebar on mobile */}
            <button onClick={toggleSidebar} className="text-gray-700">
              <IoClose size={24} />
            </button>
          </div>

          {/* Desktop Logo (hidden on mobile, shown on desktop sidebar) */}
          <div className="p-4 py-4 md:block hidden">
            <img
              src="/icon.svg"
              alt="Logo"
              className="h-7 w-7 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <ul className="space-y-2 px-4 mt-4 md:mt-0">
            {tabs.map((tab) => (
              <li
                key={tab.label}
                onClick={() => handleTabClick(tab.label)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition hover:bg-blue-50 ${selectedTab === tab.label
                  ? "bg-blue-100 font-medium text-blue-600"
                  : "text-gray-700"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for small screens when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm bg-opacity-40 z-40 md:hidden" // Use darker overlay
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-white min-h-screen p-6">
          {renderTabContent(selectedTab, configData)}
        </div>
      </div>
    </>
  );
};

export default AccountSettingsPanel;