import BuySellRoadMapCard from '@/components/Card/BuySellRoadMapCard';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';

const data = [
	{
		imgurl: '/assets/RoadMap/OruBuy/buy1.svg',
		text: 'Select your location by clicking on the top left of the screen." 🌍👆',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy2.svg',
		text: 'Discover devices nearby with the search bar or explore trending searches! 🔍',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy3.svg',
		text: 'Pick your preferred model and explore device specifics.📱',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy4.svg',
		text: "If the phone isn't verified, we suggest asking the seller for verification before reaching out.",
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy5.svg',
		text: '"Ask the seller for extra photos besides verification." 📷',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy6.svg',
		text: 'Call the seller to bargain for the ultimate deal! 📞',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy7.svg',
		text: 'Plan a meet-up with the seller to grab your device. 📅',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy8.svg',
		text: 'Choose a safe and public location for your seller meetup.🤝',
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy9.svg',
		text: "Thoroughly check the device with our mobile app's buyer verification. 📱",
	},
	{
		imgurl: '/assets/RoadMap/OruBuy/buy10.svg',
		text: 'After confirming the device, go ahead with the payment. 💳',
	},
];
const BuyRoadMap = () => {
	return (
		<>
			<div className="buySellCardContainer c1 relative z-0 my-8 flex flex-nowrap items-center justify-around gap-8">
				{data.slice(0, 4).map((item, index) => (
					<BuySellRoadMapCard
						Imgurl={item.imgurl}
						StepText={item.text}
						step={index + 1}
						key={index}
					/>
				))}
				<div className="absolute -z-20 flex h-full w-full flex-nowrap items-center justify-center xl:px-20">
					<Image
						src={'/assets/RoadMap/Line.svg'}
						width={300}
						height={70}
						className="-mt-8 w-11/12 scale-y-75"
						alt="line vector img"
					/>
				</div>
			</div>
			<div className="buySellCardContainer c2 relative z-0 my-8 flex flex-nowrap items-center justify-around">
				{data.slice(4, 7).map((item, index) => (
					<BuySellRoadMapCard
						Imgurl={item.imgurl}
						StepText={item.text}
						step={index + 5}
						key={index}
					/>
				))}
				<div className="absolute -z-20 flex h-full w-full flex-nowrap items-center justify-center px-36">
					<Image
						src={'/assets/RoadMap/Line.svg'}
						width={300}
						height={70}
						className="-mt-8 w-11/12 scale-y-75"
						alt="line vector img"
					/>
				</div>
			</div>
			<div className="buySellCardContainer c2 relative z-0 my-8 flex flex-nowrap items-center justify-around gap-8">
				{data.slice(7, 10).map((item, index) => (
					<BuySellRoadMapCard
						Imgurl={item.imgurl}
						StepText={item.text}
						step={index + 8}
						key={index}
					/>
				))}
				<div className="absolute -z-20 flex h-full w-full flex-nowrap items-center justify-center px-36">
					<Image
						src={'/assets/RoadMap/Line.svg'}
						width={300}
						height={70}
						className="-mt-8 w-11/12 -scale-x-100 scale-y-75"
						alt="line vector img"
					/>
				</div>
			</div>
		</>
	);
};

export default BuyRoadMap;
