import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';

const Menu = () => {
  const [visibleRight, setVisibleRight] = useState(false);

    return (
      <header className="py-4 container mx-auto">
        <nav className="flex flex-row items-center justify-between md:justify-start px-8 md:px-0">
          <img src="./Logo.png" alt="Logo Coto" className="w-20 mr-14"/>
          <div className="hidden md:block">
            <Link to={`/`} className="mr-6 mt-2">About</Link>
            <Link to={`/`} className="mr-6 mt-2">Our Work</Link>
            <Link to={`/`} className="mt-2">Contact Us</Link>
          </div>
          <img src='./HamMenu.png' alt='Mobile Menu' className='w-5 block md:hidden' onClick={() => setVisibleRight(true)}/>
        </nav>
        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="flex flex-col">
              <Link to={`/`}>About</Link>
              <Link to={`/`}>Our Work</Link>
              <Link to={`/`}>Contact Us</Link>
            </div>
        </Sidebar>
      </header>
    );
  }
  
  export default Menu;
  