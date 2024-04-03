function create_expense() {

    const table = document.getElementById("expense-table");

    const name_val = document.getElementById("name").value;
    const category_val = document.getElementById("category").value;
    const price_val = document.getElementById("price").value;
    const date_val = document.getElementById("date").value;

    let table_length = table.rows.length;

    let row = table.insertRow(table_length);

    let name = row.insertCell(0);
    let category = row.insertCell(1);
    let price = row.insertCell(2);
    let date = row.insertCell(3);

    name.innerHTML = name_val;
    category.innerHTML = category_val;
    price.innerHTML = price_val;
    date.innerHTML = date_val;
}