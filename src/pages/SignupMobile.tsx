import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone } from "lucide-react";

const SignupMobile = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (mobile.length === 10) {
      navigate("/signup/otp");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4 flex flex-col">
      <div className="flex items-center mb-8 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/language")}
          className="mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-primary">Step 1 of 3</h1>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <Card className="p-6 shadow-card">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Enter Mobile Number
            </h2>
            <p className="text-muted-foreground">
              We'll send you a verification code
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mobile Number
              </label>
              <div className="flex">
                <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-lg">
                  <span className="text-foreground">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="rounded-l-none border-l-0 text-lg h-12"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="max-w-md mx-auto w-full pt-6">
        <Button
          onClick={handleNext}
          disabled={mobile.length !== 10}
          size="lg"
          className="w-full h-14 rounded-2xl font-semibold text-lg"
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
};

export default SignupMobile;