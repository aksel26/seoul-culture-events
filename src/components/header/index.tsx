import React from "react";
import hatchImg from "../../assets/hatch.png";

const Header = () => {
  return (
    <header className=" text-white py-8 md:py-20">
      <img src={hatchImg} alt="hatch" />
      <div className="container mx-auto px-8 ">
        <h1 className="text-3xl md:text-5xl font-extrabold  text-primary-900 my-8">
          서울시 문화행사
        </h1>
        <p className="text-black text-sm ">
          서울의 다양하고 풍성한 문화행사를 한눈에 만나보세요.
        </p>
        <p className="mt-3 text-black text-sm">
          전시회부터 공연, 축제까지 서울시가 준비한 모든 문화 이벤트를 손쉽게
          찾고 즐길 수 있습니다.
        </p>
      </div>
    </header>
  );
};

export default Header;
