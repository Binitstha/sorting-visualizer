"use client";
import { Max_animate_speed, generateRandomNumber } from "@/lib/utils";
import {
  AlgorithmContextType,
  Animations,
  SortingAlgorithm,
} from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const SortingAlgorithmContext = createContext<AlgorithmContextType | undefined>(
  undefined
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
  const requireReset: boolean = false;

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
    const numLines = contentContainerWidth / 15;
    const containerHeight = window.innerHeight;
    const maxLineHeight = Math.max(containerHeight - 390, 100);
    for (let i = 0; i < numLines; i++) {
      tempArray.push(generateRandomNumber(40, maxLineHeight));
    }

    setArrayToSort(tempArray);
    setIsAnimationComplete(false);
    setIsSorting(false);
  };
  const runAnimation = (animations: Animations) => {
    setIsSorting(true);

    const inverseSpeed = (1 / animationSpeed) * 200;
    const arrayLines = document.getElementsByClassName("array-lines");

    const updateClassList = (
      indexes: number[],
      addClassName: string,
      removeClassName: string
    ) => {
      indexes.forEach((element) => {
        arrayLines[element].classList.add(addClassName);
        arrayLines[element].classList.remove(removeClassName);
      });
    };

    const updateLineHeight = (
      lineIndex: number,
      newLineHeight: number | undefined
    ) => {
      if (newLineHeight === undefined) return;
      (arrayLines[lineIndex] as HTMLElement).style.height =
        `${newLineHeight}px`;
    };

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [values, isSwap] = animation;

        if (!isSwap) {
          updateClassList(values, "bg-red-300", "bg-green-300");
          setTimeout(() => {
            updateClassList(values, "bg-green-300", "bg-red-300");
          }, inverseSpeed);
        } else {
          const [lineIndex, newLineHeight] = values;
          updateLineHeight(lineIndex, newLineHeight);
        }
      }, index * inverseSpeed);
    });
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
      "useSortingAlgorithmContext must be used within a SortingAlgorithmContextProvider"
    );
  return context;
};
