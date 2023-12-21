let url_string = window.location.href;
let url1 = new URL(url_string);
let key = url1.searchParams.get("key");
let loc = url1.searchParams.get("loc");

let url = "https://bypass-cors-jjg7.onrender.com";
let res = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    apiUrl: "https://liftie.info/api/resort/" + key,
    methodToApi: "GET",
  }),
})
  .then((result) => result.json())
  .then((response) => createCards(response))
  .catch((err) => {
    console.log(err);
  });

function createCards(response) {
  createWeatherCard(response);
  createWebCards(response);
  createLiftCards(response);
  plotResorts(results);
}

function createWeatherCard({ weather }) {
  let date = weather.date;
  let conditions = weather.conditions;
  let text = weather.text;
  let link = weather.notice.href;
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("style", "width: 100");
  card.innerHTML = `
at-homePageStyle
    <div class="card-body" style="display: flex; flex-direction: column; align-items: center;">
      <h2 class="card-title">Weather for ${loc}</h2>
      <h5>${date}</h5>
      <h5 class="card-text">Summary: ${conditions}</h5>
      <p class="card-text">${text}</p>
      <a href="${link}" class="btn btn-primary">Learn more</a>
    </div>
    `;
  weather_card_container.appendChild(card);
}

function createWebCards({ webcams }) {
  webcams.forEach(({ name, image, notice }) => {
    const card = document.createElement("div");
    card.classList.add("carousel-item");
    card.innerHTML = `
        <img src=${image} class="d-block w-100" alt=${name}>
        <div class="carousel-caption d-none d-md-block">
          <h5>${name}</h5>
          <p>${notice}</p>
        </div>
        `;
    webcam_carousel.appendChild(card);
  });
}

function createLiftCards({ lifts }) {
  for (const [key, value] of Object.entries(lifts.status)) {
    let status = `${key}: ${value}`;
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem");
    card.innerHTML = `
        <div class="card-body">
          <p class="card-text">${status}</p>
        </div>
        `;
    lifts_card_container.appendChild(card);
  }
}

function plotResorts({ ll }) {
  ll.forEach(() => {
    const point = document.createElement("gmp-advanced-marker");
  });
}
