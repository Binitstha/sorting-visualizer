"use client";
import { Max_animate_speed, generateRandomNumber } from "@/lib/utils";
import {
  AlgorithmContextType,
  Animations,
  SortingAlgorithm,
} from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const SortingAlgorithmContext = createContext<AlgorithmContextType | undefined>(
  undefined,
);

export const SortingAlgorithmContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlgorithm>("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState<number>(50);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);
  const requireReset: boolean = true;
  const [userInputArrayLength, setUserInputArrayLength] = useState<number>();

  useEffect(() => {
    resetArrayAndAnimate();

    window.addEventListener("resize", resetArrayAndAnimate);

    return () => {
      window.removeEventListener("resize", resetArrayAndAnimate);
    };
  }, []);

  const resetArrayAndAnimate = () => {
    const contentContainer = document.getElementById("contentContainer");

    if (!contentContainer) return;
    const contentContainerWidth = contentContainer.clientWidth;
    const tempArray: number[] = [];
    const numLines = userInputArrayLength
      ? userInputArrayLength
      : contentContainerWidth / 15;
    const containerHeight = window.innerHeight;
    const maxLineHeight = Math.max(containerHeight - 390, 100);
    for (let i = 0; i < numLines; i++) {
      tempArray.push(generateRandomNumber(40, maxLineHeight));
    }

    setArrayToSort(tempArray);
    setIsAnimationComplete(false);
    setIsSorting(false);

    const highestId = window.setTimeout(() => {
      for (let i = highestId; i >= 0; i--) {
        window.clearTimeout(i);
      }
    }, 0);

    setTimeout(() => {
      const arrayLines = document.getElementsByClassName(
        "array-lines",
      ) as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < arrayLines.length; i++) {
        // arrayLines[i].classList.remove("bg-white");
        arrayLines[i].classList.add("bg-stone-700");
      }
    }, 0);
  };

  const runAnimation = (animations: Animations) => {
    setIsSorting(true);

    const inverseSpeed = (1 / animationSpeed) * 400;
    const arrayLines = document.getElementsByClassName(
      "array-lines",
    ) as HTMLCollectionOf<HTMLElement>;

    const updateClassList = (
      indexes: number[],
      addClassName: string,
      removeClassName: string,
    ) => {
      indexes.forEach((element) => {
        const line = arrayLines[element];
        line.classList.remove(removeClassName);
        line.classList.add(addClassName);
      });
    };

    const updateLineHeight = (
      lineIndex: number,
      newLineHeight: number | undefined,
    ) => {
      if (newLineHeight === undefined) return;
      arrayLines[lineIndex].style.height = `${newLineHeight}px`;
    };

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [values, isSwap] = animation;

        if (!isSwap) {
          updateClassList(values, "bg-white", "bg-stone-700");
          setTimeout(() => {
            updateClassList(values, "bg-stone-700", "bg-white");
          }, inverseSpeed);
        } else {
          const [lineIndex, newLineHeight] = values;
          updateLineHeight(lineIndex, newLineHeight);
        }
      }, index * inverseSpeed);
    });

    const finalTimeout = animations.length * inverseSpeed;

    setTimeout(() => {
      Array.from(arrayLines).forEach((line) => {
        line.classList.add("animate-pulse", "bg-stone-600", "duration-400");
        line.classList.remove("bg-stone-700");
      });

      setTimeout(() => {
        Array.from(arrayLines).forEach((line) => {
          line.classList.remove(
            "animate-pulse",
            "duration-400",
            "bg-stone-600",
          );
          line.classList.add("bg-stone-700");
        });
        setIsSorting(false);
        setIsAnimationComplete(true);
      }, 1000);
    }, finalTimeout);
  };

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimate,
    runAnimation,
    requireReset,
    userInputArrayLength,
    setUserInputArrayLength,
  };

  return (
    <SortingAlgorithmContext.Provider value={value}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if (!context)
    throw new Error(
      "useSortingAlgorithmContext must be used within a SortingAlgorithmContextProvider",
    );
  return context;
};
