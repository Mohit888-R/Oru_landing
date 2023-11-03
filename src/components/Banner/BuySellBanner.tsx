import Carousal from '../Carousals/Carousal';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';

export const buyBannerData = [
	{
		imgUrl: '/assets/BuySellBanner/Buy1.png',
		cardTitle: 'Browse & Compare Deals Nearby',
		bio: 'Explore local smartphone listings and use our smart price comparison feature to get the best.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Buy2.png',
		cardTitle: 'Negotiate & Verify',
		bio: 'Engage directly with sellers to negotiate. Use our price comparison tool for smart negotiation. Always ask for device verification and additional images for extra assurance.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Buy3.png',
		cardTitle: 'Schedule a Meetup',
		bio: 'Schedule your meeting with the seller at a secure location, like a popular restaurant or public spot.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Buy4.png',
		cardTitle: 'Meet, Inspect Device & Close the Deal',
		bio: "At the meet, use our app for a detailed device check. If all's well, finalize your payment and embrace your new smartphone.",
	},
];

export const sellBannerData = [
	{
		imgUrl: '/assets/BuySellBanner/Sell1.png',
		cardTitle: 'Browse & Compare Deals Nearby',
		bio: 'Explore local smartphone listings and use our smart price comparison feature to get the best.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Sell2.png',
		cardTitle: 'Negotiate & Verify',
		bio: 'Engage directly with sellers to negotiate. Use our price comparison tool for smart negotiation. Always ask for device verification and additional images for extra assurance.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Sell3.png',
		cardTitle: 'Schedule a Meetup',
		bio: 'Schedule your meeting with the seller at a secure location, like a popular restaurant or public spot.',
	},
	{
		imgUrl: '/assets/BuySellBanner/Sell4.png',
		cardTitle: 'Meet, Inspect Device & Close the Deal',
		bio: "At the meet, use our app for a detailed device check. If all's well, finalize your payment and embrace your new smartphone.",
	},
];

export const Banner: React.FC<{
	isBuyer?: boolean;
}> = ({ isBuyer = false }) => {
	return (
		<div className="text-center p-2 lg:p-5">
			{isBuyer 
				?<h2 className='font-poppins text-xs sm:text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-black'>
					Buy <span className='text-[#F9C414]'>Verified</span> Smartphones Near You
				</h2>
				:<h2 className='font-poppins text-xs sm:text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-black'>
					Sell Your Phone <span className='text-[#F9C414]'>Nearby Quickly</span> and <span className='text-[#F9C414]'>Safely</span>
				</h2>
			}
			<div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
				{(isBuyer ? buyBannerData : sellBannerData).map((item, index) => (
					<Card
						key={`${Date.now() + Math.random()}${index}`}
						className="flex flex-col shadow-none border-none mt-4 sm:mt-8 md:mt-12 lg:mt-[3.75rem]"
					>
						<CardContent className="p-2 lg:p-4">
							<div className="flex justify-center">
								<Image
									src={item.imgUrl}
									width={300}
									height={300}
									alt={item.cardTitle}
								/>
							</div>
							<div className='mt-1 md:mt-3 lg:mt-4'>
								<p className="text-[0.5rem] sm:text-sm md:text-lg lg:text-2xl text-center font-poppins font-bold text-black">
									{item.cardTitle}
								</p>
							</div>
							<CardDescription className="text-[#757474] mt-1 md:mt-3 lg:mt-4 font-poppins text-[0.3rem] sm:text-[0.5rem] md:text-sm lg:text-base font-medium text-center">
								{item.bio}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

const BuySellBanner = () => {
	const slides = [
		{ SlideJSX: Banner, props: { isBuyer: true } },
		{ SlideJSX: Banner, props: { isBuyer: false } },
	];

	return (
		<div className="2xl:container mt-4 sm:mt-6 md:mt-8 lg:mt-10">
			<Carousal
				Slides={slides}
				enableNavButton={true}
				options={{
					spaceBetween: 0,
					slidesPerView: 1,
					pagination: {
						clickable: true,
						dynamicBullets: true,
						horizontalClass: 'swiper-pagination-horizontal-custom',
						bulletClass: 'swiper-pagination-bullet-custom',
						bulletActiveClass: 'swiper-pagination-bullet-active-custom',
						clickableClass: '!-bottom-6',
					},
				}}
				className="!overflow-y-visible"
			/>
		</div>
	);
};

export default BuySellBanner;
