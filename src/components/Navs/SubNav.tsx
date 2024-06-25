import React from "react";

export default function SubNav() {
  return (
    <div>
      <div className="w-[1728px] h-[71.39px] top-[187.53px] gap-0 border-t border-opacity-0 m-auto border-b-2 font-Poppins">
        <div className=" h-[26.64px] top-[137.45px] left-[100px] flex gap-[72px]  absolute">
          <div>
            <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#DC4A2D]">
              Job preview
            </div>
            <div className="w-[65px] h-[2.13px] top-[42px] left-4 absolute bg-[#DC4A2D]"></div>
          </div>
          <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#888888]">
            Applicants
          </div>
          <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#888888]">
            Match
          </div>
          <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#888888]">
            Messages
          </div>
        </div>
      </div>
    </div>
  );
}
