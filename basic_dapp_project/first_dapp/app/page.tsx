"use client";

import { useState } from "react";

export default function Home() {
  const [wallet, setwallet] = useState<any>(null);
  const connectWallet = async () => {
    const { solana } = window as any;

    if (solana) {
      const wallet = await solana.connect();
      setwallet(wallet.publicKey.toString());
    }
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <button
        onClick={() => {
          connectWallet();
        }}
        className="text-xl font-bold p-5 bg-red-500 rounded"
      >
        {wallet ? wallet : "Connect Wallet"}
      </button>
    </main>
  );
}