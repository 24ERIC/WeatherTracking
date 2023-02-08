async function populate() {

    const requestURL = 'https://api.weather.gov/gridpoints/OKX/33,36/forecast';
    const request = new Request(requestURL);
  
    const response = await fetch(request);


    const superHeroesText = await response.text();
    // for (let i = 0; i < JSON.parse(superHeroesText).properties.periods.length; i+=2) {
    //     const period = JSON.parse(superHeroesText).properties.periods[i];
    //     const name = period.name;
    //     const temperature = period.temperature;
    //     const windSpeed = period.windSpeed;
    //     const windDirection = period.windDirection;
    //     const shortForecast = period.shortForecast;
    //     const detailedForecast = period.detailedForecast;
    // } 
    const i = 0;
    document.getElementById("content").innerHTML = JSON.stringify(
        JSON.parse(superHeroesText).properties.periods[i].name 
        + " has temperature " 
        + JSON.parse(superHeroesText).properties.periods[i].temperature 
        + " with wind speed of "
        + JSON.parse(superHeroesText).properties.periods[i].windSpeed
        );

  }
  


populate()