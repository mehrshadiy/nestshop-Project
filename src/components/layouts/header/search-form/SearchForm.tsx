import React, {useEffect, useState} from "react";
import {IconBox} from "@/components/common/ui/icon-box";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/Product";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";
import useDebounce from "@/hooks/use-debounce";


interface Props {
    inputClassName?: string
}

interface FormInput {
    search_text : string
}

interface FilterData {
    title:{
        $contains: string
    }
}
export function SearchForm({inputClassName = ''}): React.JSX.Element {

    const[resultData, setResultData] = useState<Array<EntityType<ProductType>>>([])

    const {register,handleSubmit, watch}=useForm<FormInput>()

    const mutation = useMutation(({mutationFn: (data:FilterData) => getAllProductsApiCall({filters: data})}))

    const search_text= watch('search_text')

    useEffect(()=>{
        if (search_text){
            delay()
        }else{
            setResultData([])
        }
    },[search_text])

    const onSubmitHandler =(data : FormInput)=>{
        if (search_text && search_text.length <= 1)
            return;
        mutation.mutate({
            title: {
                $contains: data.search_text
            }
        },{
            onSuccess: (response) =>{
                setResultData(response.data)
            }
        })
    }

    const delay = useDebounce(handleSubmit(onSubmitHandler), 1000)

    return (
        <div className={'relative'}>
            <form autoComplete={'off'} name="search-form" onSubmit={handleSubmit(onSubmitHandler)} action="#" method="post" className="flex items-center">
                <input type="text" {...register("search_text")} placeholder="Search for items" className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`}/>
                <button type="submit"><IconBox icon={'icon-search'}/></button>
            </form>
            {
                resultData &&
                <div className={'absolute bg-white w-full left-0 right-0 top-14'}>
                    <ul>
                        {
                            resultData.map((item: EntityType<ProductType>, index: number)=>{
                                return (
                                    <li className={'p-4 hover:bg-green-200 hover:text-white cursor-pointer'}>{item.attributes.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            }

        </div>
    );
}

