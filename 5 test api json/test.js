(async function populate() {
    const requestURL = 'https://api.weather.gov/gridpoints/OKX/33,36/forecast';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroesText = await response.text();
    const i = 0;
    document.getElementById("content").innerHTML = JSON.stringify(JSON.parse(superHeroesText).properties.periods[i].detailedForecast);
    })()