const input = document.getElementById("item");
const form = document.querySelector("form");
const listOfTasks = document.querySelector("ul");
const alert = document.querySelector(".alert");
const closeBtn = document.querySelector(".close-btn");

form.onsubmit = (event) => {
  event.preventDefault();

  createElementOnList(input.value);
};

closeBtn.onclick = () => {
  alert.classList.add("hidden");
  alert.classList.remove("show-alert");
};

const createElementOnList = (nameTask) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const input = document.createElement("input");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");

  div.classList.add("wrapper-checkbox");
  span.classList.add("checkbox-image");
  input.setAttribute("type", "checkbox");
  div.append(span, input);

  input.onclick = () => {
    paragraph.classList.toggle("underline");
  };

  paragraph.textContent = nameTask;

  image.setAttribute("src", "./assets/images/icons/trash-icon.svg");
  image.setAttribute("alt", "ícone de lixo");
  image.classList.add("trash");

  image.onclick = () => {
    li.remove();
    alert.classList.remove("hidden");
    alert.classList.add("show-alert");
  };

  li.append(div, paragraph, image);

  listOfTasks.append(li);
};

createElementOnList("Estudar");
createElementOnList("Limpar a casa");
createElementOnList("Ir para a Academia");
