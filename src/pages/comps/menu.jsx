import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';

import MenuItems from './navItems';

const Menu = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  return (
    <header className="py-4 container mx-auto">
      <nav className="flex flex-row items-center justify-between xl:justify-start px-8 xl:px-0">
        <Link to={`/`}>
          <img src="./Logo.png" alt="Logo Coto" className="w-20 mr-14"/>
        </Link>
        <div className="hidden xl:block">
          <MenuItems/>
        </div>
        <img src='./HamMenu.png' alt='Mobile Menu' className='w-5 block xl:hidden' onClick={() => setVisibleRight(true)}/>
      </nav>
      <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
          <div className="flex flex-col pt-16 text-5xl text-black">
            <img src="./LogoIcon.png" alt="Logo Coto" className="w-14 mb-9"/>
            <Link to={'/'} className='mb-8'><h2>Home</h2></Link>
            <div className='flex flex-col mb-24'>
              <MenuItems
                className='mb-8'
              />
            </div>
          </div>
          <div className="container m-auto flex flex-col">
              <section className="flex w-32 justify-between mb-8">
                <p>Follow Us</p>
                <a href="/"><li className="pi pi-facebook"></li></a>
                <a href="/"><li className="pi pi-linkedin"></li></a>
              </section>
              <p className='text-gray-400'><small>© Coto Company, Costa Rica, 2022. All rights reserved.  Powered by Milk Design Studio. </small></p>
            </div>
      </Sidebar>
    </header>
  );
}
  
export default Menu;
  