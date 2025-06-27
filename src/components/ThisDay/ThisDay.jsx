import React, { useEffect, useState } from "react";
import { ThisDayWrapper, Top, Bottom } from "./styles";
import CurrentTime from "./CurrentTime";
import useWeather from "../../utils/useWeather.js";

const ThisDay = () => {
  // isLoading이 데이터를 받았는지 감지할 수 있는듯??, 3번째 요소는 Error 처리
  const { data, isLoading } = useWeather("seoul");
  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  // 물음표가 매우매우 중요함
  const weatherIcon = data?.weather[0].main;
  let imageSrc = "./images/weatherIcons/clear-sky.svg";

  if (weatherIcon === "Clear") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";
  } else if (weatherIcon === "Clouds") {
    imageSrc = "./images/weatherIcons/few-clouds.svg";
  } else if (weatherIcon === "Atmosphere") {
    imageSrc = "./images/weatherIcons/mist-svg";
  } else if (weatherIcon === "Rain") {
    imageSrc = "./images/weatherIcons/rain.svg";
  } else if (weatherIcon === "snow") {
    imageSrc = "./images/weatherIcons/snow.svg";
  } else if (weatherIcon === "Thunderstorm") {
    imageSrc = "./images/weatherIcons/thunderstorm.svg";
  }

  return isLoading ? (
    "Loading. . ."
  ) : (
    <>
      <ThisDayWrapper>
        <Top>
          <div>
            <h2>{temperature}°</h2>
            <h3>Now</h3>
          </div>
          <img src={imageSrc} alt="" />
        </Top>
        <Bottom>
          <CurrentTime />
          <div>
            {cityName} - {data?.sys.country}
          </div>
        </Bottom>
      </ThisDayWrapper>
    </>
  );
};
export default ThisDay;
