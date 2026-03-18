// ProfileSettings.jsx
import React from "react";
import { FaCamera } from "react-icons/fa";
import AccountSettingsPanel from "./AccountSettings";
import { useLocation } from "react-router-dom";

const ProfileSettings = () => { 
  const location = useLocation(); // 👈 access location state
  const selectedTab = location.state?.selectedTab || "Profile Overview";

  return (
    <div className="p-4 bg-blue-100/50 min-h-screen">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 flex flex-col gap-2">         
          <AccountSettingsPanel selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
