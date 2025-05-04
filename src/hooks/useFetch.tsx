import { useEffect, useState } from "react";
import { TCulturalEventInfo } from "../lib/types";
import apiClient from "../services/api";

const useFetch = () => {
  const KEY = import.meta.env.VITE_OPEN_API_KEY;

  const [result, setResult] = useState<TCulturalEventInfo>();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const fetchResult = await apiClient.get(
        `http://openapi.seoul.go.kr:8088/${KEY}/json/culturalEventInfo/1/10`
      );

      setIsLoading(false);

      setResult(fetchResult.data.culturalEventInfo);
    };

    fetchUsers();
  }, []);

  return { isLoading, result };
};

export default useFetch;
