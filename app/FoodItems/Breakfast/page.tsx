"use client";
import { fetchBreakfast } from "@/Data/FetchData";
import DataCard from "@/components/DataCard";
import Delete from "@/Data/deleteData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DisplayBreakfast() {
  const [breakFastData, setBreakFastData] = useState([]);
  const { data } = useSession();
  const userEmail = data?.user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await fetchBreakfast();
        const currentUser = breakfast.filter(
          (object: any) => object.userEmail === userEmail
        );
        setBreakFastData(currentUser);
      } catch (error) {
        console.error("Error fetching breakfast data:", error);
      }
    };
    fetchData();
  }, [userEmail, breakFastData]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center border-t">
      <h1 className="text-3xl font-bold mt-5 mb-5 sm:mt-0">Breakfast</h1>

      <div className="flex flex-col gap-5 items-center justify-center">
        {breakFastData.map((items: any) => (
          <div key={items.id} className="flex flex-col gap-2">
            <p className="flex text-gray-500 text-sm ">
              <span className="text-md font-semibold">Created at:</span>{" "}
              {new Date(items.createdAt).toISOString().split("T")[0]}
            </p>
            <DataCard
              data={items}
              id={items.id}
              onDelete={() => Delete("addBreakfast", items.id)}
              mealType="Breakfast"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
