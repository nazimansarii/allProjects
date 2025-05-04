const periodicTable = document.querySelector("#periodic-table");
for (let i = 1; i <= 100; i++) {
  const element = document.createElement("div");
  element.innerHTML = `Elem ${i}`;
  element.classList.add("elem");
  periodicTable.append(element);
}

periodicTable.addEventListener("click", (e) => {
  alert(e.target.innerHTML);
});
