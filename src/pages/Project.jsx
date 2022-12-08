import { useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

import Menu from "./comps/menu";
import BreadCrumbComp from "./comps/breadcrumb";
import Footer from './comps/footer';
import Looking from './comps/lookingCarousel';

const ThumbProject = () => {
    return (
        <div className='w-full xl:w-2/6 max-w-sm'>
            <img src="./thumbProject.png" alt="Project" className='max-full'/>
            <div className='p-6 box-border'>
                <p className='text-xl'>Natural Sunlight</p>
                <p className='max-w-fit'>Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
            </div>
        </div>
    );
}

const Project = () => {
    document.title = 'Our Work | Project'

    const images = [
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
        { 'imageSrc': './Case1.png', 'alt': 'Case 1', 'caseTitle': 'Easter House Beach House', 'smallDesc': 'Small house description' },
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
            <h2 className="text-2xl xl:text-3xl text-center mb-2">{item.caseTitle}</h2>
            <p className="mb-6 hidden xl:block">{item.smallDesc}</p>
          </div>
        );
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div>
            <Menu/>
            <section className="flex flex-col items-center pt-16 xl:pt-24 mb-16">
                <BreadCrumbComp/>
                <p className="text-center text-xl mb-6">The ultimate in luxury, privacy and romance.</p>
                <h1 className="text-5xl xl:text-6xl text-center mb-6">The Easter House.</h1>
                <div className="flex flex-row flex-wrap xl:flex-nowrap justify-between w-full xl:w-1/3 mb-16 px-8 xl:px-0">
                    <p className="flex flex-col w-2/4 xl:w-2/6 border-r-2 border-r-gray-300 xl:border-r-0 text-center mb-4 xl:mb-0">Construction <span>June, 2019</span></p>
                    <p className="flex flex-col w-2/4 xl:w-2/6 xl:px-6 xl:border-x-2 xl:border-x-gray-300 text-center">Location <span>Puntarenas</span></p>
                    <p className="flex flex-col w-full xl:w-2/6 text-center border-t-2 border-t-gray-300 xl:border-t-0 pt-4 xl:pt-0">Service <span>Keys In hand</span></p>
                </div>
                <img src="./Case1.png" alt="Project" className="w-full max-h-96 object-cover"/>
            </section>
            <section className="container max-w-5xl mx-auto mb-16 px-8 xl:px-0 text-center">
                <h2 className="text-3xl xl:text-5xl mb-4">About the house</h2>
                <p className="mb-8 max-w-3xl mx-auto">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt id est laborum dolor amet sit.</p>
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
            <section className='flex flex-col items-center bg-gray-50 pt-24 pb-32 px-8 xl:px-0'>
                <h3 className='text-2xl'>Get closer</h3>
                <h4 className='text-4xl mb-8 text-center'>Beauty is in the details</h4>
                <div className='flex flex-col xl:flex-row justify-between w-full max-w-7xl'>
                    <ThumbProject/>
                    <ThumbProject/>
                    <ThumbProject/>
                </div>
            </section>
            <Looking/>
            <Footer/>
        </div>
    );
}

export default Project;
