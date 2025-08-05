import React from 'react';

const Rewards = ({ amountRaised }) => {
  const rewards = [
    { id: 1, name: 'Company Sticker Pack', threshold: 100 },
    { id: 2, name: 'Branded T-Shirt', threshold: 500 },
    { id: 3, name: 'Coffee Mug', threshold: 1000 },
    { id: 4, name: 'Wireless Headphones', threshold: 2000 },
    { id: 5, name: 'Gaming Console', threshold: 5000 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Rewards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rewards.map(reward => (
          <div 
            key={reward.id} 
            className={`p-4 rounded-md border ${
              amountRaised >= reward.threshold 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{reward.name}</h3>
                <p className="text-sm text-gray-500">Unlock at ${reward.threshold}</p>
              </div>
              {amountRaised >= reward.threshold ? (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Unlocked!
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                  Locked
                </span>
              )}
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  amountRaised >= reward.threshold ? 'bg-green-500' : 'bg-blue-500'
                }`} 
                style={{ 
                  width: `${Math.min(100, (amountRaised / reward.threshold) * 100)}%` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;