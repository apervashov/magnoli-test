import React from "react";
import CardBalance from "./components/CardBalance";
import DailyPoints from "./components/DailyPoints";
import NoPaymentDue from "./components/NoPaymentDue";
import TransactionsList from "./components/TransactionsList";
import { WalletData } from "./types/types";

interface HomeProps {
  walletData: WalletData;
}

const Home: React.FC<HomeProps> = ({ walletData }) => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-10 text-white">
      <div className="max-w-sm mx-auto py-4 space-y-4">
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="flex flex-col space-y-4">
            <CardBalance walletData={walletData} />
            <DailyPoints basePoints={walletData.dailyPoints} />
          </div>
          <NoPaymentDue />
        </div>

        <div className="px-4">
          <TransactionsList transactions={walletData.transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
