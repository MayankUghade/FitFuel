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

export default function AddDinner() {
  const { data } = useSession();

  const [dinner, setDinner] = useState("");
  const [calories, setCalories] = useState(0);

  const userEmail = data?.user?.email;

  const handlesubmit = async () => {
    try {
      const response = await fetch("/api/addDinner", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          FoodItems: dinner,
          CalorieIntake: calories,
        }),
      });

      if (!response.ok) {
        throw new Error("Error while adding the breakfast in the database");
      }

      const responseData = await response.json();
      console.log(responseData);
      alert("Dinner added successfully");
    } catch (error) {
      console.log(error);
      alert("Error while adding the breakfast in the database");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="p-2 border-2 rounded-lg">Add Dinner</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dinner:</DialogTitle>
            <DialogDescription>
              Add today's Dinner in the application
            </DialogDescription>
            <div className="flex flex-col gap-5">
              <div className="mt-3">
                <h1 className="mt-2">Food Item</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="text"
                  value={dinner}
                  onChange={(e) => setDinner(e.target.value)}
                />

                <h1 className="mt-2">Calorie Intake</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="Number"
                  value={calories}
                  onChange={(e) => setCalories(parseInt(e.target.value))}
                />
              </div>

              <div className=" flex items-center justify-center">
                <button
                  onClick={handlesubmit}
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
