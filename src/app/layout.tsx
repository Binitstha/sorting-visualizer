import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SortingAlgorithmContextProvider } from "@/context/visualize";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting visualizer",
  description:
    "Sorting visualiser for bubble sort,merge sort,selection sort, insertion sort,quick sort with animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortingAlgorithmContextProvider>
          {children}
        </SortingAlgorithmContextProvider>
      </body>
    </html>
  );
}
