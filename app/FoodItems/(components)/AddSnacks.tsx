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

export default function AddSnacks() {
  const { data } = useSession();

  const [snack, setSnack] = useState("");
  const [calories, setCalories] = useState(0);

  const userEmail = data?.user?.email;

  const handleClick = async () => {
    try {
      const response = await fetch("/api/addSnacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          FoodItems: snack,
          CalorieIntake: calories,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      alert("Snacks added successfully");
      console.log(responseData);
    } catch (error) {
      console.log(error);
      alert("There was an error while adding snack in the database");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="p-2 border-2 rounded-lg">Add Snacks</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Snacks:</DialogTitle>
            <DialogDescription>
              Add some snack's in the application
            </DialogDescription>
            <div className="flex flex-col gap-5">
              <div className="mt-3">
                <h1 className="mt-2">Food Item</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="text"
                  value={snack}
                  onChange={(e) => setSnack(e.target.value)}
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
