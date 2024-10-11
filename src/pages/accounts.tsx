import {Section} from '@/components/layouts'
import {AccountSettings, AllOrdersList} from "@/components/pages/accounts";
import {accountInformation} from "@/mock/accountInformation"
import {allOrdersHeader} from "@/mock/AllOrdersHeader";
import {allOrdersItem} from "@/mock/AllOrdersItem";


export default function Accounts() {
    return (
        <>
            <Section className="lg:mt-[100px] sm:mt-4 font-lato mb-[239px]">
                <div className="flex flex-wrap justify-center items-center">
                   <AccountSettings data={accountInformation}/>
                    <AllOrdersList HeaderData={allOrdersHeader} OrdersData={allOrdersItem}/>
                </div>
            </Section>
        </>
    );
}