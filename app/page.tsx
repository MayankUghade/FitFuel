"use client";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  return (
    <div className="md:p-6 flex flex-col min-h-[100dvh]">
      <Navbar />
      {status === "unauthenticated" ? (
        <>
          <LandingPage />
        </>
      ) : (
        <>
          <Dashboard />
        </>
      )}

      <Footer />
    </div>
  );
}
