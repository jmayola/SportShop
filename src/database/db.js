import sqlite3  from "sqlite3"
const sqlite = sqlite3.verbose()
let sql
const db = new sqlite.Database("./products.db", sqlite.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message)
})
sql = `CREATE TABLE products(id INTEGER PRIMARY KEY, product_name, price, mark)`
db.run(sql)
