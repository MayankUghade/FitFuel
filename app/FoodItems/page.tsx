"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddBreakfast from "./(components)/AddBreakfast";
import AddDinner from "./(components)/AddDinner";
import AddLunch from "./(components)/AddLunch";
import AddSnacks from "./(components)/AddSnacks";
import DataCard from "@/components/DataCard";
import {
  fetchBreakfast,
  fetchLunch,
  fetchDinner,
  fetchSnacks,
} from "@/Data/FetchData";
import Delete from "@/Data/deleteData";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface MealDisplayProps {
  mealType: string;
  mealItems: any[];
  onDelete: (id: string) => void;
}

const MealDisplay = ({ mealType, mealItems, onDelete }: MealDisplayProps) => (
  <ScrollArea className="flex items-center justify-center h-[300px] border-t-2 border-b-2 border-gray-500 p-3">
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-right font-semibold">Today's {mealType}</h1>
      {mealItems.length === 0 ? (
        <p className="mt-5">No {mealType} Added yet</p>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          {mealItems.map((item) => (
            <DataCard
              data={item}
              id={item.id}
              onDelete={() => onDelete(item.id)}
              mealType={mealType}
            />
          ))}
        </div>
      )}
    </div>
  </ScrollArea>
);

export default function AddFood() {
  const { data } = useSession();
  const [mealData, setMealData] = useState({
    breakfastItems: [],
    lunchItems: [],
    dinnerItems: [],
    snacksItems: [],
  });
  const userEmail = data?.user?.email;

  const DisplayLogic = (foodItem: any) => {
    const currentUser = foodItem.filter(
      (object: any) => object.userEmail === userEmail
    );
    const currentData = new Date().toISOString().split("T")[0];
    const FilteredData = currentUser.filter(
      (item: any) => item.createdAt.split("T")[0] === currentData
    );
    return FilteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await fetchBreakfast();
        const breakfastData = DisplayLogic(breakfast);

        const lunch = await fetchLunch();
        const lunchData = DisplayLogic(lunch);

        const dinner = await fetchDinner();
        const dinnerData = DisplayLogic(dinner);

        const snacks = await fetchSnacks();
        const snacksData = DisplayLogic(snacks);

        setMealData({
          breakfastItems: breakfastData,
          lunchItems: lunchData,
          dinnerItems: dinnerData,
          snacksItems: snacksData,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userEmail, mealData]);

  return (
    <div className="flex flex-col gap-10 items-center justify-center p-5 border-t-2">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">
        Please input your daily meals
      </h1>

      <div className="flex items-center justify-center gap-12 flex-wrap">
        {/* Add breakfast */}
        <div className="flex flex-col justify-between sm:w-[550px] w-[350px] h-[400px] border-2 border-gray-500 rounded-lg">
          <div className="flex items-center gap-2 mt-2">
            <h1 className="m-4 text-2xl font-semibold">Breakfast</h1>
            <div>
              <AddBreakfast />
            </div>
          </div>

          <MealDisplay
            mealType="Breakfast"
            mealItems={mealData.breakfastItems}
            onDelete={(id: string) => Delete("addBreakfast", id)}
          />

          <div className="text-right m-3">
            <Link
              href="/FoodItems/Breakfast"
              className="p-2 border-2 rounded-lg"
            >
              view more
            </Link>
          </div>
        </div>

        {/* Add Lunch */}
        <div className="flex flex-col justify-between sm:w-[550px] w-[350px] h-[400px] border-2 border-gray-500 rounded-lg">
          <div className="flex items-center gap-2 mt-2">
            <h1 className="m-4 text-2xl font-semibold">Lunch</h1>
            <div>
              <AddLunch />
            </div>
          </div>

          <MealDisplay
            mealType="Lunch"
            mealItems={mealData.lunchItems}
            onDelete={(id: string) => Delete("addLunch", id)}
          />

          <div className="text-right m-3">
            <Link href="/FoodItems/Lunch" className="p-2 border-2 rounded-lg">
              view more
            </Link>
          </div>
        </div>

        {/* Add Dinner*/}
        <div className="flex flex-col justify-between sm:w-[550px] w-[350px] h-[460px] border-2 border-gray-500 rounded-lg">
          <div className="flex items-center gap-2 mt-2">
            <h1 className="m-4 text-2xl font-semibold">Dinner</h1>
            <div>
              <AddDinner />
            </div>
          </div>

          <MealDisplay
            mealType="Dinner"
            mealItems={mealData.dinnerItems}
            onDelete={(id: string) => Delete("addDinner", id)}
          />

          <div className="text-right m-3">
            <Link href="/FoodItems/Dinner" className="p-2 border-2 rounded-lg">
              view more
            </Link>
          </div>
        </div>

        {/* Add snacks*/}
        <div className="flex flex-col justify-between sm:w-[550px] w-[350px] h-[460px] border-2 border-gray-500 rounded-lg">
          <div className="flex items-center gap-2 mt-2">
            <h1 className="m-4 text-2xl font-semibold">Snacks</h1>
            <div>
              <AddSnacks />
            </div>
          </div>

          <MealDisplay
            mealType="Snacks"
            mealItems={mealData.snacksItems}
            onDelete={(id: string) => Delete("addSnacks", id)}
          />

          <div className="text-right m-3">
            <Link href="/FoodItems/Snacks" className="p-2 border-2 rounded-lg">
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
