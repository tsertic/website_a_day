"use client";
import Image from "next/image";
import ThemeSwitch from "./_components/UI/ThemeSwitch";
import { useQuery } from "react-query";
import { getGallery } from "@/api/gallery.api";
export default function Home() {
  const { isLoading, data: gallery } = useQuery("gallery", getGallery);
  console.log(gallery);
  return (
    <main className="flex flex-col  max-w-[1000px] mx-auto py-10 px-2">
      <div className="flex justify-between gap-10 flex-col text-center sm:flex-row sm:text-left">
        <h1 className="flex-1 text-2xl">
          Joe Doe <br /> Photographer | Artist
        </h1>
        <p className="flex-1 tracking-wider">
          Step into a world of visual storytelling through my lens. This
          portfolio is a curation of moments frozen in time, each image telling
          a unique story. Join me in exploring the beauty, emotion, and artistry
          captured through the art of photography.
        </p>
      </div>
      {isLoading && <div>Loading...</div>}
      {gallery && (
        <div>
          {gallery.map((galleryItem) => {
            return <p key={galleryItem.id}>{galleryItem.name}</p>;
          })}
        </div>
      )}
    </main>
  );
}
