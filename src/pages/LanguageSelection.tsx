import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft p-4 flex flex-col">
      <div className="flex-1 pt-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center text-primary mb-8">
            Choose Your Language
          </h1>
          
          <div className="space-y-3">
            {languages.map((language) => (
              <Card 
                key={language}
                className={`p-4 cursor-pointer transition-all duration-200 border-2 ${
                  selectedLanguage === language
                    ? "border-primary bg-accent shadow-card"
                    : "border-border bg-white hover:border-primary/50"
                }`}
                onClick={() => setSelectedLanguage(language)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">
                    {language}
                  </span>
                  {selectedLanguage === language && (
                    <Check className="h-6 w-6 text-primary" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto w-full pt-6">
        <Button 
          onClick={() => navigate("/signup/mobile")}
          size="lg"
          className="w-full h-14 rounded-2xl font-semibold text-lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelection;