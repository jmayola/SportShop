const express = require("express")
const cors = require("cors")
import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();
let sql;
const app = express()

const db = new sqlite.Database(
  "src/database/products.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);
// sql = `CREATE TABLE products(id INTEGER PRIMARY KEY, product_name, price, mark)`
function INSERT(nombre, precio, marca) {
  sql = `INSERT INTO products(product_name, price, mark) VALUES(?,?,?)`;
  db.run(sql, [nombre, precio, marca], (err) => {
    if (err) return console.error(err.message);
    else console.log("ingreso exitoso");
  });
}
function SELECT() {
  sql = `SELECT * FROM products`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = []
    rows.forEach(row => {
      arr.push(row) //añadimos a un array
    })
    app.get("/", (req, res) => {
      res.json(arr) // mostramos el array de objetos para visualizarlo
    })
    console.log("datos cargados en el puerto 3000")
  })
}

function DELETE(id) {
  sql = `DELETE FROM products WHERE id=?`;
  db.run(sql, [id], (err) => {
    if (err) return console.error(err.message);
    else console.log("Eliminacion Exitosa");
  });
}
// sql = "DROP TABLE products"
// db.run(sql)
// INSERT("Botiness", 79.999, "Adidas")

SELECT()
app.use(cors())
app.listen(3000)
