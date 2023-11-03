import Image from "next/image";
import React, { ReactNode } from "react";

const VisionCard = ({
  ImgUrl,
  title,
  children,
}: {
  ImgUrl: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Image
        src={ImgUrl}
        alt="Vision Image"
        width={38}
        height={38}
        className="h-16 w-16 pb-4 "
      />
      <span className="relative text-[18px] font-medium text-[#3F3E8F] md:text-[24px] ">
        {title}
        <span className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-[#3F3E8F]"></span>
      </span>

      <div className="mt-6 text-justify text-[16px] font-normal opacity-80 md:text-[18px]">
        {children}
      </div>
    </div>
  );
};

export default VisionCard;
