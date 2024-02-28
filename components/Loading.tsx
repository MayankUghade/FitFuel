import Image from "next/image";
import loader from "@/public/loader2.svg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={loader} alt="loading" />
    </div>
  );
}
