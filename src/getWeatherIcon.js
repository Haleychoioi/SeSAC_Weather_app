const getWeatherIcon = (icon) => {
  switch (icon) {
    case "Clear":
      return "clear-sky.svg";

    case "Clouds":
      return "few-clouds.svg";

    case "Atmosphere":
      return "fmist.svg";

    case "Rain":
      return "rain.svg";

    case "Snow":
      return "snow.svg";

    case "Thunderstorm":
      return "thunderstorm.svg";

    default:
  }
};

export default getWeatherIcon;
