import { AppStore, PlayStore } from "../QRcode";

const GetOruPhones = () => {
  return (
    <div className="bg-yellow-400">
      <div className="flex lg:flex-row flex-col py-12 items-center justify-between container  px-16">
        <span className="text-[24px] lg:py-0 py-8 text-center lg:text-[38px] lg:w-6/12 font-bold">
          Get the Oruphones app now!
        </span>
        <div className="flex justify-evenly  lg:w-6/12 ">
          <PlayStore />
          <AppStore />
        </div>
      </div>
    </div>
  );
};

export default GetOruPhones;
