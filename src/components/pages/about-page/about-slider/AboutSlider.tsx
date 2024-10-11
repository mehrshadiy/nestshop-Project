import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {IconBox, ImageView} from "@/components";

interface Props {
    data: {
        src: string,
        alt: string,
        width: number,
        height: number
    }[]
}

export function AboutSlider({data}: Props) {
    return (
        <div className={'relative'}>
            <Swiper
                slidesPerView={3}
                modules={[Navigation]}
                className={'mt-10 w-full'}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom'
                }}
                breakpoints={{
                    0: {
                        spaceBetween: 10
                    },
                    640: {
                        spaceBetween: 30
                    }
                }}
            >
                {
                    data.map((item, index) => {
                        return ((
                            <SwiperSlide key={index}>
                                <ImageView src={item.src} alt={item.alt}
                                           width={item.width}
                                           height={item.height}/>
                            </SwiperSlide>
                        ))
                    })
                }
            </Swiper>
            <IconBox
                icon={'icon-angle-small-left swiper-button-next-custom w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 text-green-200 hover:bg-green-200 hover:text-gray-50 flex justify-center items-center absolute z-50 top-[40%] left-0 -translate-x-[50%] cursor-pointer'}/>
            <IconBox
                icon={'icon-angle-small-right swiper-button-prev-custom w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-50 text-green-200 hover:bg-green-200 hover:text-gray-50 flex justify-center items-center absolute z-50 top-[40%] right-0 translate-x-[50%] cursor-pointer'}/>
        </div>
    );
}