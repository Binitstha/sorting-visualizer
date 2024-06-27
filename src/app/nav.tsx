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

const Nav = () => {
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
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="1000">1000</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <button>Randomize</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Nav;