const submit = document.querySelector(".Submit");
const heroContainer = document.querySelector(".container--hero");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const inputname = document.querySelector(".name");
  const inputnumber = document.querySelector(".idNumber");
  const selectcountry = document.querySelector("#country");
  const selectlanguage = document.querySelector("#Language");
  // console.log(inputname,inputnumber,selectcountry,selectlanguage)

  const name = inputname.value;
  const number = inputnumber.value;
  const country = selectcountry.value;
  const language = selectlanguage.value;

  if (
    ((name == ""),
    (number == ""),
    (country == ""),
    (language == ""))
  ) {
    return alert(`enter the relevant details`);
  } 
  else {
    const html = `<div class="details">
  <p class="output">${name}</p>
  <p class="output">${number}</p>
  <p class="output">${country}</p>
  <p class="output">${language}</p>
  <button class="Delete">Delete</button>
  <button class="Edit">Edit</button>
</div>`;
  heroContainer.insertAdjacentHTML("beforeend", html);

  inputname.value = ''
  inputnumber.value = ''
  selectcountry.value = ''
  selectlanguage.value = ''
  }
});

heroContainer.addEventListener("click", function(event) {
  const targetElement = event.target;
  if (targetElement.classList.contains("Delete")) {
    const parentElement = targetElement.parentElement;
    parentElement.remove();
  } 
  else if (targetElement.classList.contains("Edit")) {
    const parentElement = targetElement.parentElement;
    const outputs = parentElement.querySelectorAll(".output");
    console.log(outputs)
    inputname.value = outputs[0].textContent;
    inputnumber.value = outputs[1].textContent;
    selectcountry.value = outputs[2].textContent;
    selectlanguage.value = outputs[3].textContent;
    parentElement.remove();
  }
})
