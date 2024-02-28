"use client";

import { fetchLunch } from "@/Data/FetchData";
import DataCard from "@/components/DataCard";
import Delete from "@/Data/deleteData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DisplayBreakfast() {
  const [lunchData, setLunchData] = useState([]);
  const { data } = useSession();
  const userEmail = data?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await fetchLunch();
        const currentUser = breakfast.filter(
          (object: any) => object.userEmail === userEmail
        );
        setLunchData(currentUser);
      } catch (error) {
        console.error("Error fetching breakfast data:", error);
      }
    };
    fetchData();
  }, [userEmail]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center border-t sm:h-screen">
      <h1 className="text-3xl font-bold mt-5 sm:mt-0">Lunch</h1>

      <div className="flex flex-col gap-5 items-center justify-center">
        {lunchData.map((items: any) => (
          <div key={items.id} className="flex flex-col gap-2">
            <p className="flex text-gray-500 text-sm text-left">
              <span className="text-md font-semibold">Created at:</span>{" "}
              {new Date(items.createdAt).toISOString().split("T")[0]}
            </p>

            <DataCard
              data={items}
              id={items.id}
              onDelete={() => Delete("addLunch", items.id)}
              mealType="Lunch"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
