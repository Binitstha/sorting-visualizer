import { generateBubbleSortAnimation } from "@/algorithms/bubbleSort";
import { generateInsertionSortAnimation } from "@/algorithms/insertionSort";
import { generateMergeSortAnimation } from "@/algorithms/mergeSort";
import { generateQuicksortAnimation } from "@/algorithms/quickSort";
import { generateSelectionSortAnimation } from "@/algorithms/selectionSort";
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
  runAnimation: (animations: Animations) => void,
) => {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimation(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimation(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimation(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuicksortAnimation(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimation(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
};

export const SortingAlgorithmData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    worstCase: "O(n<sup>2</sup>)",
    averageCase: "O(n<sup>2</sup>)",
    bestCase: "O(n)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge Sort is a divide-and-conquer algorithm that divides the unsorted list into sublists, each containing one element, and then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection Sort is an in-place comparison sorting algorithm. It has an O(n<sup>2</sup>) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.",
    worstCase: "O(n<sup>2</sup>)",
    averageCase: "O(n<sup>2</sup>)",
    bestCase: "O(n<sup>2</sup>)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    worstCase: "O(n<sup>2</sup>)",
    averageCase: "O(n<sup>2</sup>)",
    bestCase: "O(n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to divide a list into sublists around a pivot element, recursively sorting the sublists.",
    worstCase: "O(n<sup>2</sup>)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
