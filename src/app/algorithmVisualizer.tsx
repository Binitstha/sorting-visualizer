"use client";
import { Slider } from "@/components/ui/slider";
import { useSortingAlgorithmContext } from "@/context/visualize";
import { generateAnimationArray } from "@/lib/utils";
import clsx from "clsx";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const AlgorithVisualizer = () => {
  const { arrayToSort, isSorting, selectedAlgorithm, runAnimation } =
    useSortingAlgorithmContext();

  const {
    animationSpeed,
    setAnimationSpeed,
    requireReset,
    resetArrayAndAnimate,
  } = useSortingAlgorithmContext();

  const handleClick = () => {
    resetArrayAndAnimate();
    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation,
    );
  };
  return (
    <section className="p-7 flex flex-col gap-5 relative px-16 h-[40rem]">
      <div
        className="border h-full rounded-md bottom-10 flex justify-center px-3 items-end gap-2"
        id="contentContainer"
      >
        {arrayToSort.map((value, index) => (
          <div
            key={index}
            className="array-lines bg-stone-700 h-[15rem] w-4 rounded-md rounded-b-none"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="flex gap-5 relative justify-center items-center">
        <div>
          <div
            className="cursor-pointer p-3 transition-all duration-500 rounded-full bg-stone-700 flex justify-center items-center"
            onClick={handleClick}
          >
            {isSorting ? (
              <GrPowerReset />
            ) : (
              <FaPlay className="text-center overflow-visible" />
            )}
          </div>
        </div>
        <div className="w-fit absolute right-4">
          <div
            className={clsx(
              isSorting ? "opacity-60 cursor-not-allowed" : "opacity-100",
              "flex gap-2 justify-center items-center w-36",
            )}
          >
            <p>{animationSpeed}x</p>
            <Slider
              defaultValue={[animationSpeed]}
              max={100}
              min={10}
              disabled={isSorting}
              step={10}
              onValueChange={(value: number[]) => setAnimationSpeed(value[0])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithVisualizer;
