deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    const requestURL = 'https://api.weather.gov/gridpoints/OKX/33,36/forecast';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroesText = await response.text();
    const i = 0;
    text = JSON.stringify(JSON.parse(superHeroesText).properties.periods[i].detailedForecast).toString();

    
    document.getElementById("generatedText").innerHTML += text;
    var resp = await deepai.callStandardApi("text-generator", {
            text: text,
    });
    await console.log(resp);
    document.getElementById("generatedText").innerHTML += resp.output;


    const paraOutput = `A slight chance of rain after 5pm. Cloudy. High near 53, with temperatures falling to around 51 in the afternoon. Southeast wind 6 to 12 mph. Chance of precipitation is 20%. Gorain Island: Hail over 26 mph, good byes. Chance of precipitation is 20%. Darling Island: Hail over 26 mph, good byes. Chance of precipitation is 20%. Vista: Hail over 18, good byes. Average wind is 32 to 43 mph. No precipitation. Strong wind 30 mph to 30 mph for 20 minutes in the afternoon. High near 46 mph for 10 minutes. Very low near 32 mph to 31 mph for 10 minutes in the morning. Cote d'Ivoire: Hail over 13, good byes. Chance of precipitation is 30%. Very low in the morning winds 6 to 8 mph. Low in the afternoon winds 7 to 9 mph. Medium in the afternoon winds 14 to 19 mph for 10 minutes in the morning. Spartan Gulf Islands: Hail over 15 mph, well-known for its hard ice and snowfall, but this is forecast to fall to 20%, with temperatures falling to about 50 in the evening. Chance of precipitation is 15%. Bahrain: Hail over 16 mph, best byes in the morning. Chance of precipitation is 16%. Argentina: Hail over 12 mph, good byes in the evening. Chance of precipitation is 16%.`;
    
})()

