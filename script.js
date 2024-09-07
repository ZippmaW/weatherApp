const mainDiv = document.querySelector(".main");

async function getWeather(location) {
  const weather = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UKW374H6M7NGVTQZVUPYTDVGN
  `,
    { mode: `cors` }
  );

  const weatherData = await weather.json();

  console.log(weatherData);
}

getWeather("Koper");
