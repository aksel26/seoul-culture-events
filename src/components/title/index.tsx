import useCounter from "@/hooks/useCounter";
import useScroll from "@/hooks/useScroll";
import { TCulturalEventInfo } from "@/lib/types";
import hatchImg from "../../assets/hatch.png";

const Title = ({ result }: { result: TCulturalEventInfo | undefined }) => {
  const { opacity } = useScroll();

  const { count } = useCounter({ target: result?.list_total_count, speed: 3000 });

  return (
    <div className="py-20 snap-center">
      <img src={hatchImg} alt="hatch" className="transition-opacity duration-200 mb-10" style={{ opacity }} />

      <p style={{ opacity }} className="text-primary-700 text-xl px-6 leading-9">
        서울시에서 준비한
        <br />
        <span className="font-bold text-2xl text-pink-200">{count.toLocaleString()}개</span>의 문화공연을 확인해 보세요!
      </p>
    </div>
  );
};

export default Title;
