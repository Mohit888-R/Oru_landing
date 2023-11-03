import Image from 'next/image';

const BuySellRoadMapCard = ({
	Imgurl,
	StepText,
	step,
}: {
	Imgurl: string;
	StepText: string;
	step: number;
}) => {
	return (
		<div
			className={`buySellCard w-72 max-w-80 h-96 z-20 `}
		>
			<div className="w-full h-1/2 object-contain">
				<Image
					src={Imgurl}
					width={2000}
					height={400}
					className="w-full h-full object-contain"
					alt={''}
				/>
			</div>
			<div className="mx-auto relative w-48 h-40 text-center shadow-lg rounded-xl max-h-2/3 flex items-center justify-center bg-white">
				<p className="font-medium">{StepText}</p>
			</div>
			<div className="flex justify-center">
				<div className="bg-brand-mblue text-white rounded-full inline-flex p-1 px-3 ">
					{step}
				</div>
			</div>
		</div>
	);
};

export default BuySellRoadMapCard;
