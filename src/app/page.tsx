"use client";
import { useState } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { heroSectionId } from "@/sections/constants";

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>(heroSectionId);

  return (
    <>
      <Header
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
      />
      <HeroSection id={heroSectionId} />
    </>
  );
}
