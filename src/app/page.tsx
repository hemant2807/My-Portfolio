"use client";

import { useState } from "react";

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
// import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";
// import { AboutSection } from "@/sections/About";
// import { ContactSection } from "@/sections/Contact";
// import { Footer } from "@/sections/Footer";

import {
  heroSectionId,
  projectsSectionId,
  testimonialsSectionId,
  aboutSectionId,
  contactSectionId,
} from "@/sections/constants";

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>(heroSectionId);

  return (
    <>
      <Header
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
      />

      <HeroSection id={heroSectionId} />

      <ProjectsSection id={projectsSectionId} />

      {/* <TapeSection /> */}

      {/* <TestimonialsSection id={testimonialsSectionId} /> */}

      {/* <AboutSection id={aboutSectionId} /> */}

      {/* <ContactSection id={contactSectionId} /> */}

      {/* <Footer /> */}
    </>
  );
}
