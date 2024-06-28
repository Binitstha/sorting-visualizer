"use client";
import { useSortingAlgorithmContext } from "@/context/visualize";
import { SortingAlgorithmData } from "@/lib/utils";

const AlgorithmInfo = () => {
  const { selectedAlgorithm } = useSortingAlgorithmContext();
  const algorithmData = SortingAlgorithmData[selectedAlgorithm];

  return (
    <>
      <div className=" flex justify-center items-center lg:p-8 p-5">
        <div className="lg:w-[35rem] lg:p-6 h-96 p-3">
          <div className=" flex justify-start flex-col items-center gap-8">
            <h2 className="lg:text-3xl text-xl h-16 flex justify-center items-center">
              {algorithmData.title}
            </h2>
            <p className="lg:text-lg text-sm">{algorithmData.description}</p>
          </div>
        </div>
        <div className="border h-80"></div>
        <div className="w-[35rem] lg:p-6 h-96 p-3">
          <div className="flex lg:text-lg text-sm justify-start flex-col items-start gap-8">
            <h2 className="lg:text-3xl text-xl h-16 flex justify-center w-full items-center">
              Performance
            </h2>
            <div>
              <p>
                <strong>Worst Case:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: algorithmData.worstCase }}
                />
              </p>
              <p>
                <strong>Average Case:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: algorithmData.averageCase,
                  }}
                />
              </p>
              <p>
                <strong>Best Case:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: algorithmData.bestCase }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgorithmInfo;
