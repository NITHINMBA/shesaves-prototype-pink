import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, Calendar, IndianRupee } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const groups = [
  {
    id: 1,
    name: "Rose Group",
    amount: 5000,
    frequency: "month",
    members: 12,
    nextPayment: "15 days",
    status: "active"
  },
  {
    id: 2,
    name: "Thanjavur Village Women",
    amount: 500,
    frequency: "week",
    members: 8,
    nextPayment: "3 days",
    status: "active"
  }
];

const GroupsTab = () => {
  const [createGroupOpen, setCreateGroupOpen] = useState(false);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Groups</h1>
          <p className="text-muted-foreground">Saving together, growing stronger</p>
        </div>
        <Dialog open={createGroupOpen} onOpenChange={setCreateGroupOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="rounded-xl">
              <Plus className="h-4 w-4 mr-2" />
              Create
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Group</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="group-name">Group Name</Label>
                <Input id="group-name" placeholder="Enter group name" />
              </div>
              <div>
                <Label htmlFor="group-amount">Monthly Amount (₹)</Label>
                <Input id="group-amount" placeholder="Enter amount" type="number" />
              </div>
              <div>
                <Label htmlFor="group-frequency">Payment Frequency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={() => setCreateGroupOpen(false)}>
                Create Group
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        {groups.map((group) => (
          <Card key={group.id} className="p-6 shadow-card hover:shadow-soft transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {group.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{group.members} members</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-lg font-bold text-primary">
                    <IndianRupee className="h-5 w-5" />
                    <span>{group.amount.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">per {group.frequency}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Next payment in {group.nextPayment}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-lg">
                    View Details
                  </Button>
                  <Button size="sm" className="rounded-lg">
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty state or join group suggestion */}
      <Card className="p-6 text-center bg-accent/50 border-dashed">
        <div className="space-y-3">
          <Users className="h-12 w-12 text-primary mx-auto opacity-60" />
          <div>
            <h3 className="font-semibold text-foreground">Join More Groups</h3>
            <p className="text-sm text-muted-foreground">
              Connect with more women in your community
            </p>
          </div>
          <Button variant="outline" className="rounded-xl">
            Explore Groups
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GroupsTab;