/* eslint-disable react/no-unescaped-entities */
import useResponsive from "@/hooks/useResponsive";
import { ChevronRight } from "lucide-react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";

const AboutCount = ({
  num,
  title,
}: {
  num: number | string;
  title: string;
}) => {
  return (
    <div className="flex flex-col">
      <span className="relative text-[32px] font-extrabold  md:text-[40px]">
        <span className="absolute top-2 h-2/3 w-[2px] bg-brand-gray"></span>
        <span className="px-2"> {num}</span>
      </span>
      <span className="text-[18px] font-semibold md:text-[20px]">{title}</span>
    </div>
  );
};

const AboutHelp = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
  return (
    <div className="">
      {useResponsive("md") ? (
        <Image
          src={imgUrl}
          width={40}
          height={40}
          alt=""
          className="m-auto my-4"
        />
      ) : (
        <Image
          src={imgUrl}
          width={58}
          height={58}
          alt=""
          className="m-auto my-4"
        />
      )}

      <div className="text-center text-[16px] font-semibold md:text-[20px]">
        {title}
      </div>
    </div>
  );
};

export type TProps = {
  review: TReview[] | null;
};

export const getStaticProps: GetStaticProps<TProps> = async (context) => {
  try {
    const review = await reviews();
    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? "en", [
          "common",
          "index",
        ])),

        review: review?.reviews.slice(0, 4),
      },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? "en", [
          "common",
          "index",
        ])),
        brands: null,
        Allbrand: null,
        videos: null,
        review: null,
        blogs: null,
      },
      revalidate: 600, // 1 minute
    };
  }
};

