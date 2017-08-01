
for (let i = 0; i < customers.results.length; i++) {

    let image = customers.results[i].picture.large;
    let name = customers.results[i].name.first + " " + customers.results[i].name.last;
    let email = customers.results[i].email;
    let streetAddress = customers.results[i].location.street;
    let address = customers.results[i].location.city + " " + customers.results[i].location.state + " " + customers.results[i].location.postcode;
    let phone = customers.results[i].phone;
    let ssn = customers.results[i].id.value;


    let customer = `
<div class=individual>
    <img src=${image} alt="an image">
        <p class="name">${name}</p>
        <p class="email">${email}</p>
        <p class="streetAddress">${streetAddress}</p>
        <p class="address">${address}</p>
        <p class="Phone">${phone}</p>
        <p class="SSN">${ssn}</p>
</div>
`

    document.querySelector(".container").innerHTML += customer;
}
