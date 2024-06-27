export interface AlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (arrayToSort: number[]) => void;
  selectedAlgorithm: SortingAlgorithm;
  setSelectedAlgorithm: (selectedAlgorithm: SortingAlgorithm) => void;
  isSorting: boolean;
  setSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (animationSpeed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isAnimationComplete: boolean) => void;
  resetArrayAndAnimate: () => void;
  runAnimation: () => void;
}

export type SortingAlgorithm = {};
