import BuySellRoadMapCard from '@/components/Card/BuySellRoadMapCard';
import BuySellRoadMapMobileViewCard from '@/components/Card/BuySellRoadMapMobileViewCard';
import Image from 'next/image';
import { Fragment } from 'react';

const data = [
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy1.svg',
		text: 'Select your location by clicking on the top left of the screen." 🌍👆',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy2.svg',
		text: 'Discover devices nearby with the search bar or explore trending searches! 🔍',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy3.svg',
		text: 'Pick your preferred model and explore device specifics.📱',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy4.svg',
		text: "If the phone isn't verified, we suggest asking the seller for verification before reaching out.",
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy5.svg',
		text: '"Ask the seller for extra photos besides verification." 📷',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy6.svg',
		text: 'Call the seller to bargain for the ultimate deal! 📞',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy7.svg',
		text: 'Plan a meet-up with the seller to grab your device. 📅',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy8.svg',
		text: 'Choose a safe and public location for your seller meetup.🤝',
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy9.svg',
		text: "Thoroughly check the device with our mobile app's buyer verification. 📱",
	},
	{
		imgurl: '/assets/RoadMap/OruBuyMobile/buy10.svg',
		text: 'After confirming the device, go ahead with the payment. 💳',
	},
];

const BuyRoadMapMobileView = () => {
	return (
		<>
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
		</>
	);
};

export default BuyRoadMapMobileView;
