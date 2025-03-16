import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Transaction } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface TransactionDetailProps {
  transactions: Transaction[];
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transactions,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const transactionId = parseInt(id || "", 10);
  const transaction = transactions.find((t) => t.id === transactionId);

  if (!transaction) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <button
          onClick={() => navigate(-1)}
          className="underline text-blue-400"
        >
          Back
        </button>
        <p>Transaction not found</p>
      </div>
    );
  }

  const { name, amount, status, date } = transaction;

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-10 text-white">
      <div className="flex  items-center px-4 pt-4 mb-2">
        <button onClick={() => navigate(-1)} className="text-orange-500">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
      </div>

      <div className="flex max-w-sm flex-col items-center mt-2">
        <h1 className="text-4xl font-bold">${amount.toFixed(2)}</h1>
        <p className="text-base mt-2">{name}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>

      <div className="bg-[#1c1c1e] max-w-sm rounded-lg mx-4 mt-6 p-4">
        <p className="text-sm font-semibold mb-1">Status: {status}</p>
        <p className="text-sm text-gray-300">RBC Bank Debit Card</p>
      </div>

      <div className="flex max-w-sm justify-between items-center mx-4 mt-6">
        <span className="text-base font-semibold">Total</span>
        <span className="text-base font-semibold">${amount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TransactionDetail;
