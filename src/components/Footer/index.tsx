import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import useResponsive from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetOruPhones } from "../Banner/GetOru";
import { BottomBar } from "../BottomBar";

const Faq = [
  {
    que: "How to sell your old phone on OruPhones?",
    ans: "Selling your old phone on OruPhones is easy and secure. Follow these steps to get started: [Provide detailed steps here]",
  },
  {
    que: "Is it safe to buy used phones on OruPhones?",
    ans: "Yes, it is safe to buy used phones on OruPhones. We thoroughly inspect and verify all listings to ensure the quality and authenticity of the devices.",
  },
  {
    que: "What are the benefits of selling phones on ORUphones?",
    ans: "Selling phones on ORUphones comes with several benefits, including: [List key benefits and advantages]",
  },
  {
    que: "How can I check the condition of a used phone on the platform?",
    ans: "You can check the condition of a used phone by using our comprehensive device grading system, which provides detailed information about the phone’s condition and functionality.",
  },
];

const FrequentQuestions = () => {
  return (
    <div className="FAQs flex lg:flex-row flex-col justify-between container my-8 mt-6 px-4 sm:my-12 sm:px-10 md:my-16 md:mt-12 md:px-16 lg:my-24 lg:mt-16 ">
      <div className="mb-6  lg:w-5/12 font-poppins text-lg font-medium leading-6 text-black sm:text-xl md:text-2xl lg:mb-10 lg:text-[1.75rem] lg:tracking-tighter">
        Frequently Asked Questions(FAQs)
      </div>
      <div className=" w-full lg:w-6/12">
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-y-2 lg:gap-x-10"
        >
          {Faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border-2 border-gray-300 px-4"
            >
              <AccordionTrigger className="text-left">
                {item.que}
              </AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const isLg = useResponsive("lg");
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => step + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  if (router.pathname.includes("/user/")) {
    return null;
  }

  return (
    <footer className=" w-full overflow-clip">
      {/* rotating banner - show only home page */}
      {router?.asPath == "/" && (
        <div className=" w-full overflow-clip">
          <div
            className={`envBanner bg-yellow-500 relative -z-10 flex aspect-[4/3] w-full origin-bottom transform flex-col items-center justify-center overflow-clip bg-brand-blue transition-all duration-1000 md:aspect-[2/1] lg:h-[40rem]`}
          >
            <span className="absolute top-[10%] mx-10 text-center font-poppins text-xs text-black lg:top-[15%] lg:text-5xl">
              <span className="font-bold">Together</span> we can make a{" "}
              <span className="font-bold">difference</span>
            </span>
            <div
              className={`absolute mt-28 flex h-3/5 w-3/4 max-w-xl origin-[50%_250%] flex-col items-center justify-around rounded-xl bg-[#9EEB9C] shadow-xl transition-all duration-1000`}
              style={{
                transform: `rotate(${step * 90}deg)`,
              }}
            >
              <div className="mt-4 h-1/2">
                <Image
                  src="/assets/Footer/battery.png"
                  alt="Footer Vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-auto p-4"
                />
              </div>
              <span className=" mx-10 mb-10 flex flex-col flex-nowrap items-center justify-center text-center">
                <span className="font-poppins text-xs font-bold leading-tight tracking-tight lg:text-2xl">
                  Selling 10,000 used phones on ORUphones
                </span>
                <span className="text-[12px] md:text-[18px]">
                  {"It's like taking 250 cars off the road for a year"}
                </span>
              </span>
            </div>
            <div
              className={`absolute mt-28 flex h-3/5 w-3/4 max-w-xl origin-[50%_250%] flex-col items-center justify-around rounded-xl bg-[#DDDCFF] shadow-xl transition-all duration-1000`}
              style={{
                transform: `rotate(${(step + 1) * 90}deg)`,
              }}
            >
              <div className="mt-4 h-1/2">
                <Image
                  src="/assets/Footer/battery.png"
                  alt="Footer Vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-auto p-4"
                />
              </div>
              <span className=" mx-10 mb-10 flex flex-col flex-nowrap items-center justify-center text-center">
                <span className="font-poppins text-xs font-bold leading-tight tracking-tight lg:text-2xl">
                  Selling 10,000 used phones on ORUphones
                </span>
                <span className="text-[12px] md:text-[18px]">
                  {"It's like taking 250 cars off the road for a year"}
                </span>
              </span>
            </div>
            <div
              className={`absolute mt-28 flex h-3/5 w-3/4 max-w-xl origin-[50%_250%] flex-col items-center justify-around rounded-xl bg-[#A5DFEB] shadow-xl transition-all duration-1000`}
              style={{
                transform: `rotate(${(step + 2) * 90}deg)`,
              }}
            >
              <div className="mt-4 h-1/2">
                <Image
                  src="/assets/Footer/battery.png"
                  alt="Footer Vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-auto p-4"
                />
              </div>
              <span className=" mx-10 mb-10 flex flex-col flex-nowrap items-center justify-center text-center">
                <span className="font-poppins text-xs font-bold leading-tight tracking-tight lg:text-2xl">
                  Selling 10,000 used phones on ORUphones
                </span>
                <span className="text-[12px] md:text-[18px]">
                  {"It's like taking 250 cars off the road for a year"}
                </span>
              </span>
            </div>
            <div
              className={`absolute mt-28 flex h-3/5 w-3/4 max-w-xl origin-[50%_250%] flex-col items-center justify-around rounded-xl bg-[#FFDCFE] shadow-xl transition-all duration-1000`}
              style={{
                transform: `rotate(${(step + 3) * 90}deg)`,
              }}
            >
              <div className="mt-4 h-1/2">
                <Image
                  src="/assets/Footer/battery.png"
                  alt="Footer Vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-auto p-4"
                />
              </div>
              <span className=" mx-10 mb-10 flex flex-col flex-nowrap items-center justify-center text-center">
                <span className="font-poppins text-xs font-bold leading-tight tracking-tight lg:text-2xl">
                  Selling 10,000 used phones on ORUphones
                </span>
                <span className="text-[12px] md:text-[18px]">
                  {"It's like taking 250 cars off the road for a year"}
                </span>
              </span>
            </div>
            <div
              className={`circle absolute top-[60%] -z-10 aspect-square w-full transform rounded-full transition-all duration-1000 ease-in-out ${
                step % 4 === 0 && "bg-[#DCFFE4]"
              } ${step % 4 === 1 && "bg-[#DDDCFF]"} ${
                step % 4 === 2 && "bg-[#A5DFEB]"
              } ${step % 4 === 3 && "bg-[#FFDCFE]"}`}
            />
            <Image
              src="/assets/Footer/decor1.svg"
              alt="Footer Vector"
              width={100}
              height={100}
              sizes="100vw"
              className="absolute right-[15%] top-[15%] -z-10 h-[10%] w-[10%] select-none stroke-2"
            />
            <Image
              src="/assets/Footer/decor2.svg"
              alt="Footer Vector"
              width={100}
              height={100}
              sizes="100vw"
              className="absolute right-[10%] top-2/3 -z-10 h-[10%] w-[10%] select-none stroke-2"
            />
            <Image
              src="/assets/Footer/decor3.svg"
              alt="Footer Vector"
              width={100}
              height={100}
              sizes="100vw"
              className="absolute left-[15%] top-1/3 -z-10 h-[10%] w-[10%] select-none stroke-2"
            />
          </div>
        </div>
      )}
      {/*  */}
      {router.asPath !== "/faqs" &&
        router.asPath !== "/about-us" &&
        router.asPath !== "/report-problem" && <FrequentQuestions />}
      {isLg && (
        <div className="downloadApp relative flex h-80 w-full items-center justify-end bg-[#EDEFFC]">
          <span className="absolute left-[10%] flex h-full flex-col items-center justify-center ">
            <span className=" -ml-24 font-poppins text-[40px] font-semibold lg:text-3xl  ">
              Get the <br /> OruPhones App
            </span>
            <span className="flex h-1/2 w-full items-center justify-between">
              <Image
                src="/assets/Footer/playStore.svg"
                alt="Footer Vector"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-1/2 p-4 cursor-pointer"
              />
              <Image
                src="/assets/Footer/appStore.svg"
                alt="Footer Vector"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-1/2 p-4 cursor-pointer"
              />
            </span>
          </span>
          <span className="flex h-full w-fit justify-end">
            <Image
              src="/assets/Footer/vector.svg"
              alt="Footer Vector"
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-auto"
            />
            <Image
              src="/assets/Footer/orudesign.png"
              alt="Footer Oru Design"
              width="0"
              height="0"
              sizes="100vw"
              className="absolute right-60 mt-28 h-[340px] w-[200px]"
            />
            <Image
              src="/assets/Footer/orudesign.png"
              alt="Footer Oru Design"
              width="0"
              height="0"
              sizes="100vw"
              className="absolute right-40 mt-16 h-[340px] w-[200px]"
            />
          </span>
        </div>
      )}
      <GetOruPhones />
      <div className="container px-16 text-[14px] py-8 align-justify">
        Sell Samsung Phone | Sell Apple Phone | Sell OnePlus Phone | Sell Asus
        Phone | Sell Xiaomi Phone | Sell Oppo Phone | Sell LG Phone | Sell
        Realme Phone | Sell Poco Phone | Sell IQOO Phone | Sell Sony Phone |
        Sell Google Phone | Sell Honor Phone | Sell Infinix Phone | Sell Tecno
        Phone | Sell Vivo Phone | Sell Micromax Phone | Sell Nokia Phone | Sell
        Lenovo Phone | Sell Motorola Phone | Sell HTC Phone | Sell Blackberry
        Phone | Sell Panasonic Phone | Sell Gionee Phone | Sell Karbonn Phone |
        Sell Lava Phone | Sell Intex Phone | Sell Meizu Phone | Sell Huawei
        Phone | Sell ZTE Phone | Sell Alcatel Phone
      </div>
      <BottomBar />
    </footer>
  );
};

export default Footer;
