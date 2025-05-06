import { IconBrandGithub } from "@tabler/icons-react";
import hatchImg from "../../assets/footer.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="mx-auto flex justify-center container gap-x-3">
        <img src={hatchImg} alt="hatch" className="w-18" />
        <div className="">
          <div className="flex flex-col text-xs gap-y-2">
            <p>© 2025 공공서비스앱</p>
            <p>이 서비스는 공공데이터를 활용하여 제공됩니다.</p>
            <p>함께 발전시켜 나가는 오픈소스 프로젝트입니다</p>
            <div className="flex gap-x-1 items-center">
              <span>
                <IconBrandGithub size={18} />
              </span>
              @aksel26{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
