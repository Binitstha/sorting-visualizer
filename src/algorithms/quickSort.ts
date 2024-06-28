import { Animations } from "@/types/types";

const partition = (array: number[], low: number, high: number, animations: Animations): number => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push([[j, high], false]);
    if (array[j] < pivot) {
      i++;
      animations.push([[i, array[j]], true]);
      animations.push([[j, array[i]], true]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  animations.push([[i + 1, array[high]], true]);
  animations.push([[high, array[i + 1]], true]);
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1;
};

const runQuicksort = (array: number[], low: number, high: number, animations: Animations) => {
  if (low < high) {
    const partitionIndex = partition(array, low, high, animations);
    runQuicksort(array, low, partitionIndex - 1, animations);
    runQuicksort(array, partitionIndex + 1, high, animations);
  }
};

export const generateQuicksortAnimation = (
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: Animations) => void
) => {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: Animations = [];
  const auxiliaryArray = array.slice();
  runQuicksort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  runAnimation(animations);
};
