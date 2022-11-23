import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

import Menu from "./comps/menu";
import Footer from './comps/footer';

const Work = () => {
    document.title = 'Our Work'

    const images = [
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House' },
    ]
    
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
                <h2 className="text-2xl md:text-3xl text-center mb-2">{item.caseTitle}</h2>
                <Button label="View Project >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
            </div>
        );
    }

    const itemTemplateImgCase = (item) => {
        return (
            <img src={item.imageSrc} alt={item.alt}/>
        );
    }

    const ItemTemplateCase = (props) => {
        return (
            <div className="flex flex-col items-center w-full md:w-1/4 mb-20 md:mb-0">
                <Carousel 
                    value={images} 
                    numVisible={1} 
                    numScroll={1} 
                    itemTemplate={itemTemplateImgCase}
                    showNavigators={false}
                />
                <h2 className="text-2xl md:text-3xl text-center mb-2">Easter House Beach</h2>
                <p className='w-3/4 mb-6'>Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
                <Button label="View Project >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
            </div>
        );
    }

    return (
    <div>
        <Menu/>
        <section className="py-24 md:py-40 flex flex-col items-center container mx-auto px-8 md:px-0">
            <div className="flex flex-col items-center max-w-xl mb-16">
                <p className="text-xl mb-4">Let our work do the talking</p>
                <h1 className="text-5xl md:text-6xl text-center mb-4">We are passionate about making dreams come true.</h1>
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
        <section className='container mx-auto px-8 md:px-0 flex flex-col md:flex-row justify-between mb-32'>
            <ItemTemplateCase/>
            <ItemTemplateCase/>
            <ItemTemplateCase/>
        </section>
        <Footer/>
    </div>
    );
}

export default Work;
