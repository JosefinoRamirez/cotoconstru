import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="text-white py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container m-auto flex flex-col md:flex-row items-start justify-between border-b-black md:border-b-white border-b-2 px-8 md:px-0  pb-8 md:pb-24">
          <img src="./LogoWhite.png" alt="Logo Coto" className="w-20 mr-14 mb-7 md:mb-0"/>
          <section className="flex flex-col mb-7 md:mb-0">
            <h6>Site Map</h6>
            <Link to={`/`} className="mr-6 mt-2">Homepage</Link>
            <Link to={`/`} className="mr-6 mt-2">About</Link>
            <Link to={`/`} className="mt-2">Our Projects</Link>
          </section>
          <section className="flex flex-col mb-16 md:mb-0">
            <h6>Contact Us</h6>
            <p><i className="pi pi-phone"></i> (+506) 8888-0032</p>
            <p><i className="pi pi-envelope"></i> contact@cotocompany.com</p>
          </section>
          <section className="flex flex-col md:w-96 border-t-white border-t-2 pt-8 md:pt-0">
            <h6>Visit Us</h6>
            <p>The Dome Plaza next to ICE / Kolbi and Coopealianza Osa, Uvita, 60504, Costa Rica.</p>
          </section>
        </div>
        <div className="container m-auto flex flex-col md:flex-row justify-between px-8 md:px-0 pt-8  pb-8 md:pb-24">
          <section className="flex w-32 justify-between mb-8">
            <p>Follow Us</p>
            <a href="/"><li className="pi pi-facebook"></li></a>
            <a href="/"><li className="pi pi-linkedin"></li></a>
          </section>
          <p><small>© Coto Company, Costa Rica, 2022. All rights reserved.  Powered by Milk Design Studio. </small></p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  