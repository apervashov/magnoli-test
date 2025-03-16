import React from "react";
import { WalletData } from "../types/types";

interface CardBalanceProps {
  walletData: WalletData;
}

const CardBalance: React.FC<CardBalanceProps> = ({ walletData }) => {
  const { cardBalance = 0, cardLimit = 0 } = walletData || {};
  const available = cardLimit - cardBalance;

  return (
    <div className="bg-[#1c1c1e] text-white rounded-xl p-4 flex flex-col space-y-3 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide">Card Balance</h2>
      </div>

      <div className="text-2xl font-bold">${cardBalance.toFixed(2)}</div>

      <div className="text-sm text-gray-400 leading-tight">
        <div>${available.toFixed(2)} Available</div>
        <div>Limit: ${cardLimit.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CardBalance;
