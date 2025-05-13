import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import hatchImg from "../../assets/mobile404.png";

const NotFound = () => {
  const router = useNavigate();
  const goHome = () => router("/");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative">
        <img src={hatchImg} alt="mobile" className="w-68 md:w-78 mx-auto" />
        <div className="absolute top-68 md:top-78 px-4 flex flex-col gap-y-3 text-pink-300 text-sm md:text-base">
          <p>잘못된 페이지에 접속하셨습니다.</p>
          <p>찾으시는 공연 정보가 없거나 이동된 것 같네요.</p>
          <p>홈으로 돌아가 정확한 정보를 확인해보세요.</p>
        </div>
        <Button onClick={goHome} className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] mx-auto  bg-pink-50 text-pink-300">
          홈으로
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
