export interface Transaction {
    id: number;
    name: string;
    type: "Credit" | "TopUp";
    amount: number;
    status: "Approved" | "Pending";
    date: string; 
    icon: string;
    person?: string; 
  }
  