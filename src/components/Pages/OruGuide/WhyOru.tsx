import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const cards = [
  {
    img: "/assets/Index/WhyOru/card01.svg",
    content: {
      title: "Save Money",
      desc: '"Cut out the middleman, shop like a boss!"',
      btnText: "BUY NOW",
    },
    link: "/bestDeals",
    tag: "buy",
  },
  {
    img: "/assets/Index/WhyOru/card05.svg",
    content: {
      title: "Peace Of Mind",
      desc: '"50+ tests for top-notch device quality assurance!" ',
      btnText: "VERIFIED USED PHONES",
    },
    link: "/bestDeals?verified=true",
    tag: "buy",
  },
  {
    img: "/assets/Index/WhyOru/card06.svg",
    content: {
      title: "Free Services",
      desc: "Data Wipe, Data Transfer, Battery Check and more",
      btnText: "CHECK SERVICES",
    },
    link: "/user/services",
    tag: "buy",
  },
  {
    img: "/assets/Index/WhyOru/card04.svg",
    content: {
      title: "Compare & Buy",
      desc: "Compare offers for used phones from various sellers",
      btnText: "COMPARE DEALS",
    },
    link: "/user/services/price-comparison",
    tag: "buy",
  },

  //  for sell
  {
    img: "/assets/Index/WhyOru/card01.svg",
    content: {
      title: "Get Maximum Cash",
      desc: '"Cut out the middleman, shop like a boss!"',
      btnText: "SELL YOUR PHONE",
    },
    link: "/sellNow",
    tag: "sell",
  },
  {
    img: "/assets/Index/WhyOru/card02.svg",
    content: {
      title: "Correct Resale Value",
      desc: "AI Recommnedations for best resale value",
      btnText: "KNOW YOUR MOBILE PRICE",
    },
    link: "/user/services/price-comparison",
    tag: "sell",
  },
  {
    img: "/assets/Index/WhyOru/card03.svg",
    content: {
      title: "Free Listings",
      desc: "No upfront fees, no commissions, and no hidden charges.",
      btnText: "ADD A LISTING",
    },
    link: "/sellNow",
    tag: "sell",
  },
  {
    img: "/assets/Index/WhyOru/card06.svg",
    content: {
      title: "Free Services",
      desc: "Data Wipe, Data Transfer, battery Check and more.",
      btnText: "COMPARE DEALS",
    },
    link: "/user/services",
    tag: "sell",
  },
  {
    img: "/assets/Index/WhyOru/card04.svg",
    content: {
      title: "Compare & Sell",
      desc: "Compare offers for used phones from various sellers",
      btnText: "COMPARE PRICES",
    },
    link: "/user/services/price-comparison",
    tag: "sell",
  },
];

const WhyOruCard = ({
  img,
  content,
  link,
}: {
  img: string;
  content: {
    title: string;
    desc: string;
    btnText: string;
  };
  link: string;
}) => {
  return (
    <Card className="self-stretch border-0 shadow-none">
      <CardContent className="flex h-full flex-col p-0">
        <CardHeader className="flex w-full flex-grow flex-col text-center sm:p-2 md:p-0">
          <div className="relative mx-auto h-20 w-20">
            <Image
              src={img}
              alt={content.title}
              width={100}
              height={100}
              // style={{ width: 'auto' }}
              className="aspect-square h-full w-full"
            />
          </div>
          <CardTitle
            style={{ margin: "0" }}
            className="m-0  text-center font-poppins  text-base font-medium tracking-[-0.0625rem] text-black sm:text-lg md:text-xl md:font-semibold lg:text-2xl"
          >
            {content.title}
          </CardTitle>
          <CardDescription
            style={{ margin: "0" }}
            className="text-center py-2 font-poppins  text-xs font-normal leading-[1.185rem] tracking-[-0.0375rem] text-black sm:text-sm md:text-base lg:text-lg"
          >
            {content.desc}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-1 p-0">
          <Link
            className={cn(
              buttonVariants({ variant: "secondary" }),
              `w-full bg-[#3f3e8f] hover:bg-[#3f3e8f] text-white`
            )}
            href={link}
          >
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
              {content.btnText}
            </span>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

const WhyOru = () => {
  const router = useRouter();

  return (
    <section className="container my-10 w-full">
      <div className="grid grid-cols-2  gap-4 md:grid-cols-3  md:px-0 xl:grid-cols-4">
        {cards.map((card, index) => (
          <>
            {router?.pathname == "/oru-guide/how-to-buy" &&
              card.tag == "buy" && (
                <WhyOruCard
                  key={index}
                  img={card.img}
                  content={card.content}
                  link={card.link}
                />
              )}
            {router?.pathname == "/oru-guide/how-to-sell" &&
              card.tag == "sell" && (
                <WhyOruCard
                  key={index}
                  img={card.img}
                  content={card.content}
                  link={card.link}
                />
              )}
          </>
        ))}
      </div>
    </section>
  );
};

export default WhyOru;
