import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, User, Calendar } from "lucide-react";

const SignupDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (firstName && lastName && dateOfBirth) {
      navigate("/signup/success");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4 flex flex-col">
      <div className="flex items-center mb-8 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/signup/otp")}
          className="mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-primary">Step 3 of 3</h1>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full">
        <Card className="p-6 shadow-card">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Personal Details
            </h2>
            <p className="text-muted-foreground">
              Help us know you better
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-12 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-12 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="h-12 text-lg"
                />
                <Calendar className="absolute right-3 top-3 h-6 w-6 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="max-w-md mx-auto w-full pt-6">
        <Button
          onClick={handleNext}
          disabled={!firstName || !lastName || !dateOfBirth}
          size="lg"
          className="w-full h-14 rounded-2xl font-semibold text-lg"
        >
          Complete Signup
        </Button>
      </div>
    </div>
  );
};

export default SignupDetails;