const ul = document.getElementById("list");
const dimmedLayer = document.getElementById("dimmed-layer");
const fragment = new DocumentFragment();
let clickedItem = null;

// list item 100개 생성
for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = i;
  div.classList.add("content");
  li.classList.add("item");
  div.appendChild(span);
  li.appendChild(div);
  fragment.appendChild(li);
}
ul.appendChild(fragment);

// list item mouseover event handler
const handleMouseover = (event) => {
  const item = event.target.closest(".item");
  if (!item) return;

  item.previousElementSibling
    ?.querySelector(".content")
    .classList.add("target-sibling");
  item.querySelector(".content").classList.add("target");
  item.nextElementSibling
    ?.querySelector(".content")
    .classList.add("target-sibling");
};

// list item mouseout event handler
const handleMouseout = (event) => {
  const item = event.target.closest(".item");
  if (!item) return;
  const content = item.querySelector(".content");
  if (content.matches(".center")) return;

  item.previousElementSibling
    ?.querySelector(".content")
    .classList.remove("target-sibling");
  content.classList.remove("target");
  item.nextElementSibling
    ?.querySelector(".content")
    .classList.remove("target-sibling");
};

// list item click event handler
const handleClick = (event) => {
  if (!event.target.matches(".content")) return;

  event.target.classList.add("center");
  clickedItem = event.target;
  dimmedLayer.classList.remove("hide");
};

// dimmed layer click event handler
const handleDimmedLayerClick = (event) => {
  event.currentTarget.classList.add("hide");

  const item = clickedItem.closest(".item");
  item.previousElementSibling
    ?.querySelector(".content")
    .classList.remove("target-sibling");
  clickedItem.classList.remove("target", "center");
  item.nextElementSibling
    ?.querySelector(".content")
    .classList.remove("target-sibling");

  clickedItem = null;
};

ul.addEventListener("mouseover", handleMouseover);
ul.addEventListener("mouseout", handleMouseout);
ul.addEventListener("click", handleClick);
dimmedLayer.addEventListener("click", handleDimmedLayerClick);
