import {CartTableRow} from "@/components";
import {useBasket} from "@/hooks/use-basket";
import {cartTableSHead} from "@/mock/cartTable'sHead";
import {FieldValues, UseFormRegister} from "react-hook-form";

interface Props {
    register: UseFormRegister<FieldValues>
}
export function YourCartTable({register}: Props) {

    const {basketItems} = useBasket()

    return (
        <>
            <div className="max-h-[500px] overflow-auto">
                <div className="min-w-[500px] flex flex-col gap-[30px]">
                    <div className="text-xsmall font-quickSand md:text-heading6 bg-gray-100 rounded-[15px] h-[58px] w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                        <div className="flex justify-center items-center">
                            <label htmlFor="all-checkbox" className="hidden"></label>
                            <input {...register("all_checkbox")} type="checkbox" id="all-checkbox" className="accent-green-200 w-3 h-3 md:w-4 md:h-4"/>
                        </div>
                        {
                            cartTableSHead &&
                            cartTableSHead.map((item, index) => {
                                return (
                                    <div key={index} className="flex justify-center items-center">{item}</div>
                                )
                            })
                        }
                    </div>
                    {basketItems &&
                        basketItems.map((basketItem, index) => {
                            return (
                                <CartTableRow data={basketItem} key={index}/>
                            )
                        })}
                </div>
            </div>
        </>
    );
}