import {ImageView} from "@/components";
import {ServicesList} from "@/components/pages/contact/services/ServicesList";
import {ServicesMock} from "@/mock/Services";
import {AddressesLists} from "@/components/pages/contact/adress/AddressesLists";
import {AddressesMock} from "@/mock/Addresses";
import {ContactForm} from "@/components/pages/contact/contactForm/ContactForm";

export default function ContactUs() {

    return (
        <>

            <div className={'container max-w-screen-xl text-lg mb-10 '}>
                <h1 className={'text-[#3BB77E] mb-4 font-medium'}>
                    How can help you ?
                </h1>
                <div className={'grid grid-cols-3 gap-4'}>
                    <div className={''}>
                        <h2 className={'font-bold text-4xl mb-4 text-[#253D4E]'}>
                            let us know how we can help you
                        </h2>
                        <p className={'mb-3 text-sm font-lato text-[#7E7E7E]'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <p className={'mb-3 text-sm font-lato text-[#7E7E7E]'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <ServicesList data={ServicesMock}/>

                </div>
            </div>
            <div className={'container p-0 rounded-2xl overflow-hidden mb-10'}>
                <ImageView width={2502} height={1313} alt={'google map'}
                           src={'/assets/images/contactUs/googleMap.png'}/>

            </div>

            <AddressesLists data={AddressesMock}/>


            <div className={'flex container max-w-screen-xl justify-between'}>
                <ContactForm/>
                <ImageView width={867} height={1300} alt={'women photo'} src={'/assets/images/contactUs/womenPhoto.png'}
                           classname={' w-[378px] rounded-2xl aspect-square'}/>
            </div>


        </>
    )
}