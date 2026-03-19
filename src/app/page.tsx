"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import SkipassSection from "@/components/sections/SkipassSection";
import SeasonToggleSection from "@/components/sections/SeasonToggleSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AccommodationSection />
      <SkipassSection />
      <SeasonToggleSection />
      <CTASection />
    </main>
  );
}
