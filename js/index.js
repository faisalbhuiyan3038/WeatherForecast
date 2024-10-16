const baseURL = "http://api.weatherapi.com/v1";
const apiKey = "4f61d06b2e3b45c082f90846241610";

// Function to fetch city suggestions
async function fetchLocationData(city) {

  const url = `${baseURL}/search.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=3`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();


    console.log(data);

  } catch (error) {

    console.error("There was a problem with the fetch operation:", error);
  }
}

document.getElementById("searchBtn").addEventListener("click", function () {

});
fetchWeatherData("London");
