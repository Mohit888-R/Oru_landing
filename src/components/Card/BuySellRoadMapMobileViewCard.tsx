import Image from 'next/image';
import { useRouter } from 'next/router';

const BuySellRoadMapMobileViewCard = ({
	Imgurl,
	StepText,
	step,
}: {
	Imgurl: string;
	StepText: string;
	step: number;
}) => {
	const router = useRouter();
	return (
		<div className="w-full">
			<div className="-mb-16 flex justify-center">
				<Image src={Imgurl} width={106} height={229} className="" alt={''} />
			</div>

			<div className="relative w-[180px] h-60 m-auto pt-12 -mb-4 pb-10 rounded-xl shadow-md px-4 text-center">
				<p className="absolute bottom-10 text-[14px] px-2 font-medium">
					{StepText}
				</p>
			</div>
			<div className="flex justify-center">
				<div className=" text-[16px] bg-brand-mblue text-white rounded-full inline-flex p-1 px-3 ">
					{step}
				</div>
			</div>
		</div>
	);
};

export default BuySellRoadMapMobileViewCard;
