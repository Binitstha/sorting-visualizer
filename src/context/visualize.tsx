"use client";
import { Max_animate_speed } from "@/lib/utils";
import { AlgorithmContextType, SortingAlgorithm } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

const SortingAlgorithmContext = createContext<AlgorithmContextType | undefined>(
  undefined
);

export const SortingAlgorithmContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([100, 40, 20, 120]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlgorithm>("bubble");
  const [isSorting, setSorting] = useState(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(Max_animate_speed);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const resetArrayAndAnimate = () => {
    const contentContainer = document.getElementById("contentContainer");

    if(contentContainer) return
    
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
