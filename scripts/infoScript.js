let url = "https://bypass-cors-jjg7.onrender.com";
let res = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    apiUrl: "https://liftie.info/api/resort/timberline-lodge",
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
    <div class="card-body">
      <h5 class="card-title">Weather for ${date}</h5>
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
    card.classList.add("card");
    card.setAttribute(
      "style",
      "display: flex; flex-wrap: wrap; justify-content: space-evenly;"
    );

    card.innerHTML = `
        <img src=${image} class="card-img-top" alt="default">
        <div class="card-body">
        <p class="card-text">${name}</p>
        <p>
        ${notice}
        </p>
        </div>
        `;
    webcams_card_container.appendChild(card);
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

function plotResorts({ll}) {
  ll.forEach(() => {
    const point = document.createElement("gmp-advanced-marker");
    
  });
}