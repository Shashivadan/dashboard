import Applicants from "../../assets/Applicants.svg";
import Mactches from "../../assets/Mactches.svg";
import Messaages from "../../assets/Messaages.png";
import views from "../../assets/views.svg";
export default function Analytics() {
  return (
    <div>
      <div className="w-[336px] m-auto">
        <div className=" flex justify-between items-center pb-4 border-solid border-b-[2px]">
          <div className="flex gap-3 text-[#4F4F4F]">
            <img height={"15px"} width={"16.67px"} src={Applicants} alt="" />
            <div className="text-[16px]">Appliction</div>
          </div>
          <div className="text-[20px] text-[#3D3D3D]">400</div>
        </div>
        <div className=" flex justify-between items-center pb-4 pt-4 border-solid border-b-[2px]">
          <div className="flex gap-3 text-[#4F4F4F]">
            <img height={"15px"} width={"16.67px"} src={Mactches} alt="" />
            <div className="text-[16px]">Matches</div>
          </div>
          <div className="text-[20px] text-[#3D3D3D]">100</div>
        </div>
        <div className=" flex justify-between items-center pb-4 pt-4 border-solid border-b-[2px]">
          <div className="flex gap-3 text-[#4F4F4F]">
            <img height={"15px"} width={"16.67px"} src={Messaages} alt="" />
            <div className="text-[16px]">Messages</div>
          </div>
          <div className="text-[20px] text-[#3D3D3D]">147</div>
        </div>
        <div className=" flex justify-between items-center pb-4 pt-4 ">
          <div className="flex gap-3 text-[#4F4F4F]">
            <img height={"15px"} width={"16.67px"} src={views} alt="" />
            <div className="text-[16px] ">Views</div>
          </div>
          <div className="text-[20px] text-[#3D3D3D]">800</div>
        </div>
      </div>
    </div>
  );
}
