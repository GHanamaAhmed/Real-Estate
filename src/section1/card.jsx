import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Card() {
    return (
        <div className='w-80 relative overflow-hidden rounded-lg border border-x-8 border-y-8 outline outline-zinc-700 border-zinc-700'>
            <img className='w-full h-full' src="./icons/Rectangle716.svg" alt="" />
            <Swiper className='absolute w-full bottom-1/4 translate-y-full left-10' modules={[Pagination, A11y]}
                spaceBetween={-60}
                slidesPerView={1}
                grabCursor={true}
            >
                <SwiperSlide>
                    <img className='p-0 m-0' src="./icons/Rectangle717.svg" alt="" width={218} height={78} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='p-0 m-0' src="./icons/Rectangle718.svg" alt="" width={218} height={78} />
                </SwiperSlide>

            </Swiper>

        </div>
    )
}
