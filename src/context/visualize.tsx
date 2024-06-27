"use client";
import { Max_animate_speed, generateRandomNumber } from "@/lib/utils";
import { AlgorithmContextType, SortingAlgorithm } from "@/types/types";
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
  const [isSorting, setSorting] = useState(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(Max_animate_speed);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

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
    setSorting(false);
  };
  const runAnimation = () => {};

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimate,
    runAnimation,
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
