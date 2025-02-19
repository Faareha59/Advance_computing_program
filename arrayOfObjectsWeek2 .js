let Cars = [
    { name: "Tesla", model: 145 },
    { name: "Honda", model: 678 },
    { name: "Suzuki", model: 35 }
];

function print_data(item) {
    console.log(item);
}

let new_arr = Cars.map(print_data);
