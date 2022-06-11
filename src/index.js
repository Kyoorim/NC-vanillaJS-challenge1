function handleScreenSize() {
  let text = document.querySelector("#text");
  let innerWidth = window.innerWidth;
  let body = document.querySelector("body");

  if (innerWidth < 1000) {
    text.innerText = "Just about right";
    body.style.background = "thistle";
  } else if (innerWidth >= 1000) {
    text.innerText = "Screen size not recommended";
    body.style.background = "tomato";
  }
}

window.addEventListener("resize", handleScreenSize);
