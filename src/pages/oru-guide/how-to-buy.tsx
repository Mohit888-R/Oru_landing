import VideoBanner from '@/components/Banner/VideoBanner';
import VideoMobileBanner from '@/components/Banner/VideoMobileBanner';
import BuyRoadMap from '@/components/Pages/OruGuide/BuyRoadMap';
import BuyRoadMapMobileView from '@/components/Pages/OruGuide/BuyRoadMapMobileView';
import BuySteps from '@/components/Pages/OruGuide/BuySteps';
import WhyOru from '@/components/Pages/OruGuide/WhyOru';
import useResponsive from '@/hooks/useResponsive';
import { ChevronRight } from 'lucide-react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const HowToBuy = () => {
	const isLg = useResponsive('lg');
	return (
		<div>
			<NextSeo title="How to Buy | ORUphones" description="ORU GUIDE" />
			<div className="navbarClearance w-full pt-24" />

			<div className="h-[600px] bg-brand-blue py-2 text-white">
				{isLg && (
					<span className="container my-4 flex text-brand-gray">
						<Link href={`/`} className="underline">
							Home Page
						</Link>
						<span className="flex">
							<ChevronRight />
							<span className="">How to buy</span>
						</span>
					</span>
				)}

				<div className="container">
					<h1 className="mt-20 text-center text-[20px] font-semibold lg:mt-0 lg:text-[40px] lg:font-bold">
						Discover the Art of Scoring Killer Deals on Pre-Used Smartphones
						with ORUguide! 📱💰
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

			<div className="container my-32 mt-56">
				<BuySteps />
			</div>
			<div className="container text-center">
				<span className="text-[20px] font-medium lg:text-[32px]">
					Why Choose <b>ORU</b>
				</span>
				<div>
					<WhyOru />
				</div>
			</div>

			<div className="container pb-20">
				<p className="py-16  text-center text-[32px]">
					ORU Buying <b> Roadmap </b>
				</p>
				{!useResponsive('lg') && <BuyRoadMapMobileView />}
				{useResponsive('lg') && <BuyRoadMap />}
			</div>
		</div>
	);
};

export default HowToBuy;
