export function cardFactory(title, subtitle, link) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("col-sm-3");

  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card-body");

  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;

  let cardSub = document.createElement("h6");
  cardSub.classList.add("card-subtitle");
  cardSub.classList.add("text-muted");
  cardSub.innerText = subtitle;

  let downloadButton = document.createElement("a");
  downloadButton.classList.add("card-link");
  downloadButton.setAttribute("href", link);
  downloadButton.innerText = "Download";

  card.appendChild(cardTitle);
  card.appendChild(cardSub);
  card.appendChild(downloadButton);

  wrapper.appendChild(card);

  return wrapper;
}