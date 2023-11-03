import Image from "next/image";

const AboutUsBanner = () => {
  return (
    <div className="container  flex items-center justify-center gap-8 border-b-2  border-black py-16">
      <div className="space-y-4">
        <div className="flex space-x-6  text-[14px]">
          <span className="rounded-lg bg-[#f7bf18] p-4 text-center">
            <Image
              src={"/assets/transfer.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt=""
            />
            <b>ORU</b>
            <br />
            <span>Diagnostic test</span>
          </span>
          <span className="rounded-lg bg-[#c9c8f9] p-4 text-center">
            <Image
              src={"/assets/transfer.svg"}
              width={68}
              height={68}
              className="m-auto justify-center"
              alt=""
            />
            <b>ORU</b>
            <br />
            <span>Diagnostic test</span>
          </span>
        </div>
        <div className="inline-flex flex-col rounded-lg bg-[#f7bf18] p-4 px-20">
          <Image
            src={"/assets/Flying-iPhone.svg"}
            width={100}
            height={140}
            className=""
            alt=""
          />
          <Image
            src={"/assets/shadow.svg"}
            width={150}
            height={150}
            className="-mt-24"
            alt=""
          />
        </div>
      </div>
      <div className="inline-flex rounded-lg bg-[#ffffff] p-4 pb-0">
        <Image
          src={"/assets/koreN.svg"}
          width={333}
          height={446}
          className=""
          alt=""
        />
      </div>
      <div>
        <div className="space-y-4">
          <div className="inline-flex flex-col rounded-lg bg-[#f7bf18] p-4 px-20">
            <Image
              src={"/assets/Flying-iPhone.svg"}
              width={100}
              height={140}
              className=""
              alt=""
            />
            <Image
              src={"/assets/shadow.svg"}
              width={150}
              height={150}
              className="-mt-24"
              alt=""
            />
          </div>
          <div className="flex space-x-6  text-[14px]">
            <span className="rounded-lg bg-[#c9c8f9] p-4 text-center">
              <Image
                src={"/assets/transfer-solid.svg"}
                width={68}
                height={68}
                className="m-auto justify-center"
                alt=""
              />
              <b>ORU</b>
              <br />
              <span>Diagnostic test</span>
            </span>
            <span className="rounded-lg bg-[#c9c8f9] p-4 text-center">
              <Image
                src={"/assets/secure2.svg"}
                width={68}
                height={68}
                className="m-auto justify-center"
                alt=""
              />
              <b>ORU</b>
              <br />
              <span>Diagnostic test</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
