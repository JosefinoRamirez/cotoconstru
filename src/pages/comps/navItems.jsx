import { Link } from "react-router-dom";

const MenuItems = () => {
    return (
      <>
        <Link to={`/about`} className="mr-6 mt-2">About</Link>
        <Link to={`/ourwork`} className="mr-6 mt-2">Our Work</Link>
        <Link to={`/`} className="mt-2">Contact Us</Link>
      </>
    );
}

export default MenuItems;
