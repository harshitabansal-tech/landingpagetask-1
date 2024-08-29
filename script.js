const cards = [
  {
    name: "Ian Dooley",
    role: "designer",
    image: "./assets/person4.png",
    caption:
      "I love working at Minders. it's an incredibly dynamic and supportive creative community that fosters collaboration and innovation, leading to truly exceptional design work.",
  },
  {
    name: "Jonathan Borbora",
    role: "video editor",
    image: "./assets/person2.png",
    caption:
      "I love working at Minders. it's an incredibly dynamic and supportive creative community that fosters collaboration and innovation, leading to truly exceptional design work.",
  },
  {
    name: "Carry Bennett",
    role: "lead designer",
    image: "./assets/person3.png",
    caption:
      "I love working at Minders. it's an incredibly dynamic and supportive creative community that fosters collaboration and innovation, leading to truly exceptional design work.",
  },
  {
    name: "Horvath attila",
    role: "lead editor",
    image: "./assets/person1.png",
    caption:
      "I love working at Minders. it's an incredibly dynamic and supportive creative community that fosters collaboration and innovation, leading to truly exceptional design work.",
  },
];

const container = document.getElementById("cards-wrapper");

cards.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const imageElement = document.createElement("img");
  imageElement.src = card.image;
  imageElement.alt = `${card.name}'s image`;

  const nameElement = document.createElement("h2");
  nameElement.textContent = card.name;

  const roleElement = document.createElement("p");
  roleElement.textContent = card.role;

  const captionElement = document.createElement("p");
  captionElement.textContent = card.caption;

  cardElement.appendChild(imageElement);
  const contentElement = document.createElement("div");
  contentElement.setAttribute("class", "card-content");
  contentElement.appendChild(nameElement);
  contentElement.appendChild(roleElement);
  contentElement.appendChild(captionElement);

  cardElement.appendChild(contentElement);

  container.appendChild(cardElement);
});
