"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
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

export default function AddCalorie() {
  const { data } = useSession();

  const [waterGoal, setWaterGoal] = useState(0);
  const [loading, setLoading] = useState(false);

  const userEmail = data?.user?.email;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/addWaterIntake", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userEmail, water: waterGoal }),
      });

      if (!response.ok) {
        throw new Error("Error while adding the Calorie goal in the database");
      }

      const responseData = await response.json();
      console.log(responseData);
      alert("Calorie goal added successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <button className="p-2 border-2 rounded-lg w-full">
            Add Water Goal
          </button>
        </DrawerTrigger>
        <DrawerContent className="flex items-center justify-center h-[400px] gap-3">
          <DrawerHeader>
            <DrawerTitle className="md:text-4xl text-2xl">
              Water Intake
            </DrawerTitle>
            <DrawerDescription>
              Please add the water intake goal for the day
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-5">
            <input
              type="number"
              value={waterGoal}
              onChange={(e) => setWaterGoal(parseInt(e.target.value))}
              className="p-3 rounded-lg bg-transparent outline-none md:text-3xl text-xl font-bold border-2"
              placeholder="Water intake in Liter"
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
