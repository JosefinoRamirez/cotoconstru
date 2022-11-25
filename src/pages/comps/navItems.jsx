import { Link } from "react-router-dom";

const MenuItems = (props) => {
    return (
      <>
        <Link to={`/about`} className={"mr-6 mt-2 " + props.className}>About</Link>
        <Link to={`/ourwork`} className={"mr-6 mt-2 " + props.className}>Our Work</Link>
        <Link to={`/contactus`} className={"mt-2 " + props.className}>Contact Us</Link>
      </>
    );
}

export default MenuItems;
