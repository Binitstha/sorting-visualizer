"use client";
import { useSortingAlgorithmContext } from "@/context/visualize";
import { SortingAlgorithmData } from "@/lib/utils";

const AlgorithmInfo = () => {
  const { selectedAlgorithm } = useSortingAlgorithmContext();
  const algorithmData = SortingAlgorithmData[selectedAlgorithm];

  return (
    <>
      <div className=" flex justify-center items-center p-8">
        <div className="w-[35rem] p-6 h-96">
          <div className=" flex justify-start flex-col items-center gap-8">
            <h2 className="text-3xl h-16 flex justify-center items-center">
              {algorithmData.title}
            </h2>
            <p className="text-lg">{algorithmData.description}</p>
          </div>
        </div>
        <div className="border h-80"></div>
        <div className="w-[35rem] p-6 h-96">
          <div className="flex text-lg justify-start flex-col items-start gap-8">
            <h2 className="text-3xl h-16 flex justify-center w-full items-center">
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
