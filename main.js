var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var descInput = document.getElementById("desc");
var form = document.getElementById("contact");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Name: ${nameInput.value}`);
  console.log(`Email: ${emailInput.value}`);
  console.log(`Desc: ${descInput.value}`);
  nameInput.value = "";
  emailInput.value = "";
  descInput.value = "";
});
