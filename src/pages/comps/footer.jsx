import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="text-white py-24" style={{ backgroundColor: '#000000' }}>
        <div className="container m-auto flex flex-row items-start justify-between border-b-white border-b-2 pb-24">
          <img src="./LogoWhite.png" alt="Logo Coto" className="w-20 mr-14"/>
          <section className="flex flex-col">
            <h6>Site Map</h6>
            <Link to={`/`} className="mr-6 mt-2">About</Link>
            <Link to={`/`} className="mr-6 mt-2">Our Work</Link>
            <Link to={`/`} className="mt-2">Contact Us</Link>
          </section>
          <section className="flex flex-col">
            <h6>Contact Us</h6>
            <p>(+506) 8888-0032</p>
            <p>contact@cotocompany.com</p>
          </section>
          <section className="flex flex-col w-96">
            <h6>Visit Us</h6>
            <p>The Dome Plaza next to ICE / Kolbi and Coopealianza Osa, Uvita, 60504, Costa Rica.</p>
          </section>
        </div>
        <div className="container m-auto flex justify-between pt-8 pb-24">
          <p>Follow Us</p>
          <p><small>© Coto Company, Costa Rica, 2022. All rights reserved.  Powered by Milk Design Studio. </small></p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  