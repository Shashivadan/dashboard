import Avatar from "../../assets/Avatar.png";

export default function Card() {
  return (
    <div>
      <div className=" w-[385px] h-[196px] m-auto border-solid border-[#F7F7F7] border-[1px] rounded-[12px] shadow-custom-card p-[32px] flex flex-col justify-between">
        <div className=" text-[20px] font-semibold">
          “A quote from a Atlassian.”
        </div>
        <div className="flex gap-4">
          <img src={Avatar} alt="" />
          <div className="flex flex-col gap-[2px]">
            <div className=" text-[16px] font-semibold">Name</div>
            <div className=" text-[#828282] font-medium">Description</div>
          </div>
        </div>
      </div>
    </div>
  );
}
