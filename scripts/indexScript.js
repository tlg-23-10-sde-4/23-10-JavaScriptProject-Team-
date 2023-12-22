let resorts = [
  [
    "Breckinridge, CO",
    "breck",
    "-106.066238, 39.480724",
    "https://images.unsplash.com/photo-1579007645392-b6bf15178ee7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Copper Mountain, CO",
    "copper",
    "-106.155998, 39.501125",
    "https://images.unsplash.com/photo-1562478263-7fbbe386dccc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Crystal Mountain, WA",
    "crystal-mountain",
    "-121.5802, 46.9459",
    "https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Deer Valley, UT",
    "deer-valley",
    "-111.489555, 40.620499",
    "https://images.unsplash.com/photo-1648580423090-64558c342067?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Jackson Hole, WY",
    "jackson-hole",
    "-110.827438, 43.588318",
    "https://images.unsplash.com/photo-1547146772-9d72db7bc4d7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Loveland, CO",
    "loveland",
    "-105.89595, 39.679993",
    "https://images.unsplash.com/photo-1653681188718-9bef87f79e7d?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Palisades Tahoe, CA",
    "palisades",
    "-120.233299, 39.196045",
    "https://images.unsplash.com/photo-1547011742-ec774fa6e5e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Snowbird, UT",
    "snowbird",
    "-111.657082, 40.581074",
    "https://images.unsplash.com/photo-1641353665537-7d2474057830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Solitude, UT",
    "solitude",
    "-111.600708, 40.625648",
    "https://images.unsplash.com/photo-1488165020433-de1668909179?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Steamboat, CO",
    "steamboat",
    "-106.805733, 40.458214",
    "https://images.unsplash.com/photo-1590153300797-e6292b148326?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Stevens Pass, WA",
    "stevens",
    "-121.421242, 47.76046",
    "https://images.unsplash.com/photo-1517572856894-3c19f3bffa0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Timberline Lodge, OR",
    "timberline-lodge",
    "-121.71, 45.33",
    "https://images.unsplash.com/photo-1582394190498-692f5a6a850e?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Vail, CO",
    "vail",
    "-106.356155, 39.605026",
    "https://images.unsplash.com/photo-1596473537038-44039a055ded?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Winter Park, CO",
    "winter-park",
    "-105.764267, 39.891563",
    "https://images.unsplash.com/photo-1609952769887-7905b6b02c0f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  [
    "Whistler Blackcomb, Canada",
    "whistler-blackcomb",
    " -122.922073, 50.10693",
    "https://images.unsplash.com/photo-1547016058-bc22b729f0bd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
];

function createResortCards(resorts) {
  resorts.forEach((elt, i) => {
    let location = elt[0];
    let urlTail = elt[1];
    let imgUrl = elt[3];
    let num = i + 1;
    localStorage.setItem(num, urlTail);
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem; margin: 40px;");

    card.innerHTML = `
      <img class="" src="${imgUrl}" alt="${location}" width="275" height="400">
      <div class="card-body" >
          <h5 class="card-title">${location}</h5>
          <a href="info.html?key=${urlTail}&loc=${location}" class="btn btn-primary">Details</a>
      </div>
    </div>
      `;
    resort_cards_container.appendChild(card);
  });
}
createResortCards(resorts);
