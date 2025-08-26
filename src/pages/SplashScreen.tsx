import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/shesaves-logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-8 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-12 w-24 h-24 bg-white/8 rounded-full blur-xl"></div>
      
      <div className="animate-fade-in relative z-10">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-110"></div>
          <img 
            src={logoImage} 
            alt="SheSaves Logo" 
            className="w-36 h-36 mx-auto rounded-3xl shadow-elegant relative z-10 border-2 border-white/20"
          />
        </div>
        
        <div className="space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">SheSaves</h1>
          <div className="w-20 h-1 bg-white/60 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-white/90 max-w-sm leading-relaxed">
            Smart savings for stronger women
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/70">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span className="text-sm font-medium">Empowering Financial Freedom</span>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-sm relative z-10">
        <Button 
          onClick={() => navigate("/language")}
          size="lg"
          className="w-full bg-white text-primary hover:bg-white/95 font-bold text-lg h-16 rounded-2xl shadow-elegant transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
        >
          Get Started
        </Button>
        <p className="text-white/60 text-sm mt-3">Join thousands of women building wealth</p>
      </div>
    </div>
  );
};

export default SplashScreen;