function searchBreweries() {
    let dataUrl = "https://api.openbrewerydb.org/v1/breweries";
    let table = document.getElementById("data-tbody-table");
    let searchInput = document.getElementById("searchInput").value.toLowerCase();


        table.innerHTML = "";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(brewery => {
                if (
                    brewery.name.toLowerCase().includes(searchInput) ||
                    brewery.street.toLowerCase().includes(searchInput) ||
                    brewery.city.toLowerCase().includes(searchInput) ||
                    brewery.state.toLowerCase().includes(searchInput) ||
                    brewery.postal_code.toLowerCase().includes(searchInput)
                ) {
                    let row = table.insertRow();
                    let cellName = row.insertCell(0);
                    let cellAddress = row.insertCell(1);
                    let cellCity = row.insertCell(2);
                    let cellState = row.insertCell(3);
                    let cellZipCode = row.insertCell(4);

                    cellName.textContent = brewery.name;
                    cellAddress.textContent = brewery.street || '';
                    cellCity.textContent = brewery.city || '';
                    cellState.textContent = brewery.state || '';
                    cellZipCode.textContent = brewery.postal_code || '';
                }
            });
        })
        .catch(error => {
            console.error(error);
        });

        console.log(table);
    

}
