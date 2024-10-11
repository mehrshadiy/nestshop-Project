import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    sliderData: Array<EntityType<ProductType >>,
    nextEl?: string,
    prevEl?: string

}

export function SimpleProductSlider({sliderData, nextEl, prevEl}: Props) {
    return (

        <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            modules={[Autoplay,Navigation]}
            autoplay={true}
            navigation={{
                 nextEl: nextEl,
                 prevEl: prevEl
            }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 24
                }
            }}

        >
            {
                sliderData.map((slideData , index) => {
                    return (
                        <SwiperSlide key={index}>
                           <SimpleProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}