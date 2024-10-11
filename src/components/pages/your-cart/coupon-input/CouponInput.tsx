import {FieldValues, UseFormRegister} from "react-hook-form";

interface Props {
    register: UseFormRegister<FieldValues>
}

export function CouponInput({register}: Props) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[30px]">
            <div className="w-full md:w-auto focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8">
                <label htmlFor="city" className="hidden"></label>
                <input {...register("city")} id="city" type="text"
                       placeholder="City / Town"
                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
            </div>
            <div className="focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 w-full">
                <label htmlFor="postal-zip" className="hidden"></label>
                <input {...register("postal-zip")} id="postal-zip" type="text"
                       placeholder="Postcode / Zip"
                       className="w-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
            </div>
        </div>
    );
}