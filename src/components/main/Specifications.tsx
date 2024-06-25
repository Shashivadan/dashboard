import figma from "../../assets/figma.png";
import lullustrator from "../../assets/lullustrator.png";
import XD from "../../assets/vd.png";

export default function Specifications() {
  return (
    <div className="w-[872px] h-[123px]">
      <div className="flex  justify-between">
        <div>
          <div className="text-[14px] font-normal leading-[21px] text-[#6E6D6D]">
            Skills Required
          </div>
          <div className=" mt-2 flex flex-col gap-[5px]">
            <div className=" rounded-md shadow-inner inset shadow-[0px 4px 4px 0px] w-fit bg-[#FFFFFF] border-[#D0D5DD] border-[1px] border-solid flex gap-1 px-2 py-1 ">
              <img src={figma} alt="" />
              <div className=" text-[12px]">Figma</div>
            </div>
            <div className=" rounded-md shadow-inner inset shadow-[0px 4px 4px 0px] w-fit bg-[#FFFFFF] border-[#D0D5DD] border-[1px] border-solid flex gap-1 px-2 py-1 ">
              <img src={lullustrator} alt="" />
              <div className=" text-[12px]">Adobe Illustrator</div>
            </div>
            <div className=" rounded-md shadow-inner inset shadow-[0px 4px 4px 0px] w-fit bg-[#FFFFFF] border-[#D0D5DD] border-[1px] border-solid flex gap-1 px-2 py-1 ">
              <img src={XD} alt="" />
              <div className=" text-[12px]">Adobe XD</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[14px] font-normal leading-[21px] text-[#6E6D6D]">
            Preferred Language
          </div>
          <div className=" text-[16px]">English</div>
        </div>
        <div>
          <div className="text-[14px] font-normal leading-[21px] text-[#6E6D6D]">
            Type
          </div>
          <div className=" text-[16px]">Full time</div>
        </div>
        <div>
          <div className="text-[14px] font-normal leading-[21px] text-[#6E6D6D]">
            Years of Experience
          </div>
          <div className=" text-[16px]">3+ Years of Experience</div>
        </div>
      </div>
    </div>
  );
}
