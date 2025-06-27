import OpenWeather from "openweathermap-ts";
const openWeather = new OpenWeather({
  apiKey: "92339f08b2db014e7f854333c2fe941a",
});
openWeather.setUnits("metric");
export default openWeather;
