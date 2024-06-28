export interface AlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (arrayToSort: number[]) => void;
  selectedAlgorithm: SortingAlgorithm;
  setSelectedAlgorithm: (selectedAlgorithm: SortingAlgorithm) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (animationSpeed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isAnimationComplete: boolean) => void;
  resetArrayAndAnimate: () => void;
  runAnimation: (animations: Animations) => void;
  requireReset: boolean;
  userInputArrayLength: number | undefined;
  setUserInputArrayLength: (userInputArrayLength: number) => void;
}

export type SortingAlgorithm =
  | "bubble"
  | "merge"
  | "selection"
  | "insertion"
  | "quick";


export type Animations = [number[], boolean][];
