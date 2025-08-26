import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary p-4 flex flex-col items-center justify-center">
      <Card className="p-8 shadow-soft max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-success-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Signup Successful!
          </h2>
          <p className="text-lg text-muted-foreground">
            Welcome to SheSaves! Your account has been created successfully.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-accent p-4 rounded-xl">
            <p className="text-sm text-accent-foreground">
              🎉 You're now part of a community of empowered women building financial independence!
            </p>
          </div>

          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="w-full h-14 rounded-2xl font-semibold text-lg"
          >
            Start Saving
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignupSuccess;