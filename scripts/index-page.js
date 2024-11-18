console.log("Chinaza's Page");

const commentsArray = [
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "11/02/2023",
  },
  {
    name: "Christina Cabrera",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
  },
  {
    name: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "10/20/2023",
  },
];

/* <ul class="comments__list" id="comments-list">
              
 <!-- <li class="comments__item">
 <img src="/assets/images/Mohan-muruge.jpg" class="comments__logo">
<main class="comments__main">
<p class="comments__header">Victor Pinto</p>
<p class="comments__detail">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
</main>
                
<p class="comments__date">11/02/2023</p>
</li> */

let commentsListElement = document.getElementById("comments-list");
console.log(commentsListElement);

function displayComments() {
  commentsListElement.innerText = "";

  for (let i = 0; i < commentsArray.length; i++) {
    //console.log(commentsArray[i]);
    let comment = commentsArray[i];
    console.log(comment);

    let itemElement = document.createElement("li");
    itemElement.classList.add("comments__item");
    commentsListElement.appendChild(itemElement);

    let imageElement = document.createElement("img");
    imageElement.src = "/assets/images/Mohan-muruge.jpg";
    imageElement.classList.add("comments__logo");
    itemElement.appendChild(imageElement);

    let mainElement = document.createElement("main");
    mainElement.classList.add("comments__main");
    itemElement.appendChild(mainElement);

    let headerElement = document.createElement("p");
    headerElement.classList.add("comments__header");
    headerElement.innerText = comment.name;
    mainElement.appendChild(headerElement);

    let headingElement = document.createElement("p");
    //itemElement.classList.add("comments__header");
    headingElement.innerText = comment.comment;
    mainElement.appendChild(headingElement);

    let dateElement = document.createElement("p");
    dateElement.classList.add("comments__date");

    dateElement.innerText = comment.date;
    itemElement.appendChild(dateElement);
  }
}

// function bandComments(event) {
//   return bandComments;
// }

displayComments();

let formElement = document.querySelector(".comments__form");
console.log(formElement);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Event:", event);
  console.log(event.target.commentsName.value);
  console.log(event.target.comment.value);
  let dateNow = Date.now(); //confirm date format

  let newComment = {
    name: event.target.commentsName.value,
    comment: event.target.comment.value,
    date: dateNow,
  };

  //console.log(newComment);

  commentsArray.push(newComment);

  displayComments();

  formElement.reset();
});
