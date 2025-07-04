import openWeather from "./openWeather";
import { useQuery } from "@tanstack/react-query";
const getWeather = (city = "Seoul") => {
  const weather = openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric",
  });
  return weather;
};
const useWeather = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    //캐시 및 refetch 기준 키
    queryKey: ["weather", city],
    // 데이터를 가져올 비동기 함수
    queryFn: () => getWeather(city),
    // 데이터를 상태로 유지할 시간(ms)
    // staleTime: 1000 * 60 * 5
  });
  return {
    ...rest,
    data,
  };
};
export default useWeather;

//useQuery는 기본적으로 비동기함수이므로 굳이 async await 안 써줘도 됨
