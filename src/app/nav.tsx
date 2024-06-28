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
import { SortingAlgorithm } from "@/types/types";

const Nav = () => {
  const {
    resetArrayAndAnimate,
    isSorting,
    setSelectedAlgorithm,
    setUserInputArrayLength,
  } = useSortingAlgorithmContext();

  return (
    <>
      <main
        className={`flex justify-between lg:gap-0 gap-5 lg:flex-row flex-col p-5 h-full items-center ${roboto.className}`}
      >
        <div>
          <Link href={"./"}>
            <h1 className={`${roboto_mono.className} text-3xl`}>
              SORT VISUALIZER
            </h1>
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
          <div className="flex gap-3">
            <div>
              <Select
                onValueChange={(value: SortingAlgorithm) =>
                  setSelectedAlgorithm(value)
                }
              >
                <SelectTrigger className="w-[180px]" disabled={isSorting}>
                  <SelectValue placeholder="Sort algorithm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort algorithm</SelectLabel>
                    <SelectItem value="bubble">Bubble sort</SelectItem>
                    <SelectItem value="quick">Quick sort</SelectItem>
                    <SelectItem value="merge">Merge sort</SelectItem>
                    <SelectItem value="insertion">Insertion sort</SelectItem>
                    <SelectItem value="selection">Selection sort</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                onValueChange={(value: string) =>
                  setUserInputArrayLength(parseInt(value))
                }
              >
                <SelectTrigger className="w-[180px]" disabled={isSorting}>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select size</SelectLabel>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="30">50</SelectItem>
                    <SelectItem value="70">100</SelectItem>
                    <SelectItem value="130">200</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
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
