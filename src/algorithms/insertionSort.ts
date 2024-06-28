import { Animations } from "@/types/types";

const insertionSort = (array: number[], animations: Animations) => {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    // Record animation for key comparison
    animations.push([[i, j], false]);

    while (j >= 0 && array[j] > key) {
      // Record animation for swapping elements
      animations.push([[j + 1, array[j]], true]);
      // Shift element to the right
      array[j + 1] = array[j];
      j--;

      if (j >= 0) {
        // Record animation for key comparison
        animations.push([[i, j], false]);
      }
    }

    // Place key in correct position
    array[j + 1] = key;

    if (j + 1 !== i) {
      // Record animation for placing key in correct position
      animations.push([[j + 1, key], true]);
    }
  }
};

export const generateInsertionSortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void
) => {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  insertionSort(auxiliaryArray, animations);
  runAnimation(animations);
};
