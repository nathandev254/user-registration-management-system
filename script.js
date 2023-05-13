const submit = document.querySelector(".Submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const inputname = document.querySelector(".name").value;
  const inputnumber = document.querySelector(".idNumber").value;
  const selectcountry = document.querySelector("#country").value;
  const selectlanguage = document.querySelector("#Language").value;
  const Herocontainer = document.querySelector(".container--hero");
  // console.log(inputname,inputnumber,selectcountry,selectlanguage)
  if (
    ((inputname == ""),
    (inputnumber == ""),
    (selectcountry == ""),
    (selectlanguage == ""))
  ) {
    return alert(`enter the relevant details`);
  } 
  else {
    const html = `<div class="details">
  <p class="output">${inputname}</p>
  <p class="output">${inputnumber}</p>
  <p class="output">${selectcountry}</p>
  <p class="output">${selectlanguage}</p>
  <button class="Delete">Delete</button>
</div>`;
    Herocontainer.insertAdjacentHTML("beforeend", html);
  }
});
