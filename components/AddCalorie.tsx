import React, { useState } from "react";
import { fetchCalories } from "@/Data/FetchData";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSession } from "next-auth/react";

export default function AddWater() {
  const { data } = useSession();

  const [calorieGoal, setCalorieGoal] = useState(0);
  const [loading, setLoading] = useState(false);
  const userEmail = data?.user?.email;

  const router = useRouter();

  //Function to check whether the calorie goal is added or not to determine the POST or PATCH request
  const checkData = async () => {
    try {
      const data = await fetchCalories();
      const user = data.find((item: any) => item.userEmail === userEmail);
      if (user && user.Calorie) {
        return "PATCH";
      } else {
        return "POST";
      }
    } catch (error) {
      console.log(error);
    }
  };

  //The POST or PATCH request
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const method = await checkData();
      const response = await fetch("/api/addCalories", {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userEmail, Calorie: calorieGoal }),
      });

      if (!response.ok) {
        throw new Error("Error while adding the Calorie goal in the database");
      }

      const responseData = await response.json();
      console.log(responseData);
      alert("Calorie goal added successfully");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <button className="p-2 border-2 rounded-lg w-full">
            Add Calorie Goal
          </button>
        </DrawerTrigger>
        <DrawerContent className="flex items-center justify-center h-[400px] gap-3">
          <DrawerHeader>
            <DrawerTitle className="md:text-4xl text-2xl">
              Calorie Goal
            </DrawerTitle>
            <DrawerDescription>
              Please add the calorie goal for the day
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-5">
            <input
              type="number"
              value={calorieGoal}
              onChange={(e) => setCalorieGoal(parseInt(e.target.value))}
              className="p-3 rounded-lg bg-transparent outline-none md:text-3xl text-xl font-bold border-2"
              placeholder="Enter calorie goal"
            />

            <button
              onClick={handleSubmit}
              className="p-3 rounded-lg border-2 dark:bg-white dark:text-black bg-gray-800 text-white text-2xl font-bold"
            >
              Submit
            </button>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <button className="p-3 border-2 rounded-lg text-xl w-[160px]">
                Cancel
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
