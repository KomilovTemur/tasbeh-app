const add = document.querySelector(".add");
const rm = document.querySelector(".remove");
const { count } = localStorage;
if (count) {
  add.innerHTML = `${localStorage.getItem("count")}`;
  add.addEventListener("click", () => {
    localStorage.setItem("count", +localStorage.getItem("count") + 1);
    add.innerHTML = `${localStorage.getItem("count")}`;
  });
} else {
  localStorage.setItem("count", 0);
  add.innerHTML = 0;
}

rm.addEventListener("click", () => {
  add.innerHTML = 0;
  localStorage.setItem("count", 0);
});
