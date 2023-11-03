import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { DownloadBannerfirst } from "@/components/Banner/DownloadBanner";
import { TimeStamp } from "@/components/TimeStamp";
import Review from "@/components/Review";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TReview } from "./types";
import reviews from "@/lib/fetchers/reviews";
import Footer from "@/components/Footer";
import BuySellBanner from "@/components/Banner/BuySellBanner";
import { FollowUs } from "@/components/FollowUs";

export type TProps = {
  review: TReview[] | null;
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  try {
    const review = await reviews();

    return {
      props: {
        review: review?.reviews.slice(0, 4),
      },
      // revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        review: null,
      },
      // revalidate: 600, // 1 minute
    };
  }
};

export default function Home({
  review,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(Date.now());
  return (
    <div>
      {/* navbar */}
      {/* <Navbar /> */}
      <div className="pt-20">
        <DownloadBannerfirst />
        <TimeStamp />
        <BuySellBanner/>
        <FollowUs />
        <Review data={review} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
