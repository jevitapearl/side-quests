const endpoint = "https://api.countrystatecity.in/v1/countries";

const searchBar = document.getElementById("user-input");
const searchButton = document.getElementById("serach");
let countries = [];
let sugessionsList = document.querySelector(".sugessions");

fetch(endpoint, {
    headers: {
      method: "GET",
      "X-CSCAPI-KEY":"N0oxd1EzZnhtNmV3dVVjeE9lYWZCWnR1bklUMXlmR1Bubm5zT0pYeQ=="
    },
    redirect: "follow"
  })
.then(response => response.json())
.then(data => countries.push(...data))


function getCountry(word, countries){
  return countries.filter(place => {
    const regex = new RegExp(word, "gi")
    return place.name.match(regex) || place.capital.match(regex)
  })

}

function displayCountries(){
  const matches = getCountry(this.value,countries)
  const sugessions = matches.map(
    country => {
      return `
        <li>
          <span>${country.name}, ${country.capital}</span>
          <span class="iso">${country.iso2}</span>
        </li>
        `
    }
  ).join(" ")

  sugessionsList.innerHTML= sugessions
  
}

searchBar.addEventListener("keyup", displayCountries);



