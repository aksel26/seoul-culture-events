import { useEffect, useState } from "react";
import { TCulturalEventInfo } from "../lib/types";
import apiClient from "../services/api";
import useCategoryStore from "../store/useStore";
import { extractAndJoinValues } from "@/utils/fetchForm";

const useFetch = () => {
  const KEY = import.meta.env.VITE_OPEN_API_KEY;

  const { params } = useCategoryStore();

  const [result, setResult] = useState<TCulturalEventInfo>();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const paramsResult = extractAndJoinValues(params);
      setIsLoading(true);
      const fetchResult = await apiClient.get(`/${KEY}/json/culturalEventInfo/1/10/${paramsResult}`);

      setIsLoading(false);

      setResult(fetchResult.data.culturalEventInfo);
    };

    fetchUsers();
  }, [params]);

  return { isLoading, result };
};

export default useFetch;
