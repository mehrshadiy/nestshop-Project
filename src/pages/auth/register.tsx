import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {ImageView, Input} from "@/components";
import React from "react";
import {useRouter} from "next/router";
import {signIn} from "next-auth/react";


interface Props {
}

interface formData {
    username: string;
    email: string;
    password: string
    confirmPassword: string
    acceptTerms: boolean
}


export default function Register({}: Props) {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<formData>()

    const mutate = useMutation({mutationFn: registerApiCall})

    const {login} = useUser()

    const router = useRouter()

    const onSubmit = (data: formData) => {

        mutate.mutate(data, {
            onSuccess: (response) => {
                login(response.jwt, response.user)
                toast.success('Your registration was successful')
                router.back()
            }
        })
    }

    const password = watch('password');


    return (
        <>
            {
                // <!-- Register Start -->
            }
            <section className="container mt-[70px] mb-[120px] flex gap-[100px] justify-center font-lato">
                {
                    // <!-- Register Form -->
                }
                <form onSubmit={handleSubmit(onSubmit)} className="w-[480px]">
                    <h1 className="text-heading2 mb-2 font-quickSand">Create an Account</h1>
                    <div>
                        <p className="text-medium text-gray-400 mb-10">Your personal data will be used to support your
                            experience throughout this website, to manage access to your account, and for other purposes
                            described in our privacy policy</p>
                        <Input register={register('username', {required: true})} type={'text'}
                               errors={errors} {...{placeholder: 'Username'}} aria-label="username"/>
                        <Input register={register('email', {required: "enter your email please"})} type={"email"}
                               errors={errors} {...{placeholder: 'Email'}} aria-label="email"/>
                        <Input register={register('password', {
                            required: "enter  your password please",
                            minLength: {value: 4, message: "Password must be at least 4 characters"}
                        })} type={'password'} errors={errors}  {...{placeholder: 'Password'}} aria-label="password"/>

                        {
                            <Input register={register("confirmPassword", {
                                required: "enter  your password please",
                                minLength: {value: 4, message: "Password must be at least 4 characters"},
                                validate: (value) => value === password || 'Passwords must match'
                            })} type={'password'} errors={errors}  {...{placeholder: 'Confirm password'}}
                                   aria-label="password"/>
                        }

                        {/*
                                <div className="flex gap-5">
                                <input type="number" aria-label="securityCode" placeholder="Security code *"
                                       className="text-medium border rounded-xl px-9 py-6 w-full mb-6"/>
                                <div
                                    className="rounded-xl w-[115px] h-[65px] bg-green-150 flex items-center justify-center">
                                    <p className="text-heading4"><span className="text-[#3F7C35]">6</span><span
                                        className="text-[#7E396B]">8</span><span className="text-[#ADA05B]">8</span><span
                                        className="text-[#C14A83]">6</span></p>
                                </div>
                            </div>
                        */}


                        <div className="items-center mb-10 w-max">
                            <div className="items-center w-max">
                                <Input type={"checkbox"}
                                       register={register("acceptTerms",)}
                                       errors={errors} label={'I agree to terms & Policy.'} defaultChecked={true}/>
                            </div>
                            {/*
                                    <p className="text-heading-sm text-gray-400 cursor-pointer mb-4">Lean more</p>
                                */}
                        </div>


                        <button className="h-16 px-11 bg-blue-300 text-white rounded-xl font-quickSand"
                                type={"submit"}>Submit & Register
                        </button>
                    </div>
                </form>

                {
                    // <!-- Social Login -->
                }

                {
                    <div className="p-[50px] flex flex-col gap-5 border rounded-xl h-fit translate-y-[182px]">
                        <button onClick={()=> signIn('facebook')}
                            className="w-[370px] h-[60px] text-heading5 bg-[#1877F2] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span>
                            <ImageView alt={''} width={29} src={"/assets/images/Facebook Logo.svg"} height={29}/>
                        </span>Continue with Facebook
                        </button>
                        <button onClick={()=> signIn('google')}
                            className="w-[370px] h-[60px] text-heading5 bg-[#FFFFFF] rounded-xl flex gap-4 justify-center items-center border border-[#F2F3F4] shadow-c-xs">
                        <span>
                            <ImageView alt={''} height={29} src={"/assets/images/Google Logo.svg"} width={29}/>
                        </span>Continue with Google
                        </button>
                        <button onClick={()=> signIn('apple')}
                            className="w-[370px] h-[60px] text-heading5 bg-[#000000] text-white rounded-xl flex gap-4 justify-center items-center">
                        <span>
                            <ImageView alt={''} src={"/assets/images/Apple Logo.svg"} width={29} height={29}/>
                        </span>Continue with Apple
                        </button>
                    </div>
                }

            </section>

            {
                // <!-- Register End -->
            }

        </>
    )
}