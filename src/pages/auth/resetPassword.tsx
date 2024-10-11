interface Props {
    
}

export default function ResetPassword({}: Props) {
    return (
        <>
            {
                // <!-- Forget Password Form Start -->
            }
            <section className="container flex justify-center gap-20 mt-[100px] mb-[320px] font-lato overflow-hidden">
                <div>
                    <img src="/assets/images/update 1.svg" alt="" className="mb-9" />
                    {
                        // <!-- Login Form -->
                    }
                    <form className="w-[480px]">
                        <h1 className="text-heading2 mb-6 font-quickSand">Set new password</h1>
                        <div>
                            <p className="text-medium text-gray-400 mb-10">Please create a new password that you don’t use on any other site.</p>
                            <input type="password" aria-label="password" placeholder="Password" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                            <input type="password" aria-label="confirmPassword" placeholder="Confirm you password" className="text-medium border rounded-xl px-9 py-6 w-full mb-6" />
                            <button className="h-16 px-11 bg-blue-300 text-white rounded-xl font-quickSand">Set new password</button>
                        </div>
                    </form>
                </div>
                <div className="text-gray-500 translate-y-1/2">
                    <p>Password must:</p>
                    <div className="pl-4">
                        <p>
                            Be between 9 and 64 characters <br />
                            include at least two of the following:
                        </p>
                        <ul className="list-disc list-inside pl-2">
                            <li>An uppercase character</li>
                            <li>A lowercase character</li>
                            <li>A number</li>
                            <li>A special character</li>
                        </ul>
                    </div>
                </div>
            </section>
            {
                // <!-- Forget Password Form End -->
            }

        </>
    )
}