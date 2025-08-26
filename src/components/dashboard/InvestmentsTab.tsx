import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Landmark, PiggyBank, IndianRupee, Eye, Plus, Minus } from "lucide-react";

const investments = [
  {
    id: 1,
    name: "Mutual Fund SIP",
    type: "mutual_fund",
    amount: 5000,
    returns: "+12.5%",
    status: "growing"
  },
  {
    id: 2,
    name: "Fixed Deposit",
    type: "fixed_deposit", 
    amount: 5000,
    returns: "+7.2%",
    status: "stable"
  }
];

const InvestmentsTab = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          My Investments
        </h1>
        <p className="text-muted-foreground">Growing your wealth steadily</p>
      </div>

      {/* Total Investment Card */}
      <Card className="p-6 bg-gradient-primary text-white shadow-soft">
        <div className="text-center">
          <p className="text-white/80 text-sm mb-2">Total Investments</p>
          <div className="flex items-center justify-center mb-4">
            <IndianRupee className="h-8 w-8" />
            <span className="text-4xl font-bold">10,000</span>
          </div>
          <div className="flex items-center justify-center text-white/90">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span className="text-lg">Overall Returns: +9.8%</span>
          </div>
        </div>
      </Card>

      {/* Investment Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Your Portfolio</h3>
        
        {investments.map((investment) => (
          <Card key={investment.id} className="p-6 shadow-card">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    {investment.type === "mutual_fund" && <TrendingUp className="h-6 w-6 text-primary" />}
                    {investment.type === "fixed_deposit" && <Landmark className="h-6 w-6 text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{investment.name}</h4>
                    <p className="text-sm text-muted-foreground capitalize">{investment.type.replace("_", " ")}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-lg font-bold text-foreground">
                    <IndianRupee className="h-5 w-5" />
                    <span>{investment.amount.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-success font-medium">{investment.returns}</p>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4 border-t border-border">
                <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm" className="flex-1 rounded-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Invest More
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                  <Minus className="h-4 w-4 mr-2" />
                  Withdraw
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* New Investment Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Explore More Options</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <Card className="p-6 bg-accent/50 border-dashed hover:bg-accent transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <PiggyBank className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">Recurring Deposits</h4>
                  <p className="text-sm text-muted-foreground">Safe and steady returns</p>
                </div>
              </div>
              <Button size="sm" className="rounded-lg">
                Start Now
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 bg-accent/50 border-dashed hover:bg-accent transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold text-foreground">Equity Mutual Funds</h4>
                  <p className="text-sm text-muted-foreground">Higher growth potential</p>
                </div>
              </div>
              <Button size="sm" className="rounded-lg">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsTab;