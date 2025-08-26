import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Phone, 
  Calendar,
  Languages,
  LogOut,
  ChevronRight,
  Camera,
  Bell,
  Shield,
  HelpCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  "English",
  "हिंदी (Hindi)",
  "தமிழ் (Tamil)",
  "తెలుగు (Telugu)",
  "ಕನ್ನಡ (Kannada)",
  "മലയാളം (Malayalam)",
  "বাংলা (Bengali)",
  "मराठी (Marathi)",
  "ગુજરાતી (Gujarati)",
  "ਪੰਜਾਬੀ (Punjabi)"
];

const ProfileTab = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [languageDialogOpen, setLanguageDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          My Profile
        </h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      {/* Profile Info Card */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                CM
              </AvatarFallback>
            </Avatar>
            <Button 
              size="sm" 
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground mb-1">
              Chithra M
            </h2>
            <div className="space-y-1 text-muted-foreground">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Member since Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Settings Options */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Settings</h3>
        
        {/* Language Settings */}
        <Dialog open={languageDialogOpen} onOpenChange={setLanguageDialogOpen}>
          <DialogTrigger asChild>
            <Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Languages className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Language</p>
                    <p className="text-sm text-muted-foreground">{selectedLanguage}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Choose Language</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button 
                className="w-full" 
                onClick={() => setLanguageDialogOpen(false)}
              >
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Other Settings */}
        <Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="font-medium text-foreground">Notifications</p>
                <p className="text-sm text-muted-foreground">Manage your alerts</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="font-medium text-foreground">Privacy & Security</p>
                <p className="text-sm text-muted-foreground">Keep your account safe</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="font-medium text-foreground">Help & Support</p>
                <p className="text-sm text-muted-foreground">Get help when you need it</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>
      </div>

      {/* Logout Button */}
      <div className="pt-6">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-12 rounded-xl border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileTab;
