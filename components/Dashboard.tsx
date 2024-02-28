import { useSession } from "next-auth/react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { fetchCalories } from "@/Data/FetchData";
import Graphs from "./Graph";
import AddCalorie from "./AddCalorie";
import AddWater from "./AddWater";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const Dashboard = () => {
  const { data, status } = useSession();
  const [calorieGoal, setCalorieGoal] = useState(0);

  const userEmail = data?.user?.email;

  const fetchData = async () => {
    try {
      const data = await fetchCalories();
      const currentUser = data.find(
        (user: any) => user.userEmail === userEmail
      );
      if (currentUser) {
        const userCalorie = currentUser.Calorie;
        setCalorieGoal(userCalorie);
        console.log(calorieGoal);
      } else {
        console.log("The user Not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col gap-5 p-5 border-t-2">
        <div className="p-3 flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row item-center justify-between">
            <h1 className="md:text-5xl text-3xl">
              Hi, <b>{data?.user?.name}</b>!
            </h1>
            <div className="flex gap-2">
              <AddCalorie />
              <AddWater />
            </div>
          </div>

          <p className="md:text-2xl text-gray-500 dark:text-gray-400">
            Daily Calorie Goal: <b>{calorieGoal}</b>
          </p>
          <div className="flex items-center gap-2 justify-between md:text-2xl">
            <p className="text-gray-500 dark:text-gray-400 ">
              Calories Consumed: <b>1200</b>
            </p>
            <div className="flex-1 hidden sm:flex p-5">
              <Progress value={(1200 / calorieGoal) * 100} />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 items-center justify-center border-2 rounded-3xl dark:">
          <h1 className="mr-auto ml-2 text-3xl font-semibold m-5">
            Daily Graph
          </h1>
          <Graphs />
        </div>
      </div>
    );
  }
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
