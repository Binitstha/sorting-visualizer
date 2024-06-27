"use client";
import { useSortingAlgorithmContext } from "@/context/visualize";
import { useEffect } from "react";

const AlgorithVisualizer = () => {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();
  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
  }, [arrayToSort, isSorting]);

  return (
    <section className=" p-10 relative px-16 h-[37rem]" >
      <div className="border-2 h-full bottom-10 flex justify-center px-3 items-end gap-2" id="contentContainer">
        {arrayToSort.map((value, index) => (
          <div
            key={index}
            className=" h-[15rem] w-4 bg-stone-700 rounded-md rounded-b-none"
            style={{ height: `${value}px` }}
          >
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlgorithVisualizer;
