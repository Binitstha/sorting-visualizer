import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Max_animate_speed = 400;
export const Min_animate_speed = 100;

export const generateRandomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
