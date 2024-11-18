console.log("Shows Page");

const showsArray = [
  {
    time: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco",
  },
  {
    time: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    time: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    time: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    time: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    time: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

{
  /* <div class="show__label">
            <label for="date" class="show__header">Date</label>
            <p class="show__listing"
              >Mon Sept 09 2024</p
            >
          </div>

          <div class="show__label">
            <label for="date" class="show__header">Venue</label>
            <p class="show__listing" 
              >Ronald Lane</p
            >
          </div>

          <div class="show__label">
            <label for="date" class="show__header">Location</label>
            <p class="show__listing" 
              >San Francisco</label
            >
          </div>
          <button class="show__cta">Buy Tickets</button>
        </div> */
}

let showsSectionElement = document.querySelector(".show__section");

console.log(showsSectionElement);

function displayshows() {
  showsSectionElement.innerText = "";
}

for (let i = 0; i < showsArray.length; i++) {
  let show = showsArray[i];
  console.log(show); //show is only defined here

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
  timeElement.innerText = show.time;
  labelElement.appendChild(timeElement);
}