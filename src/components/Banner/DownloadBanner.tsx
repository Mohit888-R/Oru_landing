import { ArrowDownToLine } from "lucide-react";
import { AppStore, PlayStore } from "../QRcode";
import { Button } from "../ui/button";

const DownloadBannerfirst = () => {
  return (
    <div className="container flex lg:flex-row flex-col items-center justify-between py-8 lg:px-16 ">
      <div className="text-center lg:text-left">
        <div className=" text-[24px]  lg:text-[38px] font-[700]">
          {" "}
          <span className=" text-[28px] lg:text-[40px] text-[#F6C018] font-[800]">
            {" "}
            Buy and Sell
          </span>{" "}
          Verified Used Mobile Phones Near You
        </div>
        <div className="lg:w-8/12 text-[16px] lg:text-[20px] font-normal">
          India’s first ever marketplace dedicated to buying and selling used
          mobile phones Locally
        </div>
      </div>
      <div className="w-8/12 lg:mt-0 mt-8">
        <div className="flex flex-col m-auto text-center  justify-center text-[20px]  lg:text-[28px] font-[700] items-center text-yellow-500 gap-2  py-2 ">
          <span>Download The ORUphones </span> <span>App Now</span>
        </div>
        <div className="w-8/12 m-auto flex justify-end lg:justify-evenly ">
          <PlayStore />
          <AppStore />
        </div>
      </div>
    </div>
  );
};

export default DownloadBannerfirst;
