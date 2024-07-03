import { Animations } from "@/types/types";

const insertionSort = (array: number[], animations: Animations) => {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    
    animations.push([[i, j], false]);

    while (j >= 0 && array[j] > key) {
      animations.push([[j + 1, array[j]], true]);
      array[j + 1] = array[j];
      j--;

      if (j >= 0) {
        animations.push([[i, j], false]);
      }
    }

    array[j + 1] = key;

    if (j + 1 !== i) {
      animations.push([[j + 1, key], true]);
    }
  }
};

export const generateInsertionSortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void,
) => {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  insertionSort(auxiliaryArray, animations);
  runAnimation(animations);
};
