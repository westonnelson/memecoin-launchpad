/*// frontend/components/TokenList.tsx
import React from 'react';

const tokens = [
  { name: 'Sunbear', symbol: '$SUNBEAR', marketCap: '6.44k', img: '/images/sunbear.png', change: '+3.84%' },
  { name: 'Meoke', symbol: '$MEOKE', marketCap: '16.7k', img: '/images/meoke.png', change: '+26.91%' },
  // Add more tokens as needed
];

export default function TokenList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tokens.map((token, index) => (
        <div
          key={index}
          className="bg-[#1e2731] rounded-xl p-6 flex flex-col items-center text-center"
        >
          <img src={token.img} alt={token.name} className="w-24 h-24 rounded-full mb-4" />
          <h3 className="text-xl font-semibold mb-2">{token.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{token.symbol}</p>
          <p className="text-lg font-bold mb-4">Market Cap: {token.marketCap}</p>
          <p className={`text-md ${token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'} mb-4`}>
            {token.change}
          </p>
          <button className="bg-indigo-600 text-white rounded-lg px-4 py-2">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}*/