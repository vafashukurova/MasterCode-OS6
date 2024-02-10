const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const filtrBtn = document.querySelector(".dropDown");
const drop = document.querySelector(".drop");
const dropDownItem = document.querySelectorAll(".drop-item");
const dataRegionName = document.getElementsByClassName("region-nation");
const dataCountryName = document.getElementsByClassName("country-name");
const regionAbout = document.querySelector(".region-about");

let countryData;

function fetchData() {
  fetch(" https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      countryData = data;
      // console.log(data);
      renderData(data);
    });
}

fetchData();

function renderData(countries) {
  regionAbout.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country);
    let showCard = document.createElement("div");
    showCard.innerHTML = `
    <div class="region-card">
        <div class="card-img">
        <a href="" class="back-link">
        <img src="${country.flags.png}"  class="region-img">
        </a>
        </div>
        <div class="card-content">
        <h3 class="region-name">${country.name.common}</h3>
        <div class="region-items">
            <p class="region-population" id="region-item"><b>Population:</b>${country.name.population}</p>
            <p class="region-nation" id="region-item"><b>Region:</b>${country.region}</p>
            <p class="region-capital" id="region-item"><b>Capital:</b>${country.capital}</p>
        </div>
        </div>
      </div>
    
    `;

    regionAbout.append(showCard);
  });
}

searchInput.addEventListener("click", function () {
  searchIcon.style.display = "none";
  this.style.paddingLeft = "20px";
});

searchInput.addEventListener("input", function (e) {
  let filterData = countryData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );

  renderData(filterData);
  console.log(filterData);
});

filtrBtn.addEventListener("click", function () {
  drop.classList.toggle("show");
});

dropDownItem.forEach((item) => {
  item.addEventListener("click", function () {
    drop.classList.remove("show");
    filtrBtn.innerHTML = `${"Region:" + " " + item.textContent}`;

    if (item.textContent === "All") {
      fetchData();
    } else {
      fetch(`https://restcountries.com/v3.1/region/${item.textContent}`)
      .then(res=>res.json())
      .then((data)=>{
        // console.log(data)
        renderData(data)
      });
    }
  });
});
