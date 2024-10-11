import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCardWithSold, SimpleProductCard} from "@/components";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface Props {
    sliderData : Array<EntityType<ProductType>>
}

export function BestSellersSlider({sliderData}: Props) {
    return (
            <Swiper
            spaceBetween={16}
            slidesPerView={2}
            modules={[Autoplay]}
            autoplay={true}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
            >
                {
                    sliderData.map((slideData, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <SimpleProductCardWithSold data={slideData}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    );
}