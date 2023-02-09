//console.dir(document)

//console.log(document.URL);

console.log(document.title);
document.title = "Novi Sajt";

console.log(document.all);
console.dir(document.all[8]);
document.all[8].textContent = "Nesto Drugo";

console.log(document.getElementById("main-title"));
document.getElementById("main-title").textContent = "Drugi naslov";

let mainTitle = (document.getElementById("main-title").textContent =
  "drugi naslov")

mainTitle.textContent = "treci naslov";

console.log(document.getElementsByClassName("list-item"));

let items = document.getElementsByClassName("list-item");

items[2].textContent = "zamenio sam drugi element";
items[2].style.backgroundColor = "red";
