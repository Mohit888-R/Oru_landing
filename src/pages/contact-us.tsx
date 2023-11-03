import ContactUsMobileViewCard from "@/components/Card/ContactUsMobileViewCard";
import ContactusCard from "@/components/Card/ContactusCard";
import ContactForm from "@/components/Form/ContactForm";
import useResponsive from "@/hooks/useResponsive";
import getHomeBrands from "@/lib/fetchers/getHomeBrand";
import { ChevronRight, Search, SearchIcon } from "lucide-react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const isLg = useResponsive("lg");

  return (
    <div>
      <NextSeo
        title="Privacy & Policy | ORUphones"
        description="Privacy and Policy"
      />
      <div className="navbarClearance w-full pt-24" />
      <h1 className="py-4 text-center text-[28px] font-bold">Contact Us </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <span className="col-span-1 flex justify-center px-4">
          {!useResponsive("lg") && <ContactusCard />}
          {useResponsive("lg") && <ContactUsMobileViewCard />}
        </span>
        <span className="lg:col-span-2">
          <ContactForm />
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
