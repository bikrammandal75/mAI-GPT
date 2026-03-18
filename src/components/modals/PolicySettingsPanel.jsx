import React, { useState, useEffect } from "react";
import { FiFileText } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";

const policyTabs = [
  { label: "Terms of Use", icon: <FiFileText size={20} />, path: "/terms-of-use" },
  { label: "Privacy Policy", icon: <FiFileText size={20} />, path: "/privacy-policy" },
];

const renderPolicyContent = (tab) => {
  switch (tab) {
    case "Terms of Use":
      return <TermsOfUse />;
    case "Privacy Policy":
      return <PrivacyPolicy />;
    default:
      return null;
  }
};

const PolicySettingsPanel = ({ selectedTab: initialTab = "Terms of Use" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Update tab based on URL
  useEffect(() => {
    const current = policyTabs.find((t) => t.path === location.pathname);
    if (current) {
      setSelectedTab(current.label);
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab.label);
    navigate(tab.path, { state: { selectedTab: tab.label } });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="w-full md:w-[300px] bg-white min-h-screen">
        <div className="p-4 py-4">
          <img
            src="/icon.svg"
            alt="Logo"
            className="h-7 w-7 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="space-y-2 px-4">
          {policyTabs.map((tab) => (
            <li
              key={tab.label}
              onClick={() => handleTabChange(tab)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition hover:bg-blue-50 ${
                selectedTab === tab.label
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

      <div className="flex-1 bg-white min-h-screen p-6">
        {renderPolicyContent(selectedTab)}
      </div>
    </div>
  );
};

export default PolicySettingsPanel;
