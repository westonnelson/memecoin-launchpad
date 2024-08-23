'use client';

import Footer from '../components/Footer';
import TransactionWrapper from '../components/TransactionWrapper';
import WalletWrapper from '../components/WalletWrapper';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <nav className="flex justify-between items-center p-6 bg-[#161b22]">
        <div className="flex items-center gap-4">
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </nav>

      <section className="hero flex flex-col items-center justify-center text-center py-16 bg-[#0d1117]">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">BaseLaunch</h1>
        <br />
        <p className="text-4xl font-semibold text-white mb-4">Memecoin Launchpad</p>
        <p className="text-lg max-w-2xl mb-6">
          Launch your own memecoin with permanently locked liquidity and start earning fees today.
        </p>
        <button className="bg-indigo-600 text-white rounded-lg px-6 py-3 text-lg">
          Get Started
        </button>
      </section>

      <section className="tokens py-16 bg-[#161b22] flex flex-col items-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Live Tokens</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}