const macedonia = document.getElementById("macedonia");
const europe = document.getElementById("europe");
const neighbors = document.getElementById("neighbors");
const contanier = document.getElementById("contanier");
// There should be one search input to input the name or partial name of a country
// There should be a button for search to initiate
// When the button is clicked, a list of cards shows the possible answers
const specificCountry = async () => {
    const countryCode = document.getElementById("search").value;
    if (!countryCode) return;
    const url = `https://restcountries.com/v3.1/name/${countryCode}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error(`Error fething`, error);
    }
};

// Button 3: Get Macedonia
const macedoniaCountry = async () => {
    const url = `https://restcountries.com/v3.1/name/mk`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error(`Error fething`, error);
    }
};

const displayCountries = (countries) => {
    const countryList = document.getElementById("countryList");
    countryList.innerHTML = "";

    countries.forEach((country) => {
        const card = document.createElement("div");
        card.classList.add("country-card");

        const flag = `<img src="${country.flags.png}" alt="Flag of ${country.name.common}">`;
        const name = `<h3>${country.name.common}</h3>`;
        const population = `<p><strong>Population:</strong> ${country.population.toLocaleString()}</p>`;
        const capital = `<p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"
            }</p>`;
        const wikiLink = `<a href="https://en.wikipedia.org/wiki/${country.name.common}" target="_blank">Open on Wikipedia</a>`;

        card.innerHTML = flag + name + population + capital + wikiLink;

        countryList.appendChild(card);
    });
};

const getAllCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error(`Error fething`, error);
    }
};

const clearButton = () => {
    const clearBtn = document.getElementById("clearBtn");
    const list = document.getElementById("countryList");
    const reset = document.getElementById("search")
    clearBtn.addEventListener("click", () => {
        list.innerHTML = ``;
        reset.value = ``;
    });
};

const getEuropeCountries = async () => {
    const url = `https://restcountries.com/v3.1/region/europe`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error(`Error fething`, error);
    }
};

const getMacedonianNeighbors = async () => {
    const url = `https://restcountries.com/v3.1/alpha?codes=ALB,BGR,GRC,UNK,SRB`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error(`Error fething`, error);
    }
};
