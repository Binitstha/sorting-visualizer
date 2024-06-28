import { generateBubbleSortAnimation } from "@/algorithms/bubbleSort";
import { Animations, SortingAlgorithm } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Max_animate_speed = 100;
export const Min_animate_speed = 10;

export const generateRandomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateAnimationArray = (
  selectedAlgorithm: SortingAlgorithm,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void
) => {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimation(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
};
