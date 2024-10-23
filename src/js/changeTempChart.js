function changeTempChart() {
    const text = document.querySelector('.chart');
    const mainTemp = document.querySelector('.temperature');
    const hourlyTemps = Array.from(document.querySelectorAll('.hourly-temperature'));
    const dailyTemps = Array.from(document.querySelectorAll('.daily-temp'));

    if (text.textContent === '℃') {
        text.textContent = '℉';
        const [temp, char] = mainTemp.textContent.split(' ')
        const newTemp = Number(temp) * 9 / 5 + 32;
        const newChar = ' ℉';
        mainTemp.textContent = Math.round(newTemp) + newChar;

        hourlyTemps.forEach(temp => {
            const onlyTemp = temp.textContent.slice(0, temp.textContent.length - 1)
            const newTemp = Number(onlyTemp) * 9 / 5 + 32;
            temp.textContent = Math.round(newTemp) + '\u00B0';
        })

        dailyTemps.forEach(temp => {
            const onlyTemp = temp.textContent.slice(0, temp.textContent.length - 1)
            const newTemp = Number(onlyTemp) * 9 / 5 + 32;
            temp.textContent = Math.round(newTemp) + '\u00B0';
        })
    } else {
        text.textContent = '℃';
        const [temp, char] = mainTemp.textContent.split(' ')
        const newTemp = (Number(temp) - 32) * 5 / 9;
        const newChar = ' ℃';
        mainTemp.textContent = Math.round(newTemp) + newChar;

        hourlyTemps.forEach(temp => {
            const onlyTemp = temp.textContent.slice(0, temp.textContent.length - 1)
            const newTemp = (Number(onlyTemp) - 32) * 5 / 9;
            temp.textContent = Math.round(newTemp) + '\u00B0';
        })

        dailyTemps.forEach(temp => {
            const onlyTemp = temp.textContent.slice(0, temp.textContent.length - 1)
            const newTemp = (Number(onlyTemp) - 32) * 5 / 9;
            temp.textContent = Math.round(newTemp) + '\u00B0';
        })
    }
}

export default changeTempChart;