import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WalletData } from "./types/types";
import Home from "./Home";
import TransactionDetail from "./components/TransactionDetail";
import "./App.css";

const App: React.FC = () => {
  const [walletData, setWalletData] = useState<WalletData | null>(null);

  useEffect(() => {
    fetch("/data/walletData.json")
      .then((res) => res.json())
      .then((data: WalletData) => setWalletData(data))
      .catch((error) => console.error("Error fetching wallet data:", error));
  }, []);

  if (!walletData) {
    return <div className="text-center mt-8 text-white">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home walletData={walletData} />} />
        <Route
          path="/transaction/:id"
          element={<TransactionDetail transactions={walletData.transactions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
