import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { useState } from "react";

import Menu from "./comps/menu";
import Footer from './comps/footer';

const App = () => {
  const [ usrEmail, setUsrEmail ] = useState('');
  const [ usrService, setUsrService ] = useState('');

  const images = [
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
  ]

  const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  const itemTemplate = (item) => {
    return (
      <div className="flex flex-col items-center">
        <img 
          src={item.imageSrc} 
          alt={item.alt} 
          style={{ width: '100%', display: 'block' }} 
          className="mb-8"
        />
        <h2 className="text-3xl mb-2">{item.caseTitle}</h2>
        <p className="mb-6">{item.smallDesc}</p>
        <Button label="View Project >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
      </div>
    );
  }

  return (
    <div>
      <Menu/>
      <section className="py-40 flex flex-col items-center container mx-auto">
        <img src="./LogoIcon.png" alt="Coto Icon Logo" className="w-14 mb-5"/>
        <div className="flex flex-col items-center max-w-xl mb-16">
          <p className="text-xl mb-4">We are a construction company</p>
          <h1 className="text-6xl text-center mb-4">We develop luxury projects in paradise.</h1>
          <p className="text-center mb-6 max-w-lg">Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
          <Button label="Check our work >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
        </div>
        <Galleria 
          value={images} 
          responsiveOptions={responsiveOptions} 
          numVisible={5} 
          circular 
          showItemNavigators 
          showThumbnails={false} 
          showItemNavigatorsOnHover 
          showIndicators 
          item={itemTemplate} 
        />
      </section>
      <section style={{ backgroundColor: '#0B4242' }} className="pb-28 flex flex-col items-center">
        <img src="./Hero1.png" alt="Details" className="w-full mb-16"/>
        <div className="flex flex-col items-center max-w-xl text-white">
          <p className="text-xl mb-4">You’re in good hands</p>
          <h1 className="text-6xl text-center mb-4">Our obsession with details is contagious.</h1>
          <p className="text-center mb-6 max-w-lg">Our number one source for business is repeat clients and referrals from current and previous clients.</p>
          <Button label="About Us >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#ffffff' }} />
        </div>
      </section>
      <section style={{ backgroundColor: '#132523' }} className="pb-28 flex flex-col items-center">
        <div className="flex flex-col items-center max-w-xl text-white pt-36">
          <p className="text-xl mb-4">Ready to get started?</p>
          <h1 className="text-6xl text-center mb-4">Let’s start talking about your project.</h1>
          <span className="flex flex-col w-3/4 mb-3">
            <label>Email Address</label>
            <InputText value={usrEmail} onChange={(e) => setUsrEmail(e.target.value)} placeholder="Enter you Email Address" className="rounded-lg" />
          </span>
          <span className="flex flex-col w-3/4 mb-6">
            <label>What services are you interested in?</label>
            <MultiSelect value={usrService} options={citySelectItems} onChange={(e) => setUsrService(e.value)} placeholder="Select all that apply" className="rounded-lg" />
          </span>
          <Button label="Get in touch >" className="rounded-lg w-3/4" style={{ backgroundColor: '#103737', borderColor: '#ffffff' }} />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
