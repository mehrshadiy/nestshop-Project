import {
    Filter,
    IconBox,
    Paginate,
    PopularProductList,
    SimpleProductCard
} from "@/components";
import {Section} from '@/components/layouts';
import {useQuery} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Product";
import {useState} from "react";

export default function ShopCategory() {

    const [currentPage, setCurrentPage] = useState(1);

    const {data: popularData} = useQuery({
        queryKey: [getAllProductsApiCall.name, 'popularData'],
        queryFn: () => getAllProductsApiCall({
            populate: ['thumbnail'],
            filters: { is_popular: {$eq: true} },
        })
    });

    const {data: AllProducts} = useQuery({
        queryKey: [getAllProductsApiCall.name, 'AllProducts', currentPage],
        queryFn: () => getAllProductsApiCall({
            populate: ['*'],
            pagination: {
                page: currentPage,
                pageSize: 9
            }
        }),
    });

    return (
        <>
            <Section>
                <div className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-[url('/assets/images/footerBanner.png')] bg-[rgba(59,183,126,.2)] bg-opacity-90 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
                    <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
                        <h2 className="max-w-[100%] font-quickSand text-heading3 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">Vegetables & tubers</h2>
                    </div>
                </div>
            </Section>

            <Section className="md:flex md:flex-row sm:flex-col md:justify-between">
                <div className="flex flex-col mr-7 max-w-[462px]">
                    <Filter/>
                    {popularData && <PopularProductList data={popularData} />}
                </div>

                <div>
                    <div className="flex justify-between rounded-[15px] bg-gray-200 py-[25px] ps-[30px] mb-[48px]">
                        <div className="text-heading6 text-gray-500">There are
                            {AllProducts &&
                                <span className="text-blue-200"> {AllProducts.meta.pagination.total} </span>
                            }
                            products in this category
                        </div>
                        <div className="font-bold text-gray-500 mr-[5px] flex justify-center">Sort by: Featured
                            <IconBox icon={"icon-angle-small-down text-gray-200"} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex md:flex-row md:flex-wrap gap-4 md:gap-6 lg:gap-2 mb-[45px]">
                        {
                            AllProducts &&
                            AllProducts.data.map((item, index) => {
                                return (
                                    <SimpleProductCard
                                        key={index}
                                        data={item}
                                        customCardClass={"group sm:w-full md:w-[45%] lg:w-[32%] border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full"}
                                    />
                                );
                            })
                        }
                    </div>
                    {AllProducts && <Paginate data={AllProducts.meta} pageSetter={setCurrentPage}/>}
                </div>
            </Section>
        </>
    );
}
