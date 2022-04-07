import logo from '../../assets/images/Logo.svg';
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" height={"100px"} />
    </div>
  );
}

export default Header;