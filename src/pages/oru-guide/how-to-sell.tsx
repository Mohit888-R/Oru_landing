/* eslint-disable react/no-unescaped-entities */
import VideoBanner from '@/components/Banner/VideoBanner';
import VideoMobileBanner from '@/components/Banner/VideoMobileBanner';
import SellRoadMap from '@/components/Pages/OruGuide/SellRoadMap';
import SellRoadMapMobileView from '@/components/Pages/OruGuide/SellRoadMapMobileView';
import SellSteps from '@/components/Pages/OruGuide/SellSteps';
import WhyOru from '@/components/Pages/OruGuide/WhyOru';
import useResponsive from '@/hooks/useResponsive';
import { ChevronRight, Video } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

const HowToSell = () => {
	const isLg = useResponsive('lg');
	return (
		<div>
			<NextSeo
				title="How To Sell | ORUphones"
				description="Privacy and Policy"
			/>
			<div className="navbarClearance w-full pt-20" />
			<div className="h-[600px] bg-brand-blue py-2 text-white">
				{isLg && (
					<span className="container my-4 flex text-brand-gray">
						<Link href={`/`} className="underline">
							Home Page
						</Link>
						<span className="flex">
							<ChevronRight />
							<span className="">How to sell</span>
						</span>
					</span>
				)}

				<div className="container">
					<h1 className="mt-20 text-center text-[20px] font-semibold lg:mt-0 lg:text-[40px] lg:font-bold">
						"Learn the secrets of selling your used smartphone like a pro with
						ORUguide! Get ready to cash in!" 📱💰💡
					</h1>
				</div>
				{/* attach video banner */}
				<div>
					{!useResponsive('lg') && (
						<VideoMobileBanner videoId={'nSX0UqZmXOw'} />
					)}
					{useResponsive('lg') && <VideoBanner videoId={'nSX0UqZmXOw'} />}
				</div>
			</div>
			<div className="container my-40 mt-56">
				<SellSteps />
			</div>
			<div className="container text-center">
				<span className="text-[32px] font-medium">
					Why Choose <b>ORU</b>
				</span>
				<div>
					<WhyOru />
				</div>
			</div>
			<div className="container pb-20">
				<p className="py-16 text-center text-[32px]">
					ORU Selling <b> Roadmap </b>
				</p>
				{!useResponsive('lg') && <SellRoadMapMobileView />}
				{useResponsive('lg') && <SellRoadMap />}
			</div>
		</div>
	);
};

export default HowToSell;
