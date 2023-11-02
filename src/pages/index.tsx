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

const inter = Inter({ subsets: ["latin"] });

export type TProps = {
  reivew: TReview[] | null;
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
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div className="pt-20">
        <DownloadBannerfirst />
        <TimeStamp />
        <Review data={review} />
      </div>
      <Footer />
    </div>
  );
}
