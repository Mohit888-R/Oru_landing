import BuySellStepCard from '@/components/Card/BuySellStepCard';

const data = [
	{
		imgUrl: '/assets/how-to-buy/steps-1.svg',
		cardTitle: 'Select Device',
		icon: '/assets/oru-guide/phoneIcon.svg',
		bio1: 'Hunt down your dream used phone nearby!',
		bio2: 'Grab the hottest deals, and check all the device information.📱',
	},
	{
		imgUrl: '/assets/how-to-buy/steps-2.svg',
		cardTitle: 'Contact Seller',
		icon: '/assets/oru-guide/userIcon.svg',
		bio1: 'Tap "Contact Seller" to unlock their details.',
		bio2: 'Set up a meet at a safe, Convenient location. 🤝📍',
	},
	{
		imgUrl: '/assets/how-to-buy/steps-3.svg',
		cardTitle: 'Verify Your Purchase',
		icon: '/assets/oru-guide/checkIcon.svg',
		bio1: 'Verify device after meeting the seller using ORUphones app.',
		bio2: 'Pay the seller, grab your device– then Party! 💳📱✅',
	},
];

const BuySteps = () => {
	return (
		<div className="grid grid-cols-1 gap-8 px-10 lg:grid-cols-2 lg:px-0 xl:grid-cols-3">
			{data.map((item, index) => (
				<BuySellStepCard
					key={index}
					imgUrl={item.imgUrl}
					cardTitle={item.cardTitle}
					icon={item.icon}
					bio1={item.bio1}
					bio2={item.bio2}
				/>
			))}
		</div>
	);
};

export default BuySteps;
