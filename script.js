let dataUrl = "https://api.openbrewerydb.org/v1/breweries";
let table = document.getElementById("data-table");

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(brewery => {
            let row = table.insertRow();
            let cell = row.insertCell(0);
            let address = row.insertCell(1);
            let city = row.insertCell(1);
            let state = row.insertCell(1);
            let zipCode = row.insertCell(1);

            cell.textContent = brewery.name;
            address.textContent = brewery.street
            city.textContent = brewery.city
            state.textContent = brewery.state
            zipCode.textContent = brewery.postal_code
        })
    })
    .catch(error => {
        console.error(error);
    });