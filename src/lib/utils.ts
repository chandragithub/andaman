import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (folder:string, path: string) => {
  return new URL(`../assets/images/${folder}/${path}.jpg`, import.meta.url).href;
 };

 export const getImageUrlPng = (folder:string, path: string) => {
  return new URL(`../assets/images/${folder}/${path}.png`, import.meta.url).href;
 };
