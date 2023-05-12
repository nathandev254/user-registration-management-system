const submit = document.querySelector(".Submit");
const inputname = document.querySelector("#name").value;
const inputnumber = document.querySelector("#idNumber").value;
const country = document.querySelector("#country");
const language = document.querySelector("#Language");

const countryselected = country.value
const languageselected = language.value

const Herocontainer = document.querySelector(".container--hero");

function Display(inputname = 'nathan', inputnumber, country, language) {
  const html = `<div class="details">
  <p class="output">${inputname}</p>
  <p class="output">${inputnumber}</p>
  <p class="output">${country}</p>
  <p class="output">${language}</p>
</div>`;
  Herocontainer.insertAdjacentHTML("beforeend", html);
  inputname,inputnumber,country,language = '';
}

submit.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log(inputname,inputnumber)
    Display(inputname,inputnumber,countryselected,languageselected)

})