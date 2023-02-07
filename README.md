# Idea

- hisotry data
    - https://github.com/m-a-y-a-n-k/Weather-Prediction-Using-Neural-Networks
- history weather data -> predict future specific day weather (short text)
    - https://github.com/jweyn/DLWP
    - 👍 https://towardsdatascience.com/weather-forecasting-with-machine-learning-using-python-55e90c346647
- (short text) -> generate (weather forecast paragraph)
    - https://deepai.org/machine-learning-model/text-generator
- (short text) + one initial picture -> generate (weather picture)
    - https://www.aiimagegenerator.org/
- (weather forecast paragraph) -> generate (weather forecast voice)
    - https://www.voicebooking.com/en/free-voice-over-generator
- animate carton guy move and speak by js
    - https://codepen.io/elliezen/pen/GWbBrx



- other resource
    - 50 three.js examples (https://devsnap.me/three-js-examples)



# Basic idea

Basic idea is: we use past weather data to predict future weather, and then it gives a brief description of weather, for example: Today weather is sunny, temporature is above 30, and moisture is 10%, wind..."
(short description) send to AI, generator a paragraph, and a picture

(paragraph) send to A! generate voice

we also have JS cartoon animate move around when play (voice)


# Design of website

For the display of website, basic version is : only a JS cartoon with a AI generate picture background, and a date select window.

advance version: multiple button include today weather, tomorrow weather, reset AI picture, reset AI picture

# process

When user choose a date, date -> "today weather good, temperature..." -> AI paragraph -> AI voice -> sheep jump jump when play AI voice.

AI picture can be placed somewhere, or we don't use it

# past weather predict future weather

What I prefer to do is: use this existing past data, to predict tomorrow weather, and we can use both past and tomorrow weather to predict the day after tomorrow

