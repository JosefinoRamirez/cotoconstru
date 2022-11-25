import { useState, useEffect } from "react";

import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';


import Menu from "./comps/menu";
import Footer from "./comps/footer";

const Contact = () => {
    document.title = 'Contact Us'

    const [ usrEmail, setUsrEmail ] = useState('');
    const [ usrService, setUsrService ] = useState('');
    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div>
            <Menu/>
            <section className="pb-28 flex flex-col items-center px-8 md:px-0">
                <div className="flex flex-col items-center max-w-xl text-black pt-36">
                    <p className="text-xl mb-4">Ready to get started?</p>
                    <h1 className="text-5xl md:text-6xl text-left md:text-center mb-4">Let’s start talking about your project.</h1>
                    <span className="flex flex-col w-full md:w-3/4 mb-3">
                    <label>Email Address</label>
                    <InputText value={usrEmail} onChange={(e) => setUsrEmail(e.target.value)} placeholder="Enter you Email Address" className="rounded-lg" />
                    </span>
                    <span className="flex flex-col w-full md:w-3/4 mb-6">
                    <label>What services are you interested in?</label>
                    <MultiSelect value={usrService} options={citySelectItems} onChange={(e) => setUsrService(e.value)} placeholder="Select all that apply" className="rounded-lg" />
                    </span>
                    <Button label="Get in touch >" className="rounded-lg w-3/4" style={{ backgroundColor: '#103737', borderColor: '#ffffff' }} />
                </div>
            </section>
            <img src="./Contact.png" alt="Contact" className="w-full" />
            <Footer
                footerForm='hidden'
            />
        </div>
    );
}

export default Contact;
