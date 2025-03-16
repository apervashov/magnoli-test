import React from "react";
import { Transaction } from "../types/types";
import TransactionItem from "./TransactionItem";

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  const displayed = transactions.slice(0, 10);

  return (
    <div className="px-4 pt-4 text-white">
      <h2 className="text-lg font-semibold mb-4">Latest Transactions</h2>
      {displayed.map((tx) => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
};

export default TransactionsList;
