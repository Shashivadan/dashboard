import Berifcase from "../../assets/briefcase-02.svg";
import Messagesvg from "../../assets/message-square-01.svg";
import CoinHand from "../../assets/coins-hand.svg";
import UserSvg from "../../assets/users-01.svg";
import Bellicon from "../../assets/boilicon.svg";
import Profile from "../../assets/Rectangle 5.png";
import ChevronDown from "../../assets/chevron-down.svg";

export default function Navbar() {
  return (
    <div>
      <div className="p-6">
        <div className="h-[65px] flex items-center justify-between border-pink-300 max-w-[1664px] m-auto">
          <div className=" text-center font-extrabold bg-[#E7E7E7] h-[61px] flex justify-center items-center py-[9px] px-[28px] text-orange-600 ">
            Loge
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className=" shadow-custom-light bg-[#DC4A2D] h-[58px] text-white text-[20px] flex items-center justify-center border-solid border-2 gap-[8px] rounded-[49px] p-2">
              <img
                width="24px"
                height={"24px"}
                src={Berifcase}
                alt="Berifcase"
              />
              <div>Jobs</div>
            </div>
            <div
              className="w-[602px] h-[72px] border-solid border-[0.5px] rounded-[36px] shadow-custom-inset border-[#D1D1D1] text-[background: rgba(176, 176, 176, 1);
] flex items-center "
            >
              <div className=" flex justify-between items-center w-11/12 m-auto text-[#B0B0B0]  font-poppins text-[20px] font-normal leading-[30px]">
                <div className=" flex gap-[8px] relative ">
                  {" "}
                  <img src={Messagesvg} alt="" />
                  <div>Messages</div>
                  <div className=" h-[6px] w-[6px] bg-[#DC4A2D] rounded-full absolute top-[3px] left-5"></div>
                </div>
                <div className=" flex gap-[8px] ">
                  <img src={CoinHand} alt="" />
                  <div>Payments</div>
                </div>
                <div className=" flex gap-[8px] ">
                  <img src={UserSvg} alt="" />
                  <div>Application</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[134px] h-[60px] p-[10px_0_0_0] flex gap-[16px] items-center justify-center">
            <div className=" relative">
              <img src={Bellicon} alt="" />
              <div className=" h-[6px] w-[6px] bg-[#DC4A2D] rounded-full absolute top-0 left-5"></div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div>
                <img src={Profile} alt="" />
              </div>
              <div>
                <img src={ChevronDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
