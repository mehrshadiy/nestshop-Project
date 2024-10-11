import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {DealsOfTheDaysCard} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface Props {
    sliderData: Array<EntityType<ProductType>>
}

export function DealsOfTheDaysSlider({sliderData}: Props) {
    return (
        <Swiper
        spaceBetween={16}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={true}
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 22
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 22
            }
        }}
        >
            {
                sliderData.map((slideData, index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <DealsOfTheDaysCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}