import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const SignupOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (otp.length === 6) {
      navigate("/signup/details");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4 flex flex-col">
      <div className="flex items-center mb-8 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/signup/mobile")}
          className="mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-primary">Step 2 of 3</h1>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <Card className="p-6 shadow-card">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Enter Verification Code
            </h2>
            <p className="text-muted-foreground">
              Enter the 6-digit code sent to your mobile
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={1} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={2} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={3} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={4} className="h-12 w-12 text-lg" />
                  <InputOTPSlot index={5} className="h-12 w-12 text-lg" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center">
              <Button variant="ghost" className="text-primary">
                Didn't receive code? Resend
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="max-w-md mx-auto w-full pt-6">
        <Button
          onClick={handleNext}
          disabled={otp.length !== 6}
          size="lg"
          className="w-full h-14 rounded-2xl font-semibold text-lg"
        >
          Verify & Continue
        </Button>
      </div>
    </div>
  );
};

export default SignupOTP;