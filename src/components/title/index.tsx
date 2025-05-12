import { useEffect, useState } from "react";
import hatchImg from "../../assets/hatch.png";

const Title = () => {
  // const { result } = useFetch();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 투명도 계산 (0px에서는 완전 불투명, 200px에서는 완전 투명)
      const maxScroll = 150;
      const scrollPosition = window.scrollY;
      console.log("🚀 ~ handleScroll ~ scrollPosition:", scrollPosition);

      // 0에서 200px 사이에서 1에서 0으로 투명도 계산
      const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0);
      setOpacity(newOpacity);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sticky top-0 py-24">
      <img src={hatchImg} alt="hatch" className="transition-opacity duration-200" style={{ opacity }} />
    </div>
  );
};

export default Title;
