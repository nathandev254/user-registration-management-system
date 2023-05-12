const form = document.querySelector('form');
      const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const idNumber = document.getElementById("idNumber").value;
        const country = document.getElementById("country").value;
        const language = document.getElementById("language").value;

        const newRow = table.insertRow(-1);
        const nameCell = newRow.insertCell(0);
        const idNumberCell = newRow.insertCell(1);
        const countryCell = newRow.insertCell(2);
        const languageCell = newRow.insertCell(3);

        nameCell.innerHTML = name;
        idNumberCell.innerHTML = idNumber;
        countryCell.innerHTML = country;
        languageCell.innerHTML = language;

        form.reset();
      });