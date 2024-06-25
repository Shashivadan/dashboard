import atlassionlogo from "../../assets/atlassionlogo.png";

export default function Footer() {
  return (
    <div>
      <div className="w-[697px] h-[277px]">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-normal gap-4">
            <img width={"40px"} src={atlassionlogo} alt="" />
            <div className=" text-[30px] text-[#4F4F4F]">Atlassian </div>
            <button className="py-[14px] px-[24px] h-[26px]  rounded-[8px] shadow-md bg-[#E0EBF9] text-[11px] flex items-center justify-center text-[#003788] font-extrabold">
              Follow
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Company size
                  </div>
                  <div>1k - 2k Employees</div>
                </div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Sector
                  </div>
                  <div>Information Technology, Infrastructure</div>
                </div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Founded In
                  </div>
                  <div>2019</div>
                </div>
              </div>
              <div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Type{" "}
                  </div>
                  <div>Private</div>
                </div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Funding
                  </div>
                  <div>Bootstrapped</div>
                </div>
                <div>
                  <div className=" w-[344px] h-[51px] flex justify-around flex-col text-[14px] text-[#6E6D6D]">
                    Founded By
                  </div>
                  <div>Scott Farquhar,Mike Cannon-Brookes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
