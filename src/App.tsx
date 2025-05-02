import { useEffect } from "react";
import "./App.css";
import apiClient from "./services/api";

function App() {
  const KEY = import.meta.env.VITE_OPEN_API_KEY;

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await apiClient.get(
        `http://openapi.seoul.go.kr:8088/${KEY}/json/culturalEventInfo/1/5`
      );

      console.log("result: ", result);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="font-bold bg-red-300">list</div>
    </>
  );
}

export default App;
