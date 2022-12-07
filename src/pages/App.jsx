import { useRef } from 'react';

import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import Menu from "./comps/menu";
import Footer from './comps/footer';

const App = () => {
  document.title = 'Coto'
  
  const images = [
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House 2', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House 3', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House 2', 'smallDesc': 'Small house description' },
    { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House 3', 'smallDesc': 'Small house description' }
  ]

  const ref = useRef();

  const itemTemplate = (props) => {
    const { data, dataIndex } = props;
    const { imageSrc, alt, caseTitle, smallDesc } = data[dataIndex]

    return (
      <div className="flex flex-col items-center justify-center">
        <img 
          src={imageSrc} 
          alt={alt} 
          style={{ width: '100%', height: '528px', display: 'block' }} 
          className="mb-8"
        />
        <h2 className="text-2xl xl:text-3xl text-center mb-2">{caseTitle}</h2>
        <p className="mb-6 hidden xl:block">{smallDesc}</p>
        <Link to={'/project'}>
          <Button label="View Project >" className="rounded-xl px-6 py-4 tracking-wide font-light" style={{ backgroundColor: '#103737', borderColor: '#103737', color: '#DDFFF1' }} />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Menu/>
      <section className="py-24 xl:py-40 flex flex-col items-center container mx-auto px-8 xl:px-0">
        <img src="./LogoIcon.png" alt="Coto Icon Logo" className="w-14 mb-5"/>
        <div className="flex flex-col items-center max-w-xl mb-16">
          <p className="text-xl mb-4 uppercase">We are a construction company</p>
          <h1 className="text-5xl xl:text-6xl text-center mb-4">We develop luxury projects in paradise.</h1>
          <p className="text-center mb-6 max-w-lg">Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
          <Link to={'/ourwork'}>
            <Button label="Check our work >" className="rounded-xl px-6 py-4 tracking-wide font-light" style={{ backgroundColor: '#103737', borderColor: '#103737', color: '#DDFFF1'  }} />
          </Link>
        </div>
        <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 3;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={itemTemplate}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={images}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            );
          }}
        />
      <>
        <Button
          style={{ position: "absolute", top: "40%", left: '15%', zIndex: 10, backgroundColor: '#103737', borderColor: '#ffffff', color: '#DDFFF1', height: '56px' }}
          className="p-button-rounded"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <i className="pi pi-angle-left text-xl"></i>
        </Button>
        <Button
          style={{ position: "absolute", top: "40%", right: '15%', zIndex: 10, backgroundColor: '#103737', borderColor: '#ffffff', color: '#DDFFF1', height: '56px' }}
          className="p-button-rounded"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <i className="pi pi-angle-right text-xl"></i>
        </Button>
      </>
    </div>
      </section>
      <section style={{ backgroundColor: '#0B4242' }} className="pb-28 flex flex-col items-center">
        <img src="./Hero1.png" alt="Details" className="w-full mb-16" style={{ height: '420px', objectFit: 'cover' }}/>
        <div className="flex flex-col items-center max-w-xl text-white px-8 xl:px-0">
          <p className="text-xl mb-4 uppercase">You’re in good hands</p>
          <h1 className="text-5xl xl:text-6xl text-center mb-4">Our obsession with details is contagious.</h1>
          <p className="text-center mb-6 max-w-lg">Our number one source for business is repeat clients and referrals from current and previous clients.</p>
          <Link to={'/about'}>
            <Button label="About Us >" className="rounded-xl px-6 py-4 tracking-wide font-light" style={{ backgroundColor: '#103737', borderColor: '#ffffff', color: '#DDFFF1'  }} />
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
