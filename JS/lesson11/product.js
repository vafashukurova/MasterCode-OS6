const products = [
  {
    id: "GGOEAFKA087499",
    name: "Android Small Removable Sticker Sheet",
    description:
      "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    price: "2.99",
    category: "accessories",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEAFKA087599",
    name: "Android Large Removable Sticker Sheet",
    description:
      "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    price: "2.99",
    category: "accessories",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEGEBK094499",
    name: "Google Bot",
    description:
      "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
    category: "accessories",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEGFKA086699",
    name: "Google Emoji Sticker Pack",
    description:
      "Who doesn't use emojis? Decorate your space with your current mood!",
    price: "4.99",
    category: "accessories",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEWCKQ085457",
    name: "Waze Pack of 9 Decal Set",
    description:
      "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
    price: "16.99",
    category: "accessories",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEGHPB071610",
    name: "Google Twill Cap",
    description:
      "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
    price: "10.99",
    category: "apparel",
    url: "https://shorturl.at/fjAHN",
  },

  {
    id: "GGOEGHPB071610",
    name: "Google Twill Cap",
    description:
      "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
    price: "10.99",
    category: "apparel",
    url: "https://shorturl.at/fjAHN",
  },
  {
    id: "GGOEGHPB071610",
    name: "Google Twill Cap",
    description:
      "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
    price: "10.99",
    category: "apparel",
    url: "https://shorturl.at/fjAHN",
  },
];

console.log(typeof products);

products.forEach((product) => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <img src=${product.url}>
  <h1>${product.name}</h1>
  <p>${product.description}</p>
  <span>${product.price}</span>
  <h4>${product.category}</h4>
  `;

  document.querySelector(".card-container").append(cardDiv);
});
