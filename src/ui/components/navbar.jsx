import navbarStyle from "../../assets/style/components/navbar.module.css";
import Left from "./section/navbar/left.jsx";
import Right from "./section/navbar/right.jsx";

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbar}>
      <div className='Container'>
        <div className={navbarStyle.content}>
          <Left />
          <Right />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
