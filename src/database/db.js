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
function INSERT() {
  sql = `INSERT INTO products(product_name, price, mark) VALUES(?,?,?)`;
  db.run(sql, ["zapas", 200, "adidas"], (err) => {
    if (err) return console.error(err.message);
    else console.log("ingreso exitoso");
  });
}
function SELECT() {
  sql = `SELECT * FROM products`;
  db.all(sql,[], (err,rows)=>{
    if(err) console.error(err.message);
    let arr = []
    rows.forEach(row=>{
     arr.push(row) //añadimos a un array
    })
    app.get("/", (req,res)=>{
      res.json(arr) // mostramos el array de objetos para visualizarlo
    })        
  })
}
// sql = "DROP TABLE products"
// db.run(sql)
SELECT()
app.use(cors())
// app.get("/", (req,res)=>{
//   res.json({"message": "hola"})
// })
app.listen(3000)
// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   next();
// };

// app.use(requestTime);

// app.get('/date', function (req, res) {
//   var responseText = 'Requested at: ' + req.requestTime + '';
//   res.send(responseText);
// });

