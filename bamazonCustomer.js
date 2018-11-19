const inquirer = require("inquirer");
const mySql = require("mysql");
const table = require("table").table;

const connection = mySql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "bamazon_db"
})

connection.connect(err => {
    if(err) {
        throw err;
    }
    start();
})

const products = [
    {
        id: 1,
        name: "Balaclava",
        price: 30.00
    },
    {
        id: 2, 
        name: "Lobster Gloves",
        price: 45.00
    },
    {
        id: 3,
        name: "Clear Goggles",
        price: 15.00
    }    
]

const start = () => {
    //when start, displays all product availabilty
    displayProducts();
    //prompt customer
    customerPrompt();
}

const customerPrompt = () => {
    inquirer.prompt([
        // {
        //     //set a dropdown of choices; need switch?
        // },
        {
            name: "quantity",
            type: "input",
            message: "How many? "//or a dropdown menu?
        }
    ]).then(selections => {
        console.log(selections);
    });

}

const displayProducts = () => {
    //connect to db
    // select * from products
    // display each product in table
    const data = products.map(product => [product.id, product.name, product.price, product.stock_quantity]);
    console.log(table(data));
}

start();
