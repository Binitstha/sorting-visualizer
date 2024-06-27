"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { roboto, roboto_mono } from "./fonts";
import { useSortingAlgorithmContext } from "@/context/visualize";
import { useEffect } from "react";

const Nav = () => {
  const {
    resetArrayAndAnimate,
    isSorting,
    setSelectedAlgorithm,
    selectedAlgorithm,
  } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log(selectedAlgorithm);
  }, [selectedAlgorithm]);
  return (
    <>
      <main
        className={`flex justify-between p-5 h-full items-center ${roboto.className}`}
      >
        <div>
          <Link href={"./"}>
            <h1 className={`${roboto_mono.className} text-3xl`}>
              SORT VISUALIZER
            </h1>
          </Link>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Select onValueChange={(value) => setSelectedAlgorithm(value)}>
              <SelectTrigger className="w-[180px]" disabled={isSorting}>
                <SelectValue placeholder="Sort algorithm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort algorithm</SelectLabel>
                  <SelectItem value="bubble">Bubble</SelectItem>
                  <SelectItem value="quick">Quick</SelectItem>
                  <SelectItem value="merge">Merge</SelectItem>
                  <SelectItem value="insertion">Insertion</SelectItem>
                  <SelectItem value="selection">Selection</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]" disabled={isSorting}>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>select size</SelectLabel>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">50</SelectItem>
                  <SelectItem value="50">100</SelectItem>
                  <SelectItem value="100">200</SelectItem>
                  <SelectItem value="1000">500</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <button
              onClick={resetArrayAndAnimate}
              disabled={isSorting}
              className="border disabled:cursor-not-allowed rounded-lg p-2 text-sm px-2"
            >
              Randomize
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Nav;
