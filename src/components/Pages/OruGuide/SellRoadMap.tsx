import BuySellRoadMapCard from '@/components/Card/BuySellRoadMapCard';
import Image from 'next/image';

const data = [
	{
		imgurl: '/assets/RoadMap/OruSell/sell1.svg',
		text: `"Kickstart your device listing journey by hitting the 'Sell Your Phone' button." 📱`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell2.svg',
		text: `Share insights on your device's condition, accessories, and share a few photos`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell3.svg',
		text: `Receive instant evaluation and compare offers from various vendors." 💰🤝`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell4.svg',
		text: `Set your own price and put up your listing.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell5.svg',
		text: `Once your listing is submitted, go ahead and verify your device.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell6.svg',
		text: `Download the ORUphones app on the listed device, login and verify submitted device.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell7.svg',
		text: `Speed up your device sale by finishing the diagnostic test.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell8.svg',
		text: `Arrange a meeting with a potential buyer nearby in a safe, public location for negotiations.📍`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell9.svg',
		text: `Allow the buyer to inspect and verify the device's condition using the Oruphones app.`,
	},
	{
		imgurl: '/assets/RoadMap/OruSell/sell10.svg',
		text: `Finalize the deal and receive payment from the buyer. 💰`,
	},
];
const SellRoadMap = () => {
	return (
		<>
			<div className="-ml-16 inline-block rounded-lg bg-blue-100 px-2 py-2 text-[16px] xl:ml-8  ">
				Listing your device is <b>FREE</b>
			</div>
			<div className="buySellCardContainer c1 relative z-0 my-8 -mt-[12px] flex flex-nowrap items-center justify-around gap-8">
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
				<div className="flex-nowrapitems-center absolute -z-20 flex h-full w-full justify-center px-36">
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

export default SellRoadMap;
