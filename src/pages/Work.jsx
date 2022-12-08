import { useEffect, useRef } from 'react';

import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';

import Menu from "./comps/menu";
import Footer from './comps/footer';

import {
    StackedCarousel,
    ResponsiveContainer,
  } from "react-stacked-center-carousel";

const Work = () => {
    document.title = 'Our Work'

    const images = [
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
    ]

    const ref = useRef();
    
    const itemTemplate = (props) => {
        const { data, dataIndex } = props;
        const { imageSrc, alt, caseTitle } = data[dataIndex]
    
        return (
            <div className="flex flex-col items-center">
                <img 
                    src={imageSrc} 
                    alt={alt} 
                    style={{ width: '100%', display: 'block' }} 
                    className="mb-8"
                />
                <h2 className="text-2xl xl:text-3xl text-center mb-2">{caseTitle}</h2>
                <Link to={'/project'}>
                    <Button label="View Project >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
                </Link>
            </div>
        );
    }

    const itemTemplateImgCase = (item) => {
        return (
            <img src={item.imageSrc} alt={item.alt} className='object-cover' style={{ height: '420px' }}/>
        );
    }

    const ItemTemplateCase = () => {
        return (
            <div className="flex flex-col items-center text-center w-full xl:w-1/4 mb-20 xl:mb-0 cotoCarousel">
                <Carousel 
                    value={images} 
                    numVisible={1} 
                    numScroll={1} 
                    itemTemplate={itemTemplateImgCase}
                    showNavigators={false}
                />
                <h2 className="text-2xl xl:text-3xl text-center mb-2">Easter House Beach</h2>
                <p className='w-3/4 mb-6'>Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
                <Link to={'/project'} className='border-2 px-8 py-3 rounded-lg' style={{ color: '#103737', borderColor: '#103737' }}>View Project ></Link>
            </div>
        );
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
    <div>
        <Menu/>
        <section className="py-24 xl:py-40 flex flex-col items-center container mx-auto px-8 xl:px-0">
            <div className="flex flex-col items-center max-w-xl mb-16">
                <p className="text-xl mb-4">LET OUR WORK DO THE TALKING</p>
                <h1 className="text-5xl xl:text-6xl text-center mb-4">We are passionate about making dreams come true.</h1>
            </div>
            <div style={{ width: "100%", position: "relative", height: '510px' }} >
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
        <section className='container mx-auto px-8 xl:px-0 flex flex-col xl:flex-row justify-between mb-32'>
            <ItemTemplateCase/>
            <ItemTemplateCase/>
            <ItemTemplateCase/>
        </section>
        <Footer/>
    </div>
    );
}

export default Work;
