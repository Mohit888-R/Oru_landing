import { Button } from '../ui/button';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';

const BuySellStepCard = ({
	imgUrl,
	cardTitle,
	icon,
	bio1,
	bio2,
	bio3,
}: {
	imgUrl: string;
	cardTitle: string;
	icon: string;
	bio1: string;
	bio2: string;
	bio3?: string;
}) => {
	return (
		<div className="inline-flex flex-col  rounded-lg border p-4 py-12 shadow-lg lg:w-[350px]">
			<span className="flex justify-center">
				{useResponsive('lg') && (
					<Image src={imgUrl} width={300} height={300} alt={`${cardTitle}`} />
				)}
				{!useResponsive('lg') && (
					<Image src={imgUrl} width={200} height={200} alt={`${cardTitle}`} />
				)}
			</span>
			<span className="flex justify-center ">
				<Button className="my-5 h-1/2 w-10/12  items-center gap-2 rounded-full text-[12px] font-semibold md:text-[18px] lg:font-bold ">
					<Image src={icon} alt={`${cardTitle}`} width={25} height={25} />{' '}
					<span className="text-left"> {cardTitle}</span>
				</Button>
			</span>
			<ul className="h-1/2 list-disc px-4 text-left text-[12px] md:text-[14px]">
				<li>{bio1}</li>
				<li>{bio2}</li>
				{bio3 && <li>{bio3}</li>}
			</ul>
		</div>
	);
};

export default BuySellStepCard;
