//

const commentSection = document.querySelector("comments__form");
const commentsListElement = document.querySelector("comments__list");

const response = await axios.get(
  "https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=chinaza"
);
console.log(response.data);