const AboutUs = ({
  review,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isLg = useResponsive("lg");
  return (
    <div>
      <NextSeo
        title="About Us | ORUphones"
        description="This is About Us | Oruphones "
      />
      <div className="navbarClearance w-full pt-24" />
      {/* search keyword  & welcome text*/}
      {isLg && (
        <span className="container my-4 flex text-[16px] text-brand-gray">
          <Link href={`/`} className="hover:underline">
            Home Page
          </Link>
          <span className="flex">
            <ChevronRight />
            <span>About Us</span>
          </span>
        </span>
      )}

      <div className="md:space-y-2">
        <div className="container">
          <p className="text-center text-[24px] font-semibold md:text-[32px]">
            About Us
          </p>
          <p className="text-center text-[18px] font-normal md:text-[24px]">
            ORUphones: A C2C online marketplace for Old, Refurbished & Used
            phones
          </p>
        </div>

        {useResponsive("lg") && <AboutUsBanner />}
        {!useResponsive("lg") && <AboutUsMobileBanner />}

        <div className="container space-y-6 pt-12 text-center text-[16px] font-normal leading-7 md:text-[18px]">
          <p>
            "We're not your average tech start-up; India's first-ever online C2C
            marketplace dedicated to buying and selling Old, Refurbished and
            used phones. Picture this: In 2020, while a mere 20 million used
            smartphones found new owners, a whopping 100 million others were
            sitting in the drawers, waiting for a second chance at life. That's
            where we come in, turning idle phones into treasure!"
          </p>
          <p>
            "By 2025, a staggering 245 million second-hand smartphones will be
            up for sale in India. Surprisingly, only 20% will find new owners,
            even though there's a huge demand! Our goal will be to Rescue those
            idle smartphones, Helping seller’s sell their amazing device and
            helping buyers buy their dream devices on a budget! "
          </p>

          <p className="my-8 text-[20px] font-medium leading-8">
            {" "}
            This is achievable with our strong technology stack and a dedicated
            team of professionals.
          </p>
        </div>
        <div className="font-outline-2  container py-10 text-center text-[32px] text-white md:text-[56px]">
          <span className="text-blue-900">O</span>LD.{" "}
          <span className="text-blue-900">R</span>EFURBISHED.{" "}
          <span className="text-blue-900">U</span>SED. SMARTPHONES.
        </div>

        <div className="bg-[#3F3E8F] py-8 text-[32px] text-white md:text-[40px]">
          <div className="container m-auto grid grid-cols-2 justify-between px-12 md:flex md:flex-wrap">
            <AboutCount num={6788} title="Devices listed" />
            <AboutCount num={788} title="Verified Devices" />
            <AboutCount num={"100%"} title="C2C" />
            <AboutCount num={5000} title="App Downloads" />
          </div>
        </div>

        <div className="container space-y-2 px-6 pt-12 text-center">
          <p className="text-[18px] font-semibold md:text-[24px]">Our Vision</p>
          <p className="texts-center text-[16px] font-normal leading-7  md:text-[18px]">
            "We've got a big dream: to become the go-to, trustworthy spot for
            anyone, anywhere to score a great deal when buying or selling a
            phone. And guess what? We've got the best tech and a squad of
            experts who totally get what people around the world are looking
            for. So, whether you're buying or selling, you're in good hands, and
            we're here to make sure you get the best bang for your buck!"
          </p>
        </div>

        {/* vision help layout */}
        <div className="container grid grid-cols-1 gap-4 px-6 py-8 md:grid-cols-3 md:gap-16 md:px-0 ">
          <VisionCard ImgUrl="/assets/save_money.svg" title="Best Prices">
            <ul className="list-disc space-y-2 text-[18px] ml-6">
              <li>
                We're completely upfront about prices. No hidden fees or
                surprises. What you see is what you pay.
              </li>
              <li>
                We offer pricing advice to help sellers earn more. We want
                selling to be as profitable as it can be.{" "}
              </li>
              <li>
                Our price comparison tool lets you see how we compare to
                competitors, ensuring you get the best deal.
              </li>
            </ul>
          </VisionCard>
          <VisionCard
            ImgUrl="/assets/Index/WhyOru/card2.svg"
            title="Safe & Secure"
          >
            <ul className="list-disc space-y-2 text-[18px] ml-6">
              <li>
                Our FAQs and user guides are there to help you use the platform
                and solve common problems on your own.
              </li>
              <li>
                Every user on our platform undergoes a strict verification
                process, reducing the risk of fraudulent activity.
              </li>
              <li>
                We take data privacy seriously. Our platform complies with the
                latest data protection regulations.
              </li>
            </ul>
          </VisionCard>
          <VisionCard
            ImgUrl="/assets/Index/WhyOru/card3.svg"
            title="Convinient"
          >
            <ul className="list-disc space-y-2 text-[18px] ml-6">
              <li>
                Our platform is user-friendly for all, making it easy to find
                what you need, whether you're new or experienced.
              </li>
              <li>
                Our product listings are detailed and comprehensive, providing
                you with all the information you need to make an informed
                decision.
              </li>
              <li>
                We provide expert buying guides to help you choose the right
                phone.
              </li>
            </ul>
          </VisionCard>
        </div>

        {/* customer reviews */}
        <div className="container pt-8 text-center text-[18px] font-bold md:text-[24px]">
          Customer Reviews
        </div>
        <div className="container space-y-4 px-6 py-16 md:flex md:gap-10 md:space-y-0">
          <div className="grid grid-cols-1 gap-y-[0.6rem] lg:grid-cols-4">
            {review &&
              review.map((item, index) => (
                <CustomerReviewsCard
                  key={index}
                  customerName={item?.author}
                  rating={item?.rating}
                  description={item?.review}
                  userStatus={item?.isVerified}
                  date={item?.date}
                />
              ))}
          </div>
        </div>

        {/* abot help banner */}
        <div className="bg-[#3F3E8F] px-4 py-8 text-white">
          <div className="container m-auto grid grid-cols-2 justify-between  gap-4 md:flex ">
            <AboutHelp
              imgUrl="/assets/group.svg"
              title="ORU Diagnostics Test"
            />
            <AboutHelp imgUrl="/assets/service.svg" title="Best Service" />
            <AboutHelp
              imgUrl="/assets/user-heart.svg"
              title="Customer Satisfaction"
            />
            <AboutHelp imgUrl="/assets/secure.svg" title="Secure Payments" />
          </div>
        </div>
        <div className="container py-8 text-center text-[18px] font-semibold md:text-[24px]">
          Meet Our Team
        </div>
        <div className="-mt-6 h-48 bg-[#8B88FF1C] "></div>
        <div className="">
          {/* team section */}
          <div className="container -mt-40  grid grid-cols-1 justify-center gap-10  px-6  py-10 md:px-0 xl:grid-cols-2 ">
            <div className="flex  justify-evenly gap-8">
              <TeamCard
                imgUrl="https://d1tl44nezj10jx.cloudfront.net/team/kido.webp"
                teammateName="Takashi Kido"
                position="Chairman"
                bio="Born in Fukui Japan, Takashi Kido is a high skilled leader with more than 15 years of CEO experiences at DoubleClick Japan and Asurion Japan . He has various complex business development experiences at i2 technologies, SAS and Asurion Japan which he also co-founded."
              />
              <TeamCard
                imgUrl="https://d1tl44nezj10jx.cloudfront.net/team/anish.webp"
                teammateName="Anish Agarwal"
                position="Co-Founder & CEO"
                bio="More than 15 years of experience with MNOs, mobile insurance players & 3PLs managing and improving their operations for reverse supply chain of devices."
              />
            </div>
            <div className="flex justify-evenly gap-8">
              <TeamCard
                imgUrl="https://d1tl44nezj10jx.cloudfront.net/team/manuj.webp"
                teammateName="Manuj Purwar"
                position="Co-Founder & COO"
                bio="13 years of experience across technology, strategy consulting and supply chain management. Responsible for setting up and scaling up operations for UP Medical Supplies Corporation."
              />
              <TeamCard
                imgUrl="https://d1tl44nezj10jx.cloudfront.net/team/nishant.webp"
                teammateName="Nishant Sharma"
                position="Project Lead"
                bio="More than 4 years of experience in IT industry with expertise in Project Management, Business Analysis, and Software Development Life Cycle."
              />
            </div>
          </div>

          {/* return and refund policy */}
          <div className="container py-8 text-center">
            <span className="text-[18px] font-semibold  md:text-[24px]">
              Return & Refund Policy
            </span>
            {!useResponsive("md") && (
              <p className="px-4 py-4 text-[14px] font-normal leading-7 md:px-0 md:text-[18px]">
                A tech start-up, India's first-ever online C2C marketplace
                dedicated to buying and selling Old, Refurbished & Used
                phones.In 2020, only 20 million units of used smartphones were
                traded while there were more than 100 million smartphones just
                left idle at home, sitting in drawers. The cumulative
                second-hand market will reach 245 million units by 2025 of which
                only about 20% units will be traded despite the strong demand
                for used smartphones in India.We aim to bring those unused
                second-hand smartphones to the market so that “Smartphone owners
                (sellers)” reap profits by selling their unused assets and
                buyers can afford their desired smartphones. This is achievable
                with our strong technology stack and a dedicated team of
                professionals.
              </p>
            )}

            {useResponsive("md") && (
              <div>
                <p className="px-4 py-4 text-[14px] font-normal leading-7 md:px-0 md:text-[18px]">
                  A tech start-up, India's first-ever online C2C marketplace
                  dedicated to buying and selling Old, Refurbished & Used
                  phones.In 2020, only 20 million units of used smartphones were
                  traded while there were more than 100 million smartphones just
                  left idle at home, sitting in drawers.
                </p>
                <p className="px-4 py-4 text-[14px] font-normal leading-7 md:px-0 md:text-[18px]">
                  The cumulative second-hand market will reach 245 million units
                  by 2025 of which only about 20% units will be traded despite
                  the strong demand for used smartphones in India.We aim to
                  bring those unused second-hand smartphones to the market so
                  that “Smartphone owners (sellers)” reap profits by selling
                  their unused assets and buyers can afford their desired
                  smartphones.
                </p>
                <p className="px-4 py-4 text-[14px] font-normal leading-7 md:px-0 md:text-[18px]">
                  This is achievable with our strong technology stack and a
                  dedicated team of professionals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
