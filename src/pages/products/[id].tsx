import {useRouter} from "next/router";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall, getOneProductsApiCall} from "@/api/Product";
import {useEffect, useMemo, useState} from "react";
import {ApiResponseType, ApiSingleResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {SinglePageGallery} from "@/components/pages/singlePage/SinglePageGallery";
import {SingleProductData} from "@/components/pages/singlePage/SingleProductData";
import {Tabs} from "@/components/pages/singlePage/tabs";
import {SimpleProductSlider} from "@/components";

interface Props {

}

export default function singleProduct({}: Props) {

    const router = useRouter();
    const Id = router.query.id



    const {data: ProductData, refetch: ProductDataRefetch} = useQuery<ApiSingleResponseType<ProductType>>({
        queryKey: [getOneProductsApiCall.name, 'productAllData'],
        queryFn: () => getOneProductsApiCall({id: Id, populate: ['*']}),
        retry: true,
        enabled: !!Id
    })

    const [filter, setFilter] = useState<string>(ProductData?.data.attributes.categories?.data[0].attributes.title!)

    console.log('filter:', filter)

    const {data: SimilarProducts} = useQuery<ApiResponseType<ProductType>>({
        queryKey:[getAllProductsApiCall.name , 'similar'],
        queryFn:()=> getAllProductsApiCall({populate:["categories","thumbnail"], filters: {
                categories: {
                title: {
                    $eq: filter
                }
            }
        }}),
        retry: true,
        enabled: !!ProductData?.data.attributes.categories?.data[0].attributes.title
    })
    console.log('!!!', ProductData?.data.attributes.categories?.data[0].attributes.title)


    console.log('SimilarProducts:', SimilarProducts)

    useEffect(() => {
        if (Id) {
            ProductDataRefetch()
        }
        return
    }, [Id])

    useMemo(() => {
        setFilter(ProductData?.data.attributes.categories?.data[0].attributes.title!)

    }, [ProductData?.data.attributes.categories?.data[0].attributes.title]);

    const tabsData = [
        {title: 'Description', content: ProductData?.data.attributes.description},
        {title: 'Additional info', content: ''},
        {title: 'Reviews (3)', content: ''},
    ];

    return (
        <>
            <section className={"flex flex-col items-center mb-[68px]"}>
                <div className="flex flex-row justify-center w-4/5">

                    {
                        ProductData &&
                        <SinglePageGallery data={ProductData}/>
                    }

                    {
                        ProductData &&
                        <SingleProductData data={ProductData}/>
                    }

                </div>
            </section>

            <section className={'container max-w-screen-xl border border-gray-50 rounded-lg p-10'}>
                <Tabs tabs={tabsData}/>
            </section>

            <section className={'container max-w-screen-xl border border-gray-50 rounded-lg p-10'}>
                <h2 className={'text-blue-300 font-bold text-3xl text-center mb-10'}>
                    Related products
                </h2>
                {
                    SimilarProducts &&
                    <SimpleProductSlider sliderData={SimilarProducts.data}/>
                }

            </section>
        </>

    )
}