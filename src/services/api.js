import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

// Fallback data in case of error
const getFallbackData = () => ({
  name: "Demo User",
  referralCode: "demo2025",
  amountRaised: 1500
});

export const getUserData = async () => {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = [];
    usersSnapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
    return users[0] || getFallbackData();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return getFallbackData();
  }
};

export const getLeaderboard = async () => {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = [];
    usersSnapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
    return users.sort((a, b) => b.amountRaised - a.amountRaised);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [
      { name: "Nagamalla Abhinav", referralCode: "nabhi2025", amountRaised: 2450 },
      { name: "Kumbala Arun", referralCode: "karun2025", amountRaised: 1850 },
      { name: "Soumith Banala", referralCode: "Soumb2025", amountRaised: 1200 }
    ];
  }
};