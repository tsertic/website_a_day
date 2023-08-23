import { HeroSection } from "./_components/HomePage/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="pt-[100px] md:pt-[150px] w-full relative">
      <div className="w-full px-5 max-w-[1300px] mx-auto">
        <HeroSection />
      </div>
    </main>
  );
}
