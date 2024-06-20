"use client"
import { useState } from 'react';
import CorporationSection from "@/components/CorporationSection";
import TitleBar from "@/components/TitleBar";
import EmailFormat from "@/components/EmailFormat"; // Import the EmailFormat component

export default function Home() {
  const [showEmailFormat, setShowEmailFormat] = useState(false); // State to toggle EmailFormat component
  const [showCorporationSection, setShowCorporationSection] = useState(true); // State to toggle CorporationSection component

  const handleShowEmailFormat = () => {
    setShowEmailFormat((prevShowEmailFormat) => !prevShowEmailFormat);
    setShowCorporationSection((prevShowCorporationSection) => !prevShowCorporationSection);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] no-scrollbar rounded-xl">
      <TitleBar/>
      <div className="container mx-auto px-12 py-4 text-white">
      <button onClick={handleShowEmailFormat}>Show Email Format</button>
        {showEmailFormat && <EmailFormat />} {/* Conditionally render EmailFormat component */}
        {showCorporationSection && <CorporationSection/>}
      </div>
    </main>
  );
}