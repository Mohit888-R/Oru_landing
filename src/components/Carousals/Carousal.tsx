import { cn } from '@/lib/utils';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import {
	A11y,
	Autoplay,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
	Scrollbar,
	Virtual,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

const Carousal: React.FC<{
	Slides: { SlideJSX: React.ComponentType<any>; props?: Record<string, any> }[];
	enableNavButton?: boolean;
	options?: Partial<SwiperOptions>;
	className?: string;
	swiperSliderClassName?: string;
}> = ({
	Slides,
	enableNavButton,
	options,
	className,
	swiperSliderClassName,
}) => {
	return (
		<Swiper
			modules={[
				A11y,
				Autoplay,
				Keyboard,
				Mousewheel,
				Navigation,
				Pagination,
				Scrollbar,
				Virtual,
			]}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
			}}
			navigation={{
				nextEl: '.swiper-nxt',
				prevEl: '.swiper-pre',
			}}
			a11y={{
				enabled: true,
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
			}}
			centeredSlides={true}
			mousewheel={{
				releaseOnEdges: true,
				forceToAxis: true,
			}}
			speed={600}
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			{...options}
			className={cn('relative h-full w-full', className)}
		>
			{Slides?.map(({ SlideJSX, props }, index) => (
				<SwiperSlide
					key={`${Date.now() + Math.random()}${index}`}
					virtualIndex={index}
					className={cn(swiperSliderClassName)}
				>
					<SlideJSX {...props} />
				</SwiperSlide>
			))}

			{enableNavButton && (
				<>
					<div className="group absolute left-0 top-1/2 z-[5] mx-2 flex h-full min-h-max w-max -translate-y-1/2 items-center p-2 !opacity-100">
						<div className="swiper-pre drop-shadow-lg-custom rounded-full group-hover:backdrop-blur">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="4em"
								viewBox="0 0 512 512"
								className="h-8 w-8 fill-white/60 transition-all group-hover:fill-white/60 lg:h-14 lg:w-14 lg:fill-transparent"
							>
								<path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
							</svg>
						</div>
					</div>
					<div className="group absolute right-0 top-1/2 z-[5] mx-2 flex h-full min-h-max w-max -translate-y-1/2 items-center p-2 !opacity-100">
						<div className="swiper-nxt drop-shadow-lg-custom rounded-full group-hover:backdrop-blur">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="4em"
								viewBox="0 0 512 512"
								className="h-8 w-8 fill-white/60 transition-all group-hover:fill-white/60 lg:h-14 lg:w-14 lg:fill-transparent"
							>
								<path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
							</svg>
						</div>
					</div>
				</>
			)}
		</Swiper>
	);
};

export default Carousal;
