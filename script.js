const container = document.getElementById("container");
const DEFAULT_SIZE = 16;

function makeRows(size) {
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);
  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

window.onload = () => {
    makeRows(DEFAULT_SIZE);
};
