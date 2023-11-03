import Image from 'next/image';

const VideoMobileBanner = ({ videoId }: { videoId: string }) => {
	return (
		<div className="container relative w-full flex justify-center items-end ">
			<Image
				src={'/assets/RoadMap/leftwave.svg'}
				width="0"
				height="0"
				className="w-0 lg:w-4/6 absolute bottom-0 top-72 md:top-80 mt-[50px] -left-28 -rotate-[18deg]   -mr-1  "
				alt="left-wave-img"
			/>
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="absolute top-32  lg:top-48 w-10/12 lg:w-8/12 h-80  shadow-lg"
			></iframe>
			<Image
				src={'/assets/RoadMap/rightwave.svg'}
				width={428}
				height="0"
				className="w-0 lg:w-4/6 absolute bottom-0 top-72 md:top-80 mt-[36px] -right-28 rotate-[18deg]  -mr-1 	 "
				alt="right-wave-img"
			/>
		</div>
	);
};

export default VideoMobileBanner;
