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
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Nav = () => {
  const { resetArrayAndAnimate, isSorting,animationSpeed,setAnimationSpeed } = useSortingAlgorithmContext();
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
          <div className="flex gap-2 justify-center items-center w-36">
            <p>{animationSpeed}x</p>
            <Slider
              defaultValue={[20]}
              max={100}
              disabled={isSorting}
              step={10}
              onValueChange={(value: number[]) => setAnimationSpeed(value[0])}
            />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort algorithm" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort algorithm</SelectLabel>
                  <SelectItem value="merge">merge</SelectItem>
                  <SelectItem value="merge1">merge</SelectItem>
                  <SelectItem value="merge12">merge</SelectItem>
                  <SelectItem value="merge13">merge</SelectItem>
                  <SelectItem value="merge14">merge</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
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
              className="border rounded-lg p-2 text-sm px-2"
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
