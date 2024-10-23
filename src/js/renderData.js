import getWeather from "./getWeather";
import { format } from 'date-fns';
import { icons } from "./weatherIcons";

function timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

async function renderData() {
    const text = document.querySelector('.chart');
    const switchInput = document.querySelector('#switch');
    const cityToGetData = document.querySelector('.search-input').value;
    const img = document.querySelector('.weather-img');
    const city = document.querySelector('.city');
    const country = document.querySelector('.country');
    const temperature = document.querySelector('.temperature');
    const humidity = document.querySelector('.humidity');
    const speed = document.querySelector('.speed');
    const hourlyWeather = document.querySelector('#hourlyWeather');
    const forecastList = document.querySelector('.forecast-list');

    const data = await getWeather(cityToGetData);

    text.textContent = '℃';
    switchInput.checked = false;


    if (data) {
        hourlyWeather.textContent = '';
        forecastList.textContent = '';
        const countryName = data.resolvedAddress.split(' ');
        img.src = icons()[data.currentConditions.icon];
        city.textContent = data.address;
        country.textContent = countryName[countryName.length - 1];
        temperature.textContent = `${Math.round(data.currentConditions.temp)} ℃`;
        humidity.textContent = data.currentConditions.humidity;
        speed.textContent = data.currentConditions.windspeed + ' km/h';

        const hourlyArr = data.days[0].hours;
        hourlyArr.forEach((hour) => {
            const li = document.createElement('li');
            const time = document.createElement('p');
            const img = document.createElement('img');
            const temp = document.createElement('p');
            temp.classList.add('hourly-temperature')
            
            const totalSeconds = timeToSeconds(hour.datetime);
            const hours = Math.floor(totalSeconds / 3600);
            time.textContent = hours < 10 ? `0${hours}:00` : `${hours}:00`;
            img.src = icons()[hour.icon];
            img.classList.add('hourly-image');
            temp.textContent = Math.round(hour.temp) + "\u00B0";
            li.classList.add('hourly-item');

            li.appendChild(time);
            li.appendChild(img);
            li.appendChild(temp);
            hourlyWeather.appendChild(li);
        })

        data.days.forEach((day) => {
            const li = document.createElement('li');
            const divImgAndTemp = document.createElement('div');
            divImgAndTemp.classList.add('item-wrapper')
            const img = document.createElement('img');
            const temp = document.createElement('p');
            temp.classList.add('daily-temp')
            divImgAndTemp.appendChild(img);
            divImgAndTemp.appendChild(temp);
            const conditions = document.createElement('p');
            const date = document.createElement('p');
            conditions.textContent = day.conditions;
            img.src = icons()[day.icon];
            img.classList.add('hourly-image');
            temp.textContent = Math.round(day.temp) + "\u00B0";
            li.classList.add('forecast-item');
            date.textContent = format(new Date(day.datetime), 'c MMM, eee')

            li.appendChild(divImgAndTemp);
            li.appendChild(conditions);
            li.appendChild(date);
            forecastList.appendChild(li);
        })
    }
}

export default renderData;