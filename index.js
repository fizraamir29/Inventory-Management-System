// Array of products
var products = [
    { name: "T-Shirt", quantity: 10, price: 15.00 },
    { name: "Calender", quantity: 5, price: 25.50 },
    { name: "Flour", quantity: 8, price: 30.75 },
];
// Function to display products in the table
function displayProducts() {
    var tableBody = document.getElementById("productTableBody");
    // Clear existing rows
    tableBody.innerHTML = "";
    // Loop through the products array
    products.forEach(function (product) {
        var row = document.createElement("tr");
        // Create and append cells to the row
        var nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement("td");
        priceCell.textContent = product.price.toFixed(2);
        row.appendChild(priceCell);
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
// Function to add a new product
function addProduct() {
    // Get input values
    var productName = document.getElementById("productName").value.trim();
    var quantity = parseInt(document.getElementById("productQuantity").value);
    var price = parseFloat(document.getElementById("productPrice").value);
    // Validation
    if (!productName) {
        alert("Product Name cannot be empty.");
        return;
    }
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a positive number.");
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert("Price must be a valid number greater than zero.");
        return;
    }
    // Create a new product object
    var newProduct = { name: productName, quantity: quantity, price: price };
    // Add the new product to the array
    products.push(newProduct);
    // Display updated products
    displayProducts();
    // Clear input fields after adding the product
    document.getElementById("productName").value = '';
    document.getElementById("productQuantity").value = '';
    document.getElementById("productPrice").value = '';
}
// Initial display of products
displayProducts();
// Attach event listener to the button
document.getElementById("addProductBtn").addEventListener("click", addProduct);
