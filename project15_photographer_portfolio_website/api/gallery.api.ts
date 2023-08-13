import { IGalleryItem } from "@/types/gallery.type";
import axios from "axios";

export const galleryApi = axios.create({
  baseURL: "http://127.0.0.1:5678/gallery",
});

export const getGallery = async (): Promise<IGalleryItem[]> => {
  const res = await galleryApi.get("/");
  return res.data;
};
