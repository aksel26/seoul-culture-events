import { useState, useEffect } from "react";

// 위치 정보 타입 정의
interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

// Geolocation 옵션 타입 정의
interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

// useGeolocation 훅의 반환 타입 정의
interface UseGeolocationReturn {
  location: LocationData | null;
  error: string | null;
  loading: boolean;
  getLocation: () => void;
}

/**
 * 사용자의 현재 위치를 가져오는 Custom Hook
 * @param options Geolocation API 옵션
 * @returns 위치 정보, 오류, 로딩 상태, 위치 갱신 함수
 */
export const useGeolocation = (options?: GeolocationOptions): UseGeolocationReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 위치 정보 가져오기 함수
  const getLocation = (): void => {
    setLoading(true);
    setError(null);

    // 브라우저가 Geolocation API를 지원하는지 확인
    if (!navigator.geolocation) {
      setError("이 브라우저는 위치 정보를 지원하지 않습니다.");
      setLoading(false);
      return;
    }

    // 기본 옵션 설정
    const defaultOptions: GeolocationOptions = {
      enableHighAccuracy: false,
      timeout: 15000,
      maximumAge: 0,
      ...options,
    };

    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp,
        });
        setLoading(false);
      },
      (error: GeolocationPositionError) => {
        let errorMessage = "위치 정보를 가져오는데 실패했습니다";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "위치 정보 접근 권한이 거부되었습니다.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "위치 정보를 사용할 수 없습니다.";
            break;
          case error.TIMEOUT:
            errorMessage = "위치 정보 요청이 시간 초과되었습니다.";
            break;
        }

        setError(`${errorMessage} (${error.message})`);
        setLoading(false);
      },
      defaultOptions
    );
  };

  // 컴포넌트 마운트 시 위치 정보 가져오기
  useEffect(() => {
    getLocation();
  }, []);

  return { location, error, loading, getLocation };
};

export default useGeolocation;
