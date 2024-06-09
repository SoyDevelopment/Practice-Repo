import CorporationSection from "@/components/CorporationSection";
import TitleBar from "@/components/TitleBar";
import Image from "next/image";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212]">
    <TitleBar/>
    <div className="container mx-auto px-12 py-4 text-white">
      <CorporationSection/>
    </div>
  </main>
  );
}
