import { useEffect, useState } from "react";

const useCounter = ({ target = 0, speed = 3000 }: { target: number | undefined; speed: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;

    const updateCount = () => {
      setCount((prevCount) => {
        const increment = Math.trunc(target / speed);
        const newCount = prevCount + increment;

        if (newCount < target) {
          setTimeout(updateCount, 25);
          return newCount;
        } else {
          return target;
        }
      });
    };

    updateCount();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [target, speed]);

  return { count };
};

export default useCounter;
