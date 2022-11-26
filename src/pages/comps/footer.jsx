import { useState } from "react";

import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';

import MenuItems from "./navItems";


const Footer = (props) => {
    const [ usrEmail, setUsrEmail ] = useState('');
    const [ usrService, setUsrService ] = useState('');
    const citySelectItems = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ];

    return (
      <footer className="text-white" style={{ backgroundColor: '#000000' }}>
        <section style={{ backgroundColor: '#132523' }} className={"pb-28 flex flex-col items-center px-8 xl:px-0 " + props.footerForm}>
            <div className="flex flex-col items-center max-w-xl pt-36" style={{ color: '#DDFFF1' }}>
              <p className="text-xl mb-4 uppercase">Ready to get started?</p>
              <h1 className="text-5xl xl:text-5xl text-left xl:text-center mb-10">Let’s start talking about your project.</h1>
              <span className="flex flex-col w-full xl:w-3/4 mb-3">
                <label className="mb-2">Email Address</label>
                <InputText value={usrEmail} onChange={(e) => setUsrEmail(e.target.value)} placeholder="Enter you Email Address" className="rounded-lg" color="#303030" />
              </span>
              <span className="flex flex-col w-full xl:w-3/4 mb-6">
                <label className="mb-2">What services are you interested in?</label>
                <MultiSelect value={usrService} options={citySelectItems} onChange={(e) => setUsrService(e.value)} placeholder="Select all that apply" className="rounded-lg" color="#303030"/>
              </span>
              <Button label="Get in touch >" className="rounded-lg w-3/4" style={{ backgroundColor: '#103737', borderColor: '#ffffff' }} />
            </div>
        </section>
        <div className="container m-auto flex flex-col xl:flex-row items-start justify-between border-b-black xl:border-b-white border-b-2 py-24 px-8 xl:px-0 pb-8 xl:pb-24">
          <Link>
            <img src="./LogoWhite.png" alt="Logo Coto" className="w-20 mr-14 mb-7 xl:mb-0"/>
          </Link>
          <section className="flex flex-col mb-7 xl:mb-0">
            <h6>Site Map</h6>
            <MenuItems/>
          </section>
          <section className="flex flex-col mb-16 xl:mb-0">
            <h6>Contact Us</h6>
            <p><i className="pi pi-phone"></i> (+506) 8888-0032</p>
            <p><i className="pi pi-envelope"></i> contact@cotocompany.com</p>
          </section>
          <section className="flex flex-col xl:w-96 border-t-white border-t-2 xl:border-t-0 pt-8 xl:pt-0">
            <h6>Visit Us</h6>
            <p>The Dome Plaza next to ICE / Kolbi and Coopealianza Osa, Uvita, 60504, Costa Rica.</p>
          </section>
        </div>
        <div className="container m-auto flex flex-col xl:flex-row justify-between px-8 xl:px-0 pt-8  pb-8 xl:pb-24">
          <section className="flex w-32 justify-between mb-8">
            <p>Follow Us</p>
            <a href="/"><li className="pi pi-facebook"></li></a>
            <a href="/"><li className="pi pi-linkedin"></li></a>
          </section>
          <p><small>© Coto Company, Costa Rica, 2022. All rights reserved.  Powered by Milk Design Studio. </small></p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  