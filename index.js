const content1 = document.querySelector(".championship-content");
const content2 = document.querySelector(".non-championship-content");
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");

tab1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  tab1.style.backgroundColor = "#ffff";
  tab2.style.backgroundColor = "#aaaaaa";
  tab2.style.borderTopLeftRadius = "0";
});

tab2.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  tab1.style.backgroundColor = "#aaaaaa";
  tab2.style.backgroundColor = "#ffff";
  tab1.style.borderTopRightRadius = "0";
});
