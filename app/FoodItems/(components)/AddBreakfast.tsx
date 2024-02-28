"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddBreakfast() {
  const { data } = useSession();

  const [foodItem, setFoodItem] = useState("");
  const [caloriesIntake, sertCaloriesIntake] = useState(0);

  const userEmail = data?.user?.email;

  const checkValues = () => {
    if ((foodItem === "" && caloriesIntake === 0) || caloriesIntake < 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = async () => {
    try {
      const response = await fetch("/api/addBreakfast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          FoodItems: foodItem,
          CalorieIntake: caloriesIntake,
        }),
      });

      if (!response.ok) {
        throw new Error("Error while adding the breakfast in the database");
      }

      const responseData = await response.json();
      alert("Breakfast added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="p-2 border-2 rounded-lg">Add Breakfast</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Breakfast:</DialogTitle>
            <DialogDescription>
              Add today's breakfast in the application
            </DialogDescription>
            <div className="flex flex-col gap-5">
              <div className="mt-3">
                <h1 className="mt-2">Food Item</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="text"
                  value={foodItem}
                  onChange={(e) => setFoodItem(e.target.value)}
                />

                <h1 className="mt-2">Calorie Intake</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="Number"
                  value={caloriesIntake}
                  onChange={(e) => sertCaloriesIntake(parseInt(e.target.value))}
                />
              </div>

              <div className=" flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="p-2 w-[130px] border-2 dark:bg-white dark:text-black bg-gray-800 text-white rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
