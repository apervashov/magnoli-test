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

export interface WalletData {
    cardBalance: number;
    cardLimit: number;
    paymentDue: number | null;
    dailyPoints: number;
    cardNumber: string;
    cardExp: string;
    transactions: Transaction[];
}
  