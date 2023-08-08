import Image from "next/image";
import { HeroSection } from "./_components/Homepage/HeroSection";

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto px-[50px] md:px-[100px] pt-[70px]">
      <HeroSection />
    </main>
  );
}
