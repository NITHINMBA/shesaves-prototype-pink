import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import HomeTab from "@/components/dashboard/HomeTab";
import GroupsTab from "@/components/dashboard/GroupsTab";
import InvestmentsTab from "@/components/dashboard/InvestmentsTab";
import ProfileTab from "@/components/dashboard/ProfileTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "groups":
        return <GroupsTab />;
      case "investments":
        return <InvestmentsTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-20">
      <div className="h-full">
        {renderActiveTab()}
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;