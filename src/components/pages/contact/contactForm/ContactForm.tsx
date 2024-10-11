interface Props {

}

export function ContactForm({}: Props) {

    return (

        <div className={'col-span-2 w-7/12'}>

            <h2 className={'text-[#3BB77E] text-lg mb-4'}>Contact form</h2>
            <h3 className={'text-[#253D4E] text-3xl mb-4'}>Drop Us a Line</h3>
            <p className={'text-sm text-[#7E7E7E] mb-4'}>Your email address will not be published. Required fields
                are marked *</p>
            <form action="#">
                <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <input className={'p-4 rounded-lg border text-sm '} type="text" placeholder={'Your name *'}
                           required={true}/>
                    <input className={'p-4 rounded-lg border text-sm '} type="email" placeholder={'Email *'}
                           required={true}/>
                    <input className={'p-4 rounded-lg border text-sm '} type="number" placeholder={'Phone number *'}
                           required={true}/>
                    <input className={'p-4 rounded-lg border text-sm '} type="text" placeholder={'Subject *'}
                           required={true}/>
                    <textarea name="" id="" placeholder={'Message *'}
                              className={'col-span-2 min-h-[244px] resize-none p-4 rounded-lg border text-sm'}/>
                </div>
                <input type="submit" value={'Send Message'}
                       className={'text-white text-sm bg-[#253D4E] p-4 rounded-lg'}/>
            </form>

        </div>

    )
}