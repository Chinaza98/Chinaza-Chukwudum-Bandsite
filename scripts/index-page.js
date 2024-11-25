const commentsListElement = document.querySelector(".comments__list");

async function produceComments() {
  commentsListElement.innerText = "";
  const response = await axios.get(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=chinaza"
  );
  console.log(response.data);
  const showComments = response.data;
  showComments.sort((a, b) => b.timestamp - a.timestamp);

  for (let i = 0; i < showComments.length; i++) {
    let comment = showComments[i];

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
    let commentDate = new Date(comment.timestamp);

    dateElement.innerText = commentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    itemElement.appendChild(dateElement);
  }
}

produceComments();

let formElement = document.querySelector(".comments__form");
console.log(formElement);

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  // console.log("Event:", event);
  console.log(event.target.commentsName.value);
  console.log(event.target.comment.value);

  let newComment = {
    name: event.target.commentsName.value,
    comment: event.target.comment.value,
  };

  console.log(newComment);

  const response = await axios.post(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=chinaza",
    newComment
  );

  produceComments();

  commentsListElement.prepend(itemElement); //add comment to the top

  formElement.reset();
});
