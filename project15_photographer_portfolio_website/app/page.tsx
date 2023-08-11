import Image from "next/image";
import ThemeSwitch from "./_components/UI/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test Font</h1>
      <ThemeSwitch />
    </main>
  );
}
