import MarkPin from "../../assets/marker-pin-01.svg";
import CoinBill from "../../assets/coinsbills.svg";

export default function Title() {
  return (
    <div>
      <div className="w-[662px] h-[107px] mt-[36px]  gap-[24px]  flex flex-col">
        <div className="flex gap-2">
          <div className="font-poppins text-[35px] font-bold leading-[52.5px] text-left text-[#3D3D3D] ">
            Senior Product Designer
          </div>
          <div className=" flex items-center justify-center gap-2 text-[#888888]">
            <div className="w-[4px] h-[4px] bg-[#D1D1D1] rounded-full"></div>
            <div className="text-sm font-normal leading-[21px] text-left ">
              posted 2 days ago
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <div className=" flex  bg-[#ABEFC6] items-center justify-center gap-2  border-solid border-[1px] border-green-300 rounded-full px-2">
              <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
              <div className="font-poppins text-xs font-medium leading-[18px] text-center text-[#067647]">
                Open
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex gap-1 ">
            <img src={MarkPin} height={"20px"} width={"16px"} alt="" />
            <div className="text-base font-normal leading-[30px] text-[#5D5D5D]">
              Delaware, USA
            </div>
          </div>
          <div className="w-[4px] h-[4px] bg-[#D1D1D1] rounded-full"></div>
          <div className="flex gap-1 ">
            <img height={"20px"} width={"16px"} src={CoinBill} alt="" />
            <div className="text-base font-normal leading-[30px] text-[#5D5D5D]">
              $300k-$400k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
