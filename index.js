const birdImageElement = document.querySelector(".js-bird-image");
const birdDescriptionElement = document.querySelector(".js-bird-description");
const birdDetailsArray = [
  ["http://www.outgrabe.net/bird00.jpg", "Pardalote by fir0002 (CC-by-NC)"],
  [
    "http://www.outgrabe.net/bird01.jpg",
    "Purple swamp hen by Toby Hudson (CC-by-SA)",
  ],
  [
    "http://www.outgrabe.net/bird02.jpg",
    "White-headed Stilt by JJ Harrison (CC-by-SA)",
  ],
  [
    "http://www.outgrabe.net/bird03.jpg",
    "Inland Thornbill by Peter Jacobs (CC-by-SA)",
  ],
  [
    "http://www.outgrabe.net/bird04.jpg",
    "Rose Robin by JJ Harrison (CC-by-SA)",
  ],
];

function changeBirdDetails(index) {
  birdImageElement.src = birdDetailsArray[index][0];
  birdDescriptionElement.innerHTML = birdDetailsArray[index][1];
}

function changeTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "dark";

  if (currentTheme === "dark") {
    newTheme = null;
  }

  document.documentElement.setAttribute("data-theme", newTheme);
}
