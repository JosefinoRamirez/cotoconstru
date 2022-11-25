import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { Link } from 'react-router-dom';

import Menu from "./comps/menu";
import Footer from './comps/footer';

const App = () => {
  document.title = 'Coto'
  
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
        <Link to={'/project'}>
          <Button label="View Project >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
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
          <p className="text-xl mb-4">We are a construction company</p>
          <h1 className="text-5xl xl:text-6xl text-center mb-4">We develop luxury projects in paradise.</h1>
          <p className="text-center mb-6 max-w-lg">Based in the south of Costa Rica, we are dedicated to delivering world-class projects to the most demanding clients</p>
          <Link to={'/ourwork'}>
            <Button label="Check our work >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#103737' }} />
          </Link>
        </div>
        <Galleria 
          value={images} 
          responsiveOptions={responsiveOptions} 
          numVisible={1} 
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
        <div className="flex flex-col items-center max-w-xl text-white px-8 xl:px-0">
          <p className="text-xl mb-4">You’re in good hands</p>
          <h1 className="text-5xl xl:text-6xl text-center mb-4">Our obsession with details is contagious.</h1>
          <p className="text-center mb-6 max-w-lg">Our number one source for business is repeat clients and referrals from current and previous clients.</p>
          <Link to={'/about'}>
            <Button label="About Us >" className="rounded-lg" style={{ backgroundColor: '#103737', borderColor: '#ffffff' }} />
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
