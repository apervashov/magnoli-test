import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const NoPaymentDue: React.FC = () => {
  return (
    <div className="bg-[#1c1c1e] rounded-xl p-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-sm font-semibold">No Payment Due</h2>
        <p className="text-gray-400 text-xs mt-1">
          You’ve paid your September balance.
        </p>
      </div>

      <div className="flex justify-end mt-4">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCheck} className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default NoPaymentDue;
