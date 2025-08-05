import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rewards from './Rewards';
import { getUserData } from '../services/api';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    
    fetchData();
  }, []);

  if (!userData) {
    return <div className="text-center py-8 dark:text-darkText">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 dark:bg-darkBg dark:text-darkText">
      <div className="bg-white dark:bg-darkCard rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Intern Dashboard</h1>
          <Link 
            to="/leaderboard" 
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            View Leaderboard
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 dark:bg-[#1f2937] p-4 rounded-md">
            <h3 className="font-medium text-gray-500 dark:text-gray-300 mb-1">Intern Name</h3>
            <p className="text-xl">{userData.name}</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-[#1f2937] p-4 rounded-md">
            <h3 className="font-medium text-gray-500 dark:text-gray-300 mb-1">Referral Code</h3>
            <p className="text-xl font-mono">{userData.referralCode}</p>
          </div>
          
          <div className="bg-blue-50 dark:bg-[#283149] p-4 rounded-md">
            <h3 className="font-medium text-blue-500 dark:text-blue-300 mb-1">Total Raised</h3>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">${userData.amountRaised}</p>
          </div>
        </div>
        
        <Rewards amountRaised={userData.amountRaised} />
      </div>
    </div>
  );
};

export default Dashboard;
