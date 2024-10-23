import clearDay from '../images/clear-day.png';
import clearNight from '../images/clear-night.png';
import cloudy from '../images/cloudy.png';
import fog from '../images/fog.png';
import wind from '../images/wind.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import snowShowersDay from '../images/snow-showers-day.png';
import snowShowersNight from '../images/snow-showers-night.png';
import thunderRain from '../images/thunder-rain.png';
import thunderShowersDay from '../images/thunder-showers-day.png';
import thunderShowersNight from '../images/thunder-showers-night.png';
import showersDay from '../images/showers-day.png';
import showersNight from '../images/showers-night.png';
import partlyCloudyDay from '../images/partly-cloudy-day.png';
import partlyCloudyNight from '../images/partly-cloudy-night.png';

function icons() {
  return {
    "clear-day": clearDay,
    "clear-night": clearNight,
    cloudy,
    fog,
    wind,
    rain,
    snow,
    "snow-showers-day": snowShowersDay,
    "snow-showers-night": snowShowersNight,
    "thunder-rain": thunderRain,
    "thunder-showers-day": thunderShowersDay,
    "thunder-showers-night": thunderShowersNight,
    "showers-day": showersDay,
    "showers-night": showersNight,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
  };
}

export {icons};