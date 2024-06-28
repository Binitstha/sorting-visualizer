import { Animations } from "@/types/types";

const merge = (
  array: number[],
  left: number,
  mid: number,
  right: number,
  animations: Animations,
) => {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArray = array.slice(left, left + n1);
  const rightArray = array.slice(mid + 1, mid + 1 + n2);

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    animations.push([[left + i, mid + 1 + j], false]);
    if (leftArray[i] <= rightArray[j]) {
      animations.push([[k, leftArray[i]], true]);
      array[k++] = leftArray[i++];
    } else {
      animations.push([[k, rightArray[j]], true]);
      array[k++] = rightArray[j++];
    }
  }

  while (i < n1) {
    animations.push([[k, leftArray[i]], true]);
    array[k++] = leftArray[i++];
  }

  while (j < n2) {
    animations.push([[k, rightArray[j]], true]);
    array[k++] = rightArray[j++];
  }
};

const runMergeSort = (
  array: number[],
  left: number,
  right: number,
  animations: Animations,
) => {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);

  runMergeSort(array, left, mid, animations);
  runMergeSort(array, mid + 1, right, animations);

  merge(array, left, mid, right, animations);
};

export const generateMergeSortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void,
) => {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  runMergeSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  runAnimation(animations);
};
