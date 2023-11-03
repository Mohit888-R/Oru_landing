import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

const TeamCard = ({
  imgUrl,
  teammateName,
  position,
  bio,
}: {
  imgUrl: string;
  teammateName: string;
  position: string;
  bio: string;
}) => {
  return (
    <div className="w-72 bg-white  px-2 py-8 text-center leading-7 shadow-gray-300 ring-2 ring-white drop-shadow-md duration-100 hover:scale-105 hover:cursor-default lg:p-6">
      {useResponsive("md") ? (
        <Image
          src={imgUrl}
          width={74}
          height={74}
          className="m-auto h-20 w-20 justify-center rounded-full border"
          alt={`${teammateName}'s avatar`}
        />
      ) : (
        <Image
          src={imgUrl}
          width={120}
          height={120}
          className="m-auto h-20 w-20 justify-center rounded-full border"
          alt={`${teammateName}'s avatar`}
        />
      )}
      <h2 className="text-[12px] font-bold md:text-[18px] ">{teammateName}</h2>
      <p className="text-[12px] font-medium text-[#8c8c8c] md:text-[18px]">
        {position}
      </p>
      <p className="whitespace-wrap py-2 text-center text-[10px] font-normal leading-6 md:text-[16px]">
        {bio}
      </p>
    </div>
  );
};

export default TeamCard;
