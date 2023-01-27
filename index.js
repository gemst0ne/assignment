const ul = document.querySelector("ul");

for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("test");
  li.classList.add("li");
  div.innerText = i;
  li.appendChild(div);
  ul.appendChild(li);
}

ul.addEventListener("mouseover", function (event) {
  if (event.target.closest(".li")) {
    const div = event.target.closest(".li").querySelector(".test");
    if (event.target.closest(".li").previousElementSibling) {
      event.target
        .closest(".li")
        .previousElementSibling.querySelector(".test").style.transform =
        "translateX(20px)";
    }

    div.style.transform = "translate(40px)";
    if (event.target.closest(".li").nextElementSibling) {
      event.target
        .closest(".li")
        .nextElementSibling.querySelector(".test").style.transform =
        "translateX(20px)";
    }
  }
});

ul.addEventListener("mouseout", function (event) {
  if (event.target.closest(".li")) {
    const div = event.target.closest(".li").querySelector(".test");
    if (event.target.closest(".li").previousElementSibling) {
      event.target
        .closest(".li")
        .previousElementSibling.querySelector(".test").style.transform =
        "translateX(0px)";
    }
    div.style.transform = "translate(0px)";
    if (event.target.closest(".li").nextElementSibling) {
      event.target
        .closest(".li")
        .nextElementSibling.querySelector(".test").style.transform =
        "translateX(0px)";
    }
  }
});
