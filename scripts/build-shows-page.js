let showsSectionElement = document.querySelector(".show__section");

async function displayShows() {
  const response = await axios.get(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=chinaza"
  );
  console.log(response.data);
  const showDates = response.data;

  for (let i = 0; i < showDates.length; i++) {
    let show = showDates[i];

    let containerElement = document.createElement("div");
    containerElement.classList.add("show__container");
    showsSectionElement.appendChild(containerElement);

    let labelElement = document.createElement("div");
    labelElement.classList.add("show__label");
    containerElement.appendChild(labelElement);

    let dateElement = document.createElement("label");
    dateElement.classList.add("show__header");

    dateElement.innerText = "Date";

    labelElement.appendChild(dateElement);

    let timeElement = document.createElement("p");
    timeElement.classList.add("show__listing");

    let dateObject = new Date(show.date);
    timeElement.innerText = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    labelElement.appendChild(timeElement);

    let venueElement = document.createElement("label");
    venueElement.classList.add("show__header");
    venueElement.innerText = "Venue";
    labelElement.appendChild(venueElement);

    let spaceElement = document.createElement("p");
    spaceElement.classList.add("show__Listing");
    spaceElement.innerText = show.place;
    labelElement.appendChild(spaceElement);

    let locationElement = document.createElement("label");
    locationElement.classList.add("show__header");
    locationElement.innerText = "Location";
    labelElement.appendChild(locationElement);

    let placeElement = document.createElement("p");
    placeElement.classList.add("show__Listing");
    placeElement.innerText = show.location;
    labelElement.appendChild(placeElement);

    let ctaElement = document.createElement("button");
    ctaElement.classList.add("show__cta");
    ctaElement.textContent = "Buy Tickets";
    labelElement.appendChild(ctaElement);
  }
}

displayShows();
