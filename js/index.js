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
    const suggestions = document.getElementById("suggestions");
    data.forEach(item => {
      const option = document.createElement("option");
      option.value = `${item.name}, ${item.country}`;
      suggestions.appendChild(option);
    });

  } catch (error) {

    console.error("There was a problem with the fetch operation:", error);
  }
}

document.getElementById("searchBtn").addEventListener("click", function () {
  const searchText = document.getElementById("searchInput").value;
  if (searchText == "") {
    alert("You need to type something to find cities!!");
  }
  fetchLocationData(searchText);
});

document.getElementById("gpsLocation").addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
  });
});

