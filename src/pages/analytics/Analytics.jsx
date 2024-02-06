import { twMerge } from "tailwind-merge";
import SectionLayout from "../SectionLayout";

const classNameSpan =
  "text-grey text-sm font-barlow whitespace-nowrap uppercase text-shadow-100";

function Analytics() {
  return (
    <SectionLayout>
      <h2 className="uppercase text-2xl sm:text-3xl text-shadow-100 max-sm:text-center">
        Analytics
      </h2>

      <div className="my-10 rounded-xl overflow-hidden bg-[#0C1C2E] py-5 px-4 sm:py-[4%] sm:px-[3%] border border-solid border-br-light drop-shadow-sm shadow-md">
        <div>
          <p className={classNameSpan}>BETS VOLUME (BIN)</p>
          <h3 className=" text-5xl mt-1">2,039,304</h3>
          <span className="mt-1 text-tiny block">($11,382,182.31)</span>
        </div>

        <ul className="pt-8 sm:px-6 flex-row !flex-wrap !justify-between gap-6">
          <li className="flex max-sm:flex-col !justify-between sm:gap-2">
            <p className={twMerge(classNameSpan, "sm:text-[1rem] text-grey")}>
              LOSSES VOLUME
            </p>
            <div>
              <span className="text-white text-center"> 27,132,251</span>
              <span className="text-tiny block sm:text-center">
                ($6,078,784.16)
              </span>
            </div>
          </li>
          <li className="flex max-sm:flex-col !justify-between sm:gap-2">
            <p className={twMerge(classNameSpan, "sm:text-[1rem] text-grey")}>
              LOSSES VOLUME
            </p>
            <div>
              <span className="text-white text-center"> 27,132,251</span>
              <span className="text-tiny block sm:text-center">
                ($6,078,784.16)
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="my-8 ml-1">
        <p
          className={twMerge(classNameSpan, "text-tiny capitalize  text-grey")}
        >
          Total BIN In Pools
        </p>
        <h3 className="text-3xl text-shadow-100">88,652</h3>
      </div>
    </SectionLayout>
  );
}

export default Analytics;
