import {ImageView} from "@/components";
import {Section} from '@/components/layouts'
import AnimateValue from "@/components/common/animateValue/AnimateValue";
import {aboutSliderData} from "@/mock/aboutSliderData";
import {AboutList, MemberList, ServicesList} from "@/components/pages/about-page";
import {aboutUsData} from "@/mock/aboutUsData";
import {servicesData} from "@/mock/servicesData";
import {AboutSlider} from "@/components/pages/about-page/about-slider";
import {memberList} from "@/mock/memberList";


export default function About() {
    return (
        <>
            <Section>
                <div className={'md:flex gap-10 w-full'}>
                    <ImageView src={'/assets/images/about/Rectangle25.jpg'} alt={'Rectangle'} width={646} height={736} classname={'w-full md:w-1/2 max-w-[400px] md:max-w-none mx-auto object-center object-cover'}/>
                    <div className={'md:w-1/2'}>
                        <div className={'text-xl sm:text-2xl xl:text-[40px] font-bold text-blue-300 py-7 xl:py-12'}>Welcome to NestMart</div>
                        <p className={'text-xs xl:text-base pb-5 text-gray-500'}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit, sed do eiusmod
                            tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate id est laborum.
                        </p>
                        <p className={'text-xs xl:text-base text-gray-500'}>Ius ferri velit sanctus cu, sed at soleat
                            accusata.
                            Dictas prompta et Ut placerat legendos
                            interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                            orci
                            eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                            Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate id est laborum.
                        </p>
                        { aboutSliderData && <AboutSlider data={aboutSliderData}/>}
                    </div>
                </div>
            </Section>

            <Section>
                <div className={'flex flex-col items-center justify-center gap-3 xl:gap-6 mb-10 lg:mb-16'}>
                    <div className={'text-blue-300 font-bold text-xl md:text-3xl xl:text-[48px]'}>What We Provide?</div>
                    <ImageView src={'/assets/images/about/Wave.png'} alt={'waveIcon'} width={150} height={15} classname={'w-[100px] xl:w-[150px]'}/>
                </div>
                {servicesData && <ServicesList data={servicesData}/>}
            </Section>

            <Section>
                <div className={'flex flex-wrap lg:flex-nowrap items-center gap-3 justify-center'}>
                    <ImageView src={'/assets/images/about/Rectangle30.jpg'} alt={'Rectangle30'} width={325} height={438} classname={'rounded-[15px] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[325px]'}/>
                    <ImageView src={'/assets/images/about/Rectangle 31.jpg'} alt={'Rectangle 31'} width={426} height={575} classname={'rounded-[15px] w-[180px] md:w-[240px] lg:w-[330px] xl:w-[426px]'}/>
                    <div className={'justify-self-start flex flex-col gap-6 mt-7 lg:mt-2 lg:pl-5 lg:basis-[45%] xl:basis-2/6'}>
                        <span className={'text-gray-500 font-bold text-xl xl:text-2xl'}>Our performance</span>
                        <h1 className={'text-blue-300 font-bold text-3xl xl:text-5xl xl:leading-[56px]'}>Your Partner for <br/> e-commerce grocery solution</h1>
                        <p className={'text-sm xl:text-base text-gray-500'}>Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        <p className={'text-sm xl:text-base text-gray-500'}>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    </div>
                </div>
            </Section>

            <Section>
                {aboutUsData && <AboutList data={aboutUsData}/>}
            </Section>

            <Section>
                <AnimateValue/>
            </Section>

            <Section>
                <div className={'flex flex-col items-center justify-center gap-3 xl:gap-6 mb-10 lg:mb-16'}>
                    <div className={'text-blue-300 font-bold text-xl md:text-3xl xl:text-[48px]'}>Our Team</div>
                    <ImageView src={'/assets/images/about/Wave.png'} alt={'waveIcon'} width={150} height={15}
                               classname={'w-[100px] xl:w-[150px]'}/>
                </div>
                <div className={'flex flex-wrap w-full'}>
                    <div className={'basis-full lg:basis-1/3 mb-16'}>
                        <div className={'text-green-200 font-bold text-xs md:text-base xl:text-xl pb-2'}>Our Team</div>
                        <div className={'text-blue-300 font-bold text-3xl xl:text-[48px] max-w-[200px] xl:max-w-[300px] xl:leading-[55px] pb-5'}>Meet Our Expert Team
                        </div>
                        <p className={'text-gray-500 text-xs md:text-sm xl:text-base pb-5 xl:pb-6'}>Proin ullamcorper pretium orci. Donec necscele
                            risque leo. Nam massa dolor imperdiet neccon
                            sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <p className={'text-gray-500 text-xs md:text-sm xl:text-base pb-5 xl:pb-6'}>Proin ullamcorper pretium orci. Donec necscele
                            risque leo. Nam massa dolor imperdiet neccon
                            sequata congue idsem. Maecenas malesuada faucibus finibus. </p>
                        <div className={'bg-green-200 inline-block px-5 py-2 rounded text-white text-sm xl:text-base font-semibold cursor-pointer'}>View All Members
                        </div>
                    </div>
                    { memberList && <MemberList data={memberList}/>}
                </div>
            </Section>
        </>

    );
}

