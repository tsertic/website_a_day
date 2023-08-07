import Image from "next/image";
import { HeroSection } from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="pt-[100px] text-base-content mx-auto max-w-[1400px] px-[24px]">
      <HeroSection />
      <div className="min-h-screen">
        {/* Placeholder for other sections , in this exercise only hero section is important */}
      </div>
    </main>
  );
}
