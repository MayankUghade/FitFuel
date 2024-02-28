import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:p-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
