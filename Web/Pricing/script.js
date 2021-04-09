const checkbox = document.getElementById("checkbox");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "Free" ? "Free" : "Free";
  master.textContent = master.textContent === "$12.99" ? "$2.99" : "$12.99";
});