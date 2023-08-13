import Image from "next/image";
import ThemeSwitch from "./_components/UI/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1000px] mx-auto py-10">
      <div className="flex justify-between gap-10">
        <h1 className="flex-1">Joe Doe</h1>
        <p className="flex-1">
          Step into a world of visual storytelling through my lens. This
          portfolio is a curation of moments frozen in time, each image telling
          a unique story. Join me in exploring the beauty, emotion, and artistry
          captured through the art of photography.
        </p>
      </div>
    </main>
  );
}
