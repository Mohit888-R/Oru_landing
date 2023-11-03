import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/useResponsive";
import { ChevronRight, Mic, Search, VolumeIcon } from "lucide-react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { Input } from "@/components/ui/input";
import Faq from "@/lib/fetchers/faq";
import { TFaq } from "../types";

type TProps = {
  faqs: TFaq[] | null;
};

export const getStaticProps: GetStaticProps<TProps> = async (context) => {
  try {
    const faqs = await Faq();

    return {
      props: {
        faqs: faqs?.FAQs,
      },
      revalidate: 86400,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        faqs: null,
      },
      revalidate: 600,
    };
  }
};

const Faqs = ({ faqs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isLg = useResponsive("lg");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const faqData = faqs?.filter((item) =>
    item.question?.toLocaleLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <NextSeo title="Faq | ORUphones" description="ORUphones Faq Page" />
      <div className="navbarClearance w-full pt-24" />
      {isLg && (
        <span className="container my-4 flex text-brand-gray">
          <Link href={`/`} className="underline">
            Home Page
          </Link>
          <span className="flex">
            <ChevronRight />
            <span>Faq</span>
          </span>
        </span>
      )}
      <div className="container mt-8">
        <h1 className="py-4 text-center text-[28px] font-bold">
          Frequently Asked Questions(FAQs)
        </h1>
        <div className="m-auto flex w-full gap-2 pb-16  lg:w-6/12">
          <span className="relative flex w-full items-center">
            <Input
              type="text"
              placeholder="Search for topics or Keywords"
              className="rounded-full pr-20"
              value={searchQuery}
              onChange={handleSearch}
            />
            <span className="absolute right-2 top-1 flex lg:right-4 ">
              <Search
                size={36}
                className="rounded-full  p-2 hover:rounded-full hover:bg-slate-100 hover:shadow-2xl active:scale-105"
              />
              <Mic
                size={36}
                className="rounded-full  p-2 hover:rounded-full hover:bg-slate-100 hover:shadow-2xl active:scale-105"
              />
            </span>
          </span>
          <Button variant={"outline"} className="rounded-full">
            Search
          </Button>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mb-8 grid grid-rows-1 gap-2"
        >
          {faqData &&
            faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border-2 border-gray-300 px-4"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
