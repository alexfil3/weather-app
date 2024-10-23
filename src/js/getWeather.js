import { Notify } from 'notiflix/build/notiflix-notify-aio';
const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const KEY = 'VVENCUNGY5NJ9DANEV3YTG99S';

async function getWeather(city) {
    if (!city) {
        city = 'Paris';
    }

    try {
        const resp = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=hours%2Cdays%2Ccurrent&key=VVENCUNGY5NJ9DANEV3YTG99S&contentType=json`);

        if (!resp.ok) {
            Notify.failure('City not found. Please try again');
            console.log('Something went wrong, we couldn\'t find the city');
        }

        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export default getWeather;
