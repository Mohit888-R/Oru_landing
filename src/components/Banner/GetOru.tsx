import { AppStore, PlayStore } from "../QRcode";

export const GetOruPhones = () => {
  return (
    <div className="bg-yellow-400">
      <div className="flex py-12 items-center justify-between container  px-16">
        <span className="text-[38px] w-6/12 font-bold">
          Get the Oruphones app now!
        </span>
        <div className="flex justify-evenly  w-6/12 ">
          <PlayStore />
          <AppStore />
        </div>
      </div>
    </div>
  );
};
