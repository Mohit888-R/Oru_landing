import { AppStore, PlayStore } from "../QRcode";

const DownloadBannerfirst = () => {
  return (
    <div className="container flex lg:flex-row flex-col items-center justify-between py-8 lg:px-16 ">
      <div className="w-10/12 text-center lg:text-left">
        <div className="lg:w-10/12 text-[24px]  lg:text-[38px] font-[700]">
          {" "}
          <span className=" text-[28px] lg:text-[40px] text-[#F6C018] font-[800]">
            {" "}
            Buy and Sell
          </span>{" "}
          Verified Used Mobile Phones Nearby
        </div>
        <div className="lg:w-10/12 text-[16px] lg:text-[20px] font-normal">
          India’s first ever marketplace dedicated to buying and selling used
          mobile phones nearby
        </div>
      </div>
      <div className="flex justify-end lg:justify-evenly  w-6/12 ">
        <PlayStore />
        <AppStore />
      </div>
    </div>
  );
};

export default DownloadBannerfirst;
