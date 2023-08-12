import Image from "next/image";
import ThemeSwitch from "./_components/UI/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1000px] mx-auto py-10">
      <div className="flex justify-between gap-10">
        <h1 className="flex-1">Joe Doe</h1>
        <p className="flex-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          necessitatibus voluptates aliquam, quidem dolorem nisi nemo amet magni
          exercitationem sunt a eius debitis voluptatem reprehenderit
          blanditiis? Similique commodi perferendis veritatis excepturi repellat
          nemo vel dolore quam a, maxime dolorem quaerat?
        </p>
      </div>
      <ThemeSwitch />
    </main>
  );
}
