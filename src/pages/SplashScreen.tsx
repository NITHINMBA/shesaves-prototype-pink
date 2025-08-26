import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/shesaves-logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="animate-fade-in">
        <img 
          src={logoImage} 
          alt="SheSaves Logo" 
          className="w-32 h-32 mb-8 mx-auto rounded-3xl shadow-soft"
        />
        <h1 className="text-4xl font-bold text-white mb-4">SheSaves</h1>
        <p className="text-xl text-white/90 mb-16 max-w-xs">
          Smart savings for stronger women
        </p>
      </div>
      
      <div className="w-full max-w-sm">
        <Button 
          onClick={() => navigate("/language")}
          size="lg"
          className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg h-14 rounded-2xl shadow-soft"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;