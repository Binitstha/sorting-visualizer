import { Animations } from "@/types/types";

const runBubbleSort = (array: number[], animations: Animations) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([[j, array[j + 1]], true]);
        animations.push([[j + 1, array[j]], true]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};

export const generateBubbleSortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void,
) => {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  runBubbleSort(auxiliaryArray, animations);
  runAnimation(animations);
};
