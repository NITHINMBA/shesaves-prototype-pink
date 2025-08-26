import { Home, Users, TrendingUp, User, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "groups", label: "Groups", icon: Users },
  { id: "investments", label: "Investments", icon: TrendingUp },
  { id: "profile", label: "Profile", icon: User },
];

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-soft">
      <div className="flex items-center py-2">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center py-2 px-3 min-w-0 transition-colors duration-200 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Back</span>
        </button>
        
        {/* Main tabs */}
        <div className="flex items-center justify-around flex-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center py-2 px-3 min-w-0 flex-1 transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <Icon className={cn("h-5 w-5 mb-1", isActive && "text-primary")} />
                <span className={cn(
                  "text-xs font-medium truncate",
                  isActive && "text-primary font-semibold"
                )}>
                  {tab.label}
                </span>
                {isActive && (
                  <div className="w-6 h-0.5 bg-primary rounded-full mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;