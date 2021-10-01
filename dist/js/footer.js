const currentYear = document.getElementById("current-year");

const d = new Date();
const year = d.getFullYear();
currentYear.innerText = year != 2021 ? `-${year}` : "";
