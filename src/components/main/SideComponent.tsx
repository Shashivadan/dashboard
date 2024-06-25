import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Analytics from "./Analytics";
import Card from "./Card";

export default function SideComponent() {
  return (
    <div>
      <div className="flex justify-between gap-4">
        <div className=" px-[12px] py-[24px] w-[200px] bg-[#FEF4F2] text-[#DC4A2D] h-[48px] flex items-center justify-center gap-[10px] border-solid border-[#DC4A2D] border-[0.8px] rounded-[8px]">
          <img src={Delete} alt="" />
          <div>Delete Job</div>
        </div>
        <div className=" px-[12px] py-[24px] w-[200px] bg-[#DC4A2D] text-[#FEF4F2] h-[48px] flex items-center justify-center gap-[10px] border-solid border-[#DC4A2D] border-[0.8px] rounded-[8px]">
          <img src={Edit} alt="" />
          <div>Edit Job</div>
        </div>
      </div>
      <div className="mt-12">
        <Analytics />
      </div>
      <div className="mt-12">
        <Card />
      </div>
    </div>
  );
}
