const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");

const getData = async () => {
  const ojidaniye = await fetch("https://randomuser.me/api/?results=10", {
    method: "GET",
  });

    const data = await ojidaniye.json();

  preloader.style.display = "none";

  data.results.forEach((object1) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
                <div class="image">
                <img src=${object1.picture.large}>
                </div>
                <div class="body">
                    <p class="text">Фамилия и имя: ${object1.name.first} ${object1.name.last}</p>
                    <p class="text">Пол: ${object1.gender}</p>
                    <p class="text">Адрес: ${object1.location.country}, ${object1.location.state}, ${object1.location.city}, ${object1.location.street.name}, ${object1.location.street.number}</p>
                    <p class="text">Email: ${object1.email}</p>
                    <p class="text">Телефон: ${object1.phone}</p>
                    <p class="text">Дата рождения: ${object1.dob.date.substring(0, 10).split("-").reverse().join("/")}</p>
                    <p class="text">Возраст: ${object1.dob.age}</p>
                </div>
                    `;
    container.appendChild(card);
  });
};

window.onload = () => getData();