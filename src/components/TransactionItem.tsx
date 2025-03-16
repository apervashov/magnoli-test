import React from "react";
import { Link } from "react-router-dom";
import { Transaction } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faMoneyBill,
  faGamepad,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { formatTransactionDate } from "../utils/dateFormatter";

interface TransactionItemProps {
  transaction: Transaction;
}

const iconMap: Record<string, any> = {
  "shopping-bag": faShoppingBag,
  "money-bill": faMoneyBill,
  gamepad: faGamepad,
  coffee: faCoffee,
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { id, name, amount, status, icon, type, date, person } = transaction;

  const displayName = type === "TopUp" ? "Payment" : name;

  const formattedDate = formatTransactionDate(date);

  const secondLine = person ? `${person} - ${formattedDate}` : formattedDate;

  return (
    <Link
      to={`/transaction/${id}`}
      className="
        block 
        bg-[#1c1c1e] 
        rounded-lg 
        p-3 
        mb-2 
        text-white 
        hover:bg-[#2c2c2e]
        transition-colors
      "
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={iconMap[icon] || faShoppingBag}
              className="text-lg"
            />
            <span className="text-sm font-semibold">{displayName}</span>
          </div>
          <div className="text-sm font-semibold">
            {type === "TopUp" ? "+" : "-"}${amount.toFixed(2)}
          </div>
        </div>

        <div className="mt-1">
          <span className="block text-xs text-gray-400">{status}</span>
          <span className="block text-xs text-gray-400">{secondLine}</span>
        </div>
      </div>
    </Link>
  );
};

export default TransactionItem;
