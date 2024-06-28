import { Animations } from "@/types/types";

const runSelectionSort = (array: number[], animations: Animations) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      animations.push([[j, minIndex], false]);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push([[minIndex, array[i]], true]);
      animations.push([[i, array[minIndex]], true]);

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
};

export const generateSelectionSortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void
) => {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  runSelectionSort(auxiliaryArray, animations);
  runAnimation(animations);
};
