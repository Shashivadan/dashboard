import Description from "./Description";
import Footer from "./Footer";
import SideComponent from "./SideComponent";
import Specifications from "./Specifications";
import Title from "./Title";

export default function Main() {
  return (
    <div className="w-[1728px]  flex m-auto">
      <div className="flex flex-col gap-[24px] w-full  ">
        <div className="border-solid border-b-2 pb-4">
          <Title />
        </div>
        <div className="border-solid border-b-2 pb-5">
          <Specifications />
        </div>
        <div className="border-solid border-b-2 pb-5 ">
          <Description />
        </div>
        <div>
          <Footer />
        </div>
        <p className="text-[#B0B0B0] text-[12px] underline decoration-1 mb-5">
          Report this listing
        </p>
      </div>
      <div className="   border-r-[1px] border-l-[1px] border-[0px]  border-solid border-[#E7E7E7] shadow-md pt-[36px] px-2  ">
        {" "}
        <SideComponent />
      </div>
    </div>
  );
}
// top-[36px] relative
// 421px h-[1227.47px]
