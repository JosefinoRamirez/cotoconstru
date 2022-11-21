import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="" style={{ backgroundColor: '#000000' }}>
          <nav className="flex flex-row items-center">
          <img src="./Logo.png" alt="Logo Coto" className="w-20 mr-14"/>
          <Link to={`/`} className="mr-6 mt-2">About</Link>
          <Link to={`/`} className="mr-6 mt-2">Our Work</Link>
          <Link to={`/`} className="mt-2">Contact Us</Link>
        </nav>
      </div>
    );
  }
  
  export default Footer;
  