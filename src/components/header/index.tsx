import hatchImg from "../../assets/header.png";
import headerLogo from "../../assets/headerLogo.png";

const Header = () => {
  return (
    <header className="max-w-2xl mx-auto sticky top-0  bg-white shadow-xs transition-opacity duration-300 z-50 ">
      <div className="container mx-auto px-1 relative py-1 flex justify-center">
        <img src={headerLogo} alt="headerLogo" className="h-10" />

        <img
          src={hatchImg}
          alt="header"
          className="h-10 absolute bottom-0 left-5"
        />
      </div>
    </header>
  );
};

export default Header;
