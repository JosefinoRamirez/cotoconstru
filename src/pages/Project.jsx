import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

import Menu from "./comps/menu";
import BreadCrumbComp from "./comps/breadcrumb";
import Footer from './comps/footer';

const ThumbProject = () => {
    return (
        <div className='w-full md:w-2/6 max-w-sm'>
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
            <h2 className="text-2xl md:text-3xl text-center mb-2">{item.caseTitle}</h2>
            <p className="mb-6 hidden md:block">{item.smallDesc}</p>
          </div>
        );
    }

    const itemTemplateSecond = (item) => {
        return (
          <div className="flex flex-col items-center">
            <img 
              src={item.imageSrc} 
              alt={item.alt} 
              style={{ width: '100%', display: 'block' }} 
              className="mb-8"
            />
            <h2 className="text-2xl md:text-3xl text-center mb-2">{item.caseTitle}</h2>
            <p className="mb-6 hidden md:block">{item.smallDesc}</p>
            <Button label="About Us >" className="rounded-lg text-black" style={{ backgroundColor: '#ffffff', borderColor: '#ffffff' }} />
          </div>
        );
    }

    return (
        <div>
            <Menu/>
            <section className="flex flex-col items-center pt-16 md:pt-24 mb-16">
                <BreadCrumbComp/>
                <p className="text-center text-xl mb-6">The ultimate in luxury, privacy and romance.</p>
                <h1 className="text-5xl md:text-6xl text-center mb-6">The Easter House.</h1>
                <div className="flex justify-between w-full md:w-1/4 mb-16 px-8 md:px-0">
                    <p className="flex flex-col w-2/4 md:w-2/6 border-r-2 border-r-gray-300 md:border-l-0 text-center md:text-left mb-4 md:mb-0">Construction <span>June, 2019</span></p>
                    <p className="flex flex-col w-2/4 md:w-2/6 md:px-6 md:border-x-2 md:border-x-gray-300 text-center md:text-left">Location <span>Puntarenas</span></p>
                    <p className="flex flex-col w-full md:w-2/6 text-center md:text-left border-t-2 border-t-gray-300 md:border-t-0 pt-4 md:pt-0">Service <span>Keys In hand</span></p>
                </div>
                <img src="./Case1.png" alt="Project" className="w-full max-h-96 object-cover"/>
            </section>
            <section className="container max-w-5xl mx-auto mb-16 px-8 md:px-0">
                <h2 className="text-3xl md:text-5xl mb-4">About the house</h2>
                <p className="mb-8 max-w-3xl">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt id est laborum dolor amet sit.</p>
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
            <section className='flex flex-col items-center bg-gray-50 pt-24 pb-32 px-8 md:px-0'>
                <h3 className='text-2xl'>Get closer</h3>
                <h4 className='text-4xl mb-8 text-center'>Beauty is in the details</h4>
                <div className='flex flex-col md:flex-row justify-between w-full max-w-7xl'>
                    <ThumbProject/>
                    <ThumbProject/>
                    <ThumbProject/>
                </div>
            </section>
            <section className='flex flex-col items-center pt-24 pb-32 text-white px-8 md:px-0' style={{ backgroundColor: '#103737' }}>
                <h3 className='text-2xl'>Looking for more?</h3>
                <h4 className='text-3xl md:text-4xl mb-8'>Check other projects</h4>
                <div className='container mx-auto max-w-7xl'>
                    <Galleria 
                        value={images} 
                        responsiveOptions={responsiveOptions} 
                        numVisible={5} 
                        circular 
                        showItemNavigators 
                        showThumbnails={false} 
                        showItemNavigatorsOnHover 
                        showIndicators 
                        item={itemTemplateSecond} 
                    />
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Project;