"use client";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import ModeSwitch from "./ModeSwitch";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data, status } = useSession();

  return (
    <div className="px-4 lg:px-6 h-14 flex items-center mb-3 mt-5 md:mt-0">
      <Link href="/" className="flex items-center justify-center gap-2">
        <FilterHdrIcon className="w-[50px] h-[50px]" />
        <h1 className="text-xl font-bold">FitFuel</h1>
      </Link>
      <nav className="items-center justify-center ml-auto flex gap-3">
        <ModeSwitch />
        {status === "unauthenticated" ? (
          <Link
            href="/signUp"
            className="text-sm font-medium p-2 bg-blue-600 rounded-lg text-white"
          >
            SignUp
          </Link>
        ) : (
          <>
            <Link
              href="/FoodItems"
              className="text-sm font-medium p-2 bg-blue-600 rounded-lg text-white"
            >
              Add Meals
            </Link>
            <div
              onClick={() => signOut()}
              className="text-sm font-medium p-2 bg-blue-600 rounded-lg text-white"
            >
              SignOut
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
