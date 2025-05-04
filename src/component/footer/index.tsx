import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center text-xs gap-y-2">
          <p>© 2025 공공서비스앱</p>
          <p>이 서비스는 공공데이터를 활용하여 제공됩니다.</p>
          <p>함께 발전시켜 나가는 오픈소스 프로젝트입니다</p>
          <p>GitHub: @your-username </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
