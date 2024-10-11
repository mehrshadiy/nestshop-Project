import {ImageView} from "@/components";

interface Props {

}

export default function ForgotPassword({}: Props) {
    return (
        <>
            {
                // <!-- Forget Password Form Start -->
            }
            <section className="container flex justify-center mt-[100px] mb-[270px] font-lato">
                <div>
                    <ImageView alt={''} src={'/assets/images/touch-id 1.svg'} height={85} width={85} classname={'mb-9'} />
                    {
                        // <!-- Login Form -->
                    }
                    <form className="w-[480px]">
                        <h1 className="text-heading2 mb-2 font-quickSand">Forgot your password?</h1>
                        <div>
                            <p className="text-medium text-gray-400 mb-10">Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
                            <input type="text" placeholder="Email or Username" aria-label="email" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                            <div className="flex gap-5">
                                <input type="number" placeholder="Security Code *" aria-label="securityCode" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                                <div className="rounded-xl w-[115px] h-[65px] bg-green-150 flex items-center justify-center">
                                    <p className="text-heading4">
                                        <span className="text-[#3F7C35]">6</span>
                                        <span className="text-[#7E396B]">8</span>
                                        <span className="text-[#ADA05B]">8</span>
                                        <span className="text-[#C14A83]">6</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex gap-2 items-center">
                                    <label className="flex items-center cursor-pointer gap-3">
                                        <input type="checkbox" name="checkbox" checked disabled className="w-[18px] h-[18px] cursor-pointer" />
                                        <span className="text-small text-gray-400">I agree to terms & Policy.</span>
                                    </label>
                                </div>
                                <p className="text-heading-sm text-gray-400 cursor-pointer">Lean more</p>
                            </div>
                            <button className="h-16 px-11 bg-blue-300 text-white rounded-xl font-quickSand">Reset password</button>
                        </div>
                    </form>
                </div>
            </section>
            {
                // <!-- Forget Password Form End -->
            }
        </>
    )
}