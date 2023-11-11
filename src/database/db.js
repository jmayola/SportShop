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
function INSERT(name,desc,price,stock,cat,img) {
  sql = `INSERT INTO products(name_products, desc_products, price_products, stock_products, category_products, image_products) VALUES(?,?,?,?,?,?)`;
  db.run(sql, [name,desc,price,stock,cat,img], (err) => {
    if (err) return console.error(err.message);
    else console.log("ingreso exitoso");
  });
}
function PUT(name,desc,price,stock,cat,img,id){
  sql = "UPDATE products SET name_products = ? , desc_products = ? , price_products = ? , stock_products =  ? , category_products = ? ,  image_products = ? WHERE id_products = ? ";
  db.run(sql, [name,desc,price,stock,cat,img,id], (err) => {
    if (err) return console.error(err.message);
    else console.log("actualizacion exitosa");
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
    console.log(rows)
    app.get("/", (req,res)=>{
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
function CREATE_TABLE(){
  sql = "CREATE TABLE `products` (`id_products` INTEGER PRIMARY KEY NOT NULL, `name_products` VARCHAR(25) NOT NULL , `desc_products` VARCHAR(100) NOT NULL, `price_products` INTEGER NOT NULL ,`stock_products` INT(10) NOT NULL , `category_products` VARCHAR(100) NOT NULL , `image_products` VARCHAR NOT NULL)"
  db.run(sql, (err)=>{
    if(err) return console.error(err.message)
  })
}
// sql = "DROP TABLE products"
// db.run(sql)
//CREATE_TABLE()
SELECT()
app.use(express.json())
app.use(cors())
app.post("/products", (req,res)=>{
  let prop = req.body
  INSERT(prop.name_products, prop.desc_products, prop.price_products, prop.stock_products,prop.category_products, prop.image_products)
  console.log("post realizado")
  console.log(prop)
})
app.put("/products", (req,res)=>{
  let prop = req.body
  PUT(prop.name_products, prop.desc_products, prop.price_products, prop.stock_products,prop.category_products, prop.image_products, prop.id_products)
  console.log("PUT realizado")
})
app.delete("/products", (req,res)=>{
  DELETE(req.body.id_products)
  console.log("DELETE realizado")
})
console.log("base de datos conectada.")
app.listen(3000)
