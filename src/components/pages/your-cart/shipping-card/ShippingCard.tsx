import {FieldValues, UseFormRegister} from "react-hook-form";
import {CouponInput} from "@/components";

interface Props {
    register: UseFormRegister<FieldValues>
}

export function ShippingCard({register}: Props) {
    return (
        <>
            <div className="font-quickSand text-heading4">Calculate Shipping</div>
            <div className="flex justify-start items-center gap-4">
                <span className="font-lato text-medium text-gray-400">Flat rate:</span>
                <span className="font-quickSand text-heading6 text-green-200">5%</span>
            </div>
            <div
                className="w-full focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                <label htmlFor="country" className="hidden"></label>
                <select {...register("country")} id="country"
                        className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium border-none">
                    <option>State / Country</option>
                    <option>Iran</option>
                    <option>United State</option>
                </select>
            </div>
        </>
    );
}