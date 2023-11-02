import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();
let sql;
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
    rows.forEach(row=>{
        console.log(row)
    })

  })
}
// sql = "DROP TABLE products"
// db.run(sql)
SELECT()
