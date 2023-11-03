import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

const AboutUsMobileBanner = () => {
  return (
    <div className="container m-auto justify-center py-16 border-b-2 border-black  items-center gap-8">
      <div className="flex gap-16 relative">
        <div className="absolute bottom-0 left-0 xl:hidden w-[97px] items-center  bg-background-yellow p-4 rounded-lg h-min flex flex-col">
          <Image
            src={"/assets/Flying-iPhone.svg"}
            width={32}
            height={46}
            className=""
            alt=""
          />
          <Image
            src={"/assets/shadow.svg"}
            width={60}
            height={60}
            className="-mt-12"
            alt=""
          />
        </div>
        <div className="m-auto inline-flex w-4/12 rounded-lg bg-background-purple p-4 pb-0 xl:w-6/12 xl:justify-center">
          <Image
            src={"/assets/koreN.svg"}
            width={184}
            height={243}
            className=""
            alt=""
          />
        </div>
        <div className="absolute right-0 top-0 flex h-min w-[97px]  flex-col items-center rounded-lg bg-background-yellow p-4 xl:hidden">
          <Image
            src={"/assets/Flying-iPhone.svg"}
            width={32}
            height={46}
            className=""
            alt=""
          />
          <Image
            src={"/assets/shadow.svg"}
            width={60}
            height={60}
            className="-mt-12"
            alt=""
          />
        </div>
      </div>
      <div className="flex  justify-center text-[9px] md:text-[14px]  space-x-6 py-12">
        <span className="bg-background-lightPurple rounded-lg p-4 text-center">
          {useResponsive("md") ? (
            <Image
              src={"/assets/transfer.svg"}
              width={36}
              height={36}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          ) : (
            <Image
              src={"/assets/transfer.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          )}

          <b>ORU</b>
          <br />
          <span>Diagnostic test</span>
        </span>
        <span className="rounded-lg bg-background-lightPurple p-4 text-center">
          {useResponsive("md") ? (
            <Image
              src={"/assets/transfer.svg"}
              width={36}
              height={36}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          ) : (
            <Image
              src={"/assets/transfer.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          )}

          <b>ORU</b>
          <br />
          <span>Diagnostic test</span>
        </span>
        <span className="rounded-lg bg-background-lightPurple p-4 text-center">
          {useResponsive("md") ? (
            <Image
              src={"/assets/transfer-solid.svg"}
              width={36}
              height={36}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          ) : (
            <Image
              src={"/assets/transfer-solid.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          )}

          <b>ORU</b>
          <br />
          <span>Diagnostic test</span>
        </span>
        <span className="rounded-lg bg-background-lightPurple p-4 text-center">
          {useResponsive("md") ? (
            <Image
              src={"/assets/secure.svg"}
              width={36}
              height={36}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          ) : (
            <Image
              src={"/assets/secure.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt={`avatar`}
            />
          )}

          <b>ORU</b>
          <br />
          <span>Diagnostic test</span>
        </span>
      </div>
    </div>
  );
};

export default AboutUsMobileBanner;
