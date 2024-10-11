import {ImageView, Input} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {useBasket} from "@/hooks/use-basket";
import {AuthPageReplacer} from "@/components/pages/auth/AuthPageReplacer";
import React from "react";
import Link from "next/link";


interface formData {
    identifier: string;
    password: string
}


export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm<formData>()
    const mutate = useMutation({mutationFn: loginApiCall})
    const {isLogin, login} = useUser()
    const router = useRouter()
    const {uuid2user} = useBasket()

    const onSubmit = (data: formData) => {

        mutate.mutate(data, {
            onSuccess: (response) => {
                login(response.jwt, response.user)
                console.log("isLogin", isLogin)
                toast.success('login successfully')
                router.back()
                uuid2user()
            }
        })
    }


    return (
        <>

            {
                // <!-- Login Start -->
            }

            <section className="container mt-[100px] mb-[125px] flex justify-center gap-14 font-lato">
                <ImageView alt={''} src={"/assets/images/Rectangle 39.png"} height={601} width={512}
                           classname={"rounded-lg"}/>

                {
                    // <!-- Login Form -->
                }

                <form onSubmit={handleSubmit(onSubmit)} className="w-[480px]">
                    <h1 className="text-heading2 mb-2 font-quickSand">Login</h1>
                    <div>
                        <p className="text-medium text-gray-400 mb-10">Don't have an account?
                            <AuthPageReplacer route={'register'}>
                                <span
                                    className="text-green-200 cursor-pointer">
                                Create here
                            </span>
                            </AuthPageReplacer>

                        </p>
                        <Input register={register('identifier', {required: true})} type={'text'} aria-label={'email'}
                               errors={errors} {...{placeholder: 'Username or Email *'}} />

                        <Input register={register('password', {
                            required: "enter  your password please",
                            minLength: {value: 4, message: "Password must be at least 4 characters"}
                        })} type={'password'} aria-label="password"
                               errors={errors}  {...{placeholder: 'Your password *'}}/>


                        {/*
                            <div className="flex gap-5">
                                <input type="number" placeholder="Security code *" aria-label="securityCode"
                                       className="text-medium border rounded-xl px-9 py-6 w-full mb-6"/>
                                <div
                                    className="rounded-xl w-[115px] h-[65px] bg-green-150 flex items-center justify-center">
                                    <p className="text-heading4">
                                        <span className="text-[#3F7C35]">6</span>
                                        <span className="text-[#7E396B]">8</span>
                                        <span className="text-[#ADA05B]">8</span>
                                        <span className="text-[#C14A83]">6</span>
                                    </p>
                                </div>
                            </div>
                        */}

                        <div className="flex justify-between items-center mb-10">

                            {/*
                                <div className="flex gap-2 items-center">
                                    <label className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="checkbox" checked
                                               className="w-[18px] h-[18px] mr-3 cursor-pointer"/>
                                        <span className="text-small text-green-200">Remember me</span>
                                        <i className="fa-solid fa-user"></i>
                                    </label>
                                </div>
                            */}

                            {/*<AuthPageReplacer route={'forgotPassword'}>*/}
                            <Link href={'/404'} className="text-heading-sm text-gray-400 cursor-pointer">Forgot
                                password?</Link>
                            {/*</AuthPageReplacer>*/}
                        </div>

                        <button className="h-16 px-11 bg-blue-300 text-white rounded-xl font-quickSand"
                                type={"submit"}>Log in
                        </button>
                    </div>
                </form>
            </section>

            {
                // <!-- Login End -->
            }


        </>
    )
}