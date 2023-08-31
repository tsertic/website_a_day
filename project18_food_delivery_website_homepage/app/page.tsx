import { ClientsFeedbackSection } from "./_components/HomePage/ClientsFeedbackSection/ClientsFeedbackSection";
import { HeroSection } from "./_components/HomePage/HeroSection/HeroSection";
import { HowOrderSection } from "./_components/HomePage/HowOrderSection/HowOrderSection";
import { OrdersInfoSection } from "./_components/HomePage/OrdersInfoSection/OrdersInfoSection";

export default function Home() {
  return (
    <main className="pt-[100px] md:pt-[150px] w-full relative">
      <div className="w-full px-5 max-w-[1300px] mx-auto flex flex-col gap-[100px] lg:gap-[150px]">
        <HeroSection />
        <OrdersInfoSection />
        <HowOrderSection />
        <ClientsFeedbackSection />
      </div>
    </main>
  );
}
