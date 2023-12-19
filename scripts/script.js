let url = "https://bypass-cors-jjg7.onrender.com";
let res = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    apiUrl: "https://liftie.info/api/resort/sugarbowl",
    methodToApi: "GET",
  }),
})
  .then((result) => result.json())
  .then((response) => createWeatherCard(response.weather))
  .catch((err) => {
    console.log(err);
  });

function createWeatherCard(weather) {
  let date = weather.date;
  let conditions = weather.conditions;
  let text = weather.text;
  let link = weather.notice.href;
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("style", "width: 40%");
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
