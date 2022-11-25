import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';

import MenuItems from './navItems';



const Menu = () => {
  const [visibleRight, setVisibleRight] = useState(false);

    return (
      <header className="py-4 container mx-auto">
        <nav className="flex flex-row items-center justify-between md:justify-start px-8 md:px-0">
         <Link to={`/`}>
            <img src="./Logo.png" alt="Logo Coto" className="w-20 mr-14"/>
         </Link>
          <div className="hidden md:block">
            <MenuItems/>
          </div>
          <img src='./HamMenu.png' alt='Mobile Menu' className='w-5 block md:hidden' onClick={() => setVisibleRight(true)}/>
        </nav>
        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="flex flex-col">
              <MenuItems/>
            </div>
        </Sidebar>
      </header>
    );
  }
  
  export default Menu;
  