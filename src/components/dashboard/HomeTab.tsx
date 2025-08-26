import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, Eye, ArrowUp, ArrowDown, Landmark } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const transactions = [
  { id: 1, type: "sent", description: "Sent to Rose Group", amount: -1000, date: "Today" },
  { id: 2, type: "invested", description: "Invested in Mutual Fund", amount: -1000, date: "Yesterday" },
  { id: 3, type: "received", description: "Received from group", amount: 500, date: "2 days ago" },
  { id: 4, type: "invested", description: "Fixed Deposit", amount: -2000, date: "3 days ago" }
];

const HomeTab = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [addMoneyOpen, setAddMoneyOpen] = useState(false);
  const [withdrawMoneyOpen, setWithdrawMoneyOpen] = useState(false);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Hello, Chithra! 👋
        </h1>
        <p className="text-muted-foreground">Welcome back to your savings journey</p>
      </div>

      {/* Balance Card */}
      <Card className="p-6 bg-gradient-primary text-white shadow-soft">
        <div className="text-center">
          <p className="text-white/80 text-sm mb-2">Total Savings</p>
          <h2 className="text-4xl font-bold mb-6">₹1,50,000</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <Dialog open={addMoneyOpen} onOpenChange={setAddMoneyOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="h-12 rounded-xl font-semibold">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Money
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Money</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Amount (₹)</Label>
                    <Input id="amount" placeholder="Enter amount" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="method">Payment Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="card">Debit/Credit Card</SelectItem>
                        <SelectItem value="netbanking">Net Banking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full" onClick={() => setAddMoneyOpen(false)}>
                    Add Money
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={withdrawMoneyOpen} onOpenChange={setWithdrawMoneyOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 rounded-xl font-semibold border-white text-white hover:bg-white hover:text-primary">
                  <Minus className="h-5 w-5 mr-2" />
                  Withdraw
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Withdraw Money</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="withdraw-amount">Amount (₹)</Label>
                    <Input id="withdraw-amount" placeholder="Enter amount" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="bank-account">Bank Account</Label>
                    <Input id="bank-account" placeholder="Enter account number" />
                  </div>
                  <div>
                    <Label htmlFor="ifsc">IFSC Code</Label>
                    <Input id="ifsc" placeholder="Enter IFSC code" />
                  </div>
                  <Button className="w-full" onClick={() => setWithdrawMoneyOpen(false)}>
                    Withdraw Money
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSummary(!showSummary)}
            className="text-primary"
          >
            <Eye className="h-4 w-4 mr-1" />
            {showSummary ? "Hide" : "View Summary"}
          </Button>
        </div>

        {showSummary && (
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      transaction.amount > 0 ? "bg-success/10" : "bg-primary/10"
                    }`}>
                      {transaction.type === "received" && <ArrowDown className="h-5 w-5 text-success" />}
                      {transaction.type === "sent" && <ArrowUp className="h-5 w-5 text-primary" />}
                      {transaction.type === "invested" && <Landmark className="h-5 w-5 text-primary" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.amount > 0 ? "text-success" : "text-foreground"
                  }`}>
                    {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTab;