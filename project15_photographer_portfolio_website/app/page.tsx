"use client";
import Image from "next/image";
import ThemeSwitch from "./_components/UI/ThemeSwitch";
import { useQuery } from "react-query";
import { getGallery } from "@/api/gallery.api";
import { squareTypeArray } from "./../constants/constants";
export default function Home() {
  const { isLoading, data: gallery } = useQuery("gallery", getGallery);
  console.log(gallery);
  return (
    <main className="flex flex-col  max-w-[1000px] mx-auto py-10 px-2">
      <div className="flex justify-between gap-10 flex-col text-center sm:flex-row sm:text-left mb-[40px]">
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
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/loading.gif"
            width={200}
            height={100}
            alt="loading spinner"
          />
        </div>
      )}
      {gallery && (
        <div className="grid grid-cols-[repeat(4,1fr)] gap-4 min-h-screen h-auto">
          {gallery.map((galleryItem, i) => {
            let gridType =
              squareTypeArray[i] === "medium"
                ? "col-span-2 row-span-2"
                : squareTypeArray[i] === "small"
                ? "col-span-1 row-span-1"
                : "col-span-2 row-span-1";
            let imgSize =
              gridType === "medium"
                ? { w: 700, h: 600 }
                : gridType === "small"
                ? { w: 350, h: 300 }
                : { w: 700, h: 300 };
            return (
              <div key={galleryItem.id} className={`${gridType} `}>
                <Image
                  placeholder="blur"
                  blurDataURL="/images/blured.webp"
                  alt={galleryItem.name}
                  width={imgSize.w}
                  height={imgSize.h}
                  src={`/images/${galleryItem.imgName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
