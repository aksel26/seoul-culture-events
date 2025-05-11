import useFetch from "@/hooks/useFetch";
import hatchImg from "../../assets/hatch.png";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const Header = () => {
  const { result } = useFetch();
  return (
    <header className="text-white py-8 md:py-20">
      {/* <img src={hatchImg} alt="hatch" /> */}
      <div className="container mx-auto px-6 ">
        <h1 className="text-3xl md:text-5xl text-primary-900 mb-4">
          서울시 문화행사
        </h1>

        <div className="flex justify-between items-center text-primary-700 mb-3">
          <p className="text-lg">
            총
            <span className="ml-1 font-extrabold text-primary-900 text-2xl">
              {result?.list_total_count}개
            </span>
            의 행사가 있어요.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            className="pl-10 bg-white text-black border-none"
            placeholder="행사명을 입력하세요."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
