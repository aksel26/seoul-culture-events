import hatchImg from "../../assets/header.png";

const Header = () => {
  return (
    <header className="sticky top-0  bg-white shadow-xs transition-opacity duration-300 z-50 ">
      <div className="container mx-auto px-4 relative py-3">
        <div className="text-center text-sm font-bold text-primary">서울시 문화공연 검색 서비스</div>
        <img src={hatchImg} alt="header" className="h-10 absolute bottom-0 left-5" />
      </div>
    </header>
  );
};

export default Header;
