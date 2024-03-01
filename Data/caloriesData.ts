import { useEffect, useState } from "react";
import {
  fetchBreakfast,
  fetchLunch,
  fetchDinner,
  fetchSnacks,
} from "./FetchData";
import { useSession } from "next-auth/react";

export default function CaloriesData() {
  const [combinedData, setCombinedData] = useState<any[]>([]);
  const { data } = useSession();

  const userEmail = data?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await fetchBreakfast();
        const breakfastData = separationLogic(breakfast);

        const lunch = await fetchLunch();
        const lunchData = separationLogic(lunch);

        const dinner = await fetchDinner();
        const dinnerData = separationLogic(dinner);

        const snacks = await fetchSnacks();
        const snacksData = separationLogic(snacks);

        const combined = [
          ...breakfastData,
          ...lunchData,
          ...dinnerData,
          ...snacksData,
        ];
        setCombinedData(combined);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userEmail) {
      fetchData();
    }
  }, [userEmail]);

  const separationLogic = (foodItems: any[]) => {
    const currentUser = foodItems.filter(
      (item) => item.userEmail === userEmail
    );
    const currentDate = new Date().toISOString().split("T")[0];
    const filtered = currentUser.filter(
      (item) => item.createdAt.split("T")[0] === currentDate
    );
    return filtered;
  };

  const calculateTotalCalories = (foodItems: any[]) => {
    let totalCalories = 0;
    for (const item of foodItems) {
      totalCalories += item.CalorieIntake;
    }
    return totalCalories;
  };

  const totalCalories = calculateTotalCalories(combinedData);
  return totalCalories;
}
