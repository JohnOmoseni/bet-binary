import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import Card from "@components/Card";
import { features } from "@constants/constant";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import RevealAnimate from "@components/RevealAnimate";

function SwiperDiv() {
	return (
		<RevealAnimate delay={1.2} className=" py-12 pb-[4em] sm:py-[6em] gap-4">
			<Swiper
				modules={[Navigation, Scrollbar, A11y]}
				navigation
				scrollbar={{ draggable: true }}
				speed={800}
				slidesPerView={1}
				spaceBetween={20}
				breakpoints={{
					760: {
						slidesPerView: 4,
					},
					640: {
						slidesPerView: 3,
					},
					500: {
						slidesPerView: 2,
					},
				}}
				className=" w-[90%] mx-auto px-2"
				onSlideChange={() => console.log("slide change")}
			>
				{features.map((item, idx) => (
					<SwiperSlide key={idx}>
						<Card
							item={item}
							idx={idx}
							className="rounded-md py-4"
							amount={0}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</RevealAnimate>
	);
}

export default SwiperDiv;
