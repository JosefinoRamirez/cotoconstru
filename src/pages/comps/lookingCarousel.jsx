import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const itemTemplateSecond = (item) => {
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
        <Link to={'/project'}>
            <Button label="View Project >" className="rounded-xl px-6 text-black" style={{ backgroundColor: '#ffffff', borderColor: '#ffffff' }} />
        </Link>
      </div>
    );
}

const Looking = () => {
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

    return (
        <section className='flex flex-col items-center pt-24 pb-32 text-white px-8 xl:px-0 looking' style={{ backgroundColor: '#103737' }}>
            <h3 className='text-2xl'>Looking for more?</h3>
            <h4 className='text-3xl xl:text-4xl mb-8'>Check other projects</h4>
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
    );
}

export default Looking;
