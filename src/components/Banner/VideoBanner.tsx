import Image from 'next/image';

const VideoBanner = ({ videoId }: { videoId: string }) => {
	return (
		<div className=" mt-20 flex w-full items-end justify-center">
			<div className="relative -mt-2 w-4/12 ">
				<Image
					src={'/assets/RoadMap/leftwave.svg'}
					width="0"
					height="0"
					className=" -mb-5 -mr-1 rotate-3 w-full "
					alt="left-wave-img"
				/>
				<Image
					src={'/assets/RoadMap/leftwave2.svg'}
					width="0"
					height="0"
					className="absolute  -right-2 rotate-3 top-0   w-full "
					alt="left-wave-img"
				/>
			</div>

			<iframe
				src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="z-10  -ml-2 -mr-2 h-[420px] w-8/12 shadow-lg"
			></iframe>
			<div className="relative -mb-3 w-4/12">
				<Image
					src={'/assets/RoadMap/rightwave2.svg'}
					width="0"
					height="0"
					className="absolute -top-2 rotate-1 right-5   w-full "
					alt="left-wave-img"
				/>
				<Image
					src={'/assets/RoadMap/rightwave.svg'}
					width="0"
					height="0"
					className=" -mb-5 -mr-1  w-full "
					alt="left-wave-img"
				/>
			</div>
		</div>
	);
};

export default VideoBanner;
