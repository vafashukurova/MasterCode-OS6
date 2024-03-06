let BASE_URL="http://localhost:3000"




async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
}



const cardContainer = document.querySelector(".container");

function createCard(user) {
  return `
  <div class="card" data-id="${user.id}">
        <h2>${user.name}</h2>
        <span>${user.email}</span>
        <button onclick=deleteUser(this)>delete</button>
    </div> 
  `;
}

async function showCard() {
  const result = await getUsers();
  result.map((user) => {
    const newCard = createCard(user);
    cardContainer.insertAdjacentHTML("beforeend", newCard);
  });
}

showCard();

const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    name: nameInput.value,
    email: emailInput.value,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

function deleteUser(e) {
  const cardId = e.parentElement.dataset.id;
  fetch(`http://localhost:3000/users/${cardId}`, {
    method: "DELETE",
  });
}


// window.location='./form.html'