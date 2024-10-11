import {IconBox, ImageView} from "@/components";
import {ApiSingleResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";

import {Swiper as SwiperInstance} from "swiper/types";


interface Props {
    data: ApiSingleResponseType<ProductType>
}

export function SinglePageGallery({data}: Props) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);


    return (
        <div className="w-1/2 mr-[28px]">

            <div className="w-full mb-[28px] p-[40px] border-[1px] border-gray-200 rounded-2xl">

                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <div className="top-0 left-0 flex justify-end">
                            <IconBox icon={'icon-search text-gray-200 mb-20'} size={24}/>
                        </div>
                        <ImageView alt={data.data.attributes.thumbnail?.data?.attributes.name}
                                   src={data.data.attributes.thumbnail?.data?.attributes.url}
                                   classname={'w-11/12'}
                                   height={data.data.attributes.thumbnail?.data?.attributes.height}
                                   width={data.data.attributes.thumbnail?.data?.attributes.width}/>
                    </SwiperSlide>
                </Swiper>
            </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >

                    <SwiperSlide className="border rounded-xl p-2 opacity-70">
                        <ImageView alt={data.data.attributes.thumbnail?.data?.attributes.name}
                                   src={data.data.attributes.thumbnail?.data?.attributes.url}
                                   classname={'w-11/12'}
                                   height={data.data.attributes.thumbnail?.data?.attributes.height}
                                   width={data.data.attributes.thumbnail?.data?.attributes.width}/>
                    </SwiperSlide>

                </Swiper>
        </div>
    )
}