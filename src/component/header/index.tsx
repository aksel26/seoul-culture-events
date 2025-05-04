import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-100 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          서울시 문화행사
        </h1>
        <p className="text-lg md:text-xl mb-8 text-black">
          서울의 다양하고 풍성한 문화행사를 한눈에 만나보세요. 전시회부터 공연,
          축제까지 서울시가 준비한 모든 문화 이벤트를 손쉽게 찾고 즐길 수
          있습니다.
        </p>
      </div>
    </header>
  );
};

export default Header;
