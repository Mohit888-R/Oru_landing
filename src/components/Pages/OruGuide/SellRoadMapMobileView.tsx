import BuySellRoadMapMobileViewCard from '@/components/Card/BuySellRoadMapMobileViewCard';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';
import { Fragment } from 'react';

const data = [
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell1.svg',
		text: `"Kickstart your device listing journey by hitting the 'Sell Your Phone' button."`
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell2.svg',
		text: "Share insights on your device's condition, accessories, and share a few photos",
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell3.svg',
		text: 'Receive instant evaluation and compare offers from various vendors." 💰🤝',
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell4.svg',
		text : 'Set your own price and put up your listing.'
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell5.svg',
		text: `Once your listing is submitted, go ahead and verify your device.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell6.svg',
		text: `Download the ORUphones app on the listed device, login and verify submitted device.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell7.svg',
		text: `Speed up your device sale by finishing the diagnostic test.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell8.svg',
		text: `Arrange a meeting with a potential buyer nearby in a safe, public location for negotiations.📍`,
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell9.svg',
		text: `Allow the buyer to inspect and verify the device's condition using the Oruphones app.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSellMobile/sell10.svg',
		text: `Finalize the deal and receive payment from the buyer. 💰`,
	},
];

const SellRoadMapMobileView = () => {
	return (
		<>
			<div className="ml-[10px] inline-block rounded-lg bg-blue-100 px-2 py-2 text-[16px] md:ml-[40px] ">
				Listing your device is <b>FREE</b>
			</div>
			<div className="-mt-8">
				{data.map((_, index, arr) => {
					if (index % 2 === 0) {
						return (
							<Fragment key={index}>
								<div className="buySellCardContainer c1 relative z-0 my-8 flex flex-nowrap items-center justify-around gap-8">
									<BuySellRoadMapMobileViewCard
										Imgurl={arr[index].imgurl}
										StepText={arr[index].text}
										step={index + 1}
									/>
									<BuySellRoadMapMobileViewCard
										Imgurl={arr[index + 1].imgurl}
										StepText={arr[index + 1].text}
										step={index + 2}
									/>
									<div className="absolute -z-20 flex h-full w-full flex-nowrap items-center justify-center px-20 md:px-32">
										<Image
											src={'/assets/RoadMap/LineMobile.svg'}
											width={300}
											height={70}
											className="-mt-32 w-11/12 scale-y-75"
											alt="line vector img"
										/>
									</div>
								</div>
							</Fragment>
						);
					}
					return null;
				})}
			</div>
		</>
	);
};

export default SellRoadMapMobileView;
