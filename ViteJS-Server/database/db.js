/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const sqlite = sqlite3.verbose();
const nodemon = require("nodemon")
let sql;
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validUserRegex = /^[ñÑa-zñÑ A-ZñÑ0-9]*$/;
let validFullnameRegex = /^[ñÑa-zñÑA-ZñÑ]+ [ñÑa-zñÑA-ZñÑ]\w+$/;
const app = express();
app.use(express.json());
app.use(cors());
const db = new sqlite.Database(
  "./database/products.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);
const db2 = new sqlite.Database(
  "./database/products.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);
//nombre, nombre y apellido, domicilio, dni, sector de trabajo
// db2.run("CREATE TABLE employees(username VARCHAR(50) PRIMARY KEY, fullname VARCHAR(100) NOT NULL, address VARCHAR(100) NOT NULL, dni VARCHAR(20) NOT NULL, worksector VARCHAR(50) NOT NULL)", (err)=>{
//   if(err){
//    console.log("Se ha detectado un Error" + err.message)
//   }
//   else{
//    console.log("Tabla Creada")
//   }
// })
//sql = `CREATE TABLE products(id INTEGER PRIMARY KEY, product_name, price, mark)`
//////////////////////////////////////////////////////////
//                DATABASE Employees                    //
//////////////////////////////////////////////////////////
//provider, paginaweb,direccion,telefono,email
//db2.run("CREATE TABLE providers(provider VARCHAR(50) PRIMARY KEY, webpage VARCHAR(100), address VARCHAR(100), telephone VARCHAR(50), email VARCHAR(150))", (err)=>{
//    if(err){
//     console.log("Se ha detectado un Error" + err.message)
//    }
//    else{
//     console.log("Tabla Creada")
//    }
//  })
function SELECTPROVIDER() {
  sql = `SELECT * FROM providers`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = [];
    rows.forEach((row) => {
      arr.push(row); //añadimos a un array
    });
    app.get("/providers", (req, res) => {
      res.json(arr); // mostramos el array de objetos para visualizarlo
    });
    app.post("/providers", (req, res) => {
      let prop = req.body;
      let username = prop.username;
      let password = prop.password;
      arr.forEach((val, i) => {
        console.log(arr);
        console.log(arr[i].username);
        console.log(arr[i].password);
        if (username == arr[i].username && password == arr[i].password) {
          console.log("resultado valido");
          return res.sendStatus(200);
        }
      });
      res.sendStatus(505);
    });
  });
}
SELECTPROVIDER();
function INSERTPROVIDERS(provider, webpage, address, telephone, email) {
  sql = `INSERT INTO providers(provider, webpage, address, telephone,email) VALUES(?,?,?,?,?)`;
  db2.run(sql, [provider, webpage, address, telephone, email], (err) => {
    if (err) return console.error(err.message);
    else console.log("ingreso database2 exitoso");
  });
}
//INSERTPROVIDERS("Adidas","adidas.com","Rosario 250","1153578275","adidas-noreply@adidas.com")
//////////////////////////////////////////////////////////
//                DATABASE Employees                    //
//////////////////////////////////////////////////////////
function SELECTEMPLOYEE() {
  sql = `SELECT * FROM employees`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = [];
    rows.forEach((row) => {
      arr.push(row); //añadimos a un array
    });
    app.get("/employees", (req, res) => {
      res.json(arr); // mostramos el array de objetos para visualizarlo
    });
    app.post("/employees", (req, res) => {
      let prop = req.body;
      let username = prop.username;
      let password = prop.password;
      arr.forEach((val, i) => {
        console.log(arr);
        console.log(arr[i].username);
        console.log(arr[i].password);
        if (username == arr[i].username && password == arr[i].password) {
          console.log("resultado valido");
          return res.sendStatus(200);
        }
      });
      res.sendStatus(505);
    });
  });
}
SELECTEMPLOYEE();
function INSERTEMPLOYEE(username, fullname, address, dni, worksector) {
  sql = `INSERT INTO employees(username, fullname, address, dni,worksector) VALUES(?,?,?,?,?)`;
  db2.run(sql, [username, fullname, address, dni, worksector], (err) => {
    if (err) return console.error(err.message);
    else console.log("ingreso database2 exitoso");
  });
}

//INSERTEMPLOYEE("peña","peña verdun","rosario 200", "94482945","BD")

//////////////////////////////////////////////////////////
//                DATABASE USERS                        //
//////////////////////////////////////////////////////////

function INSERTUSER(username, password, fullname, email, tipo) {
  sql = `INSERT INTO users(username, password, fullname, email,tipo) VALUES(?,?,?,?,?)`;
  return db2.run(
    sql,
    [username, password, fullname, email, tipo],
    (err, asd) => {
      console.log("error detectado" + err);
      console.log(asd);
    }
  );
}
function SELECTUSER() {
  sql = `SELECT * FROM users`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = [];
    rows.forEach((row) => {
      arr.push(row); //añadimos a un array
    });
    app.get("/users", (req, res) => {
      res.json(arr); // mostramos el array de objetos para visualizarlo
    });
    app.post("/users", (req, res) => {
      let prop = req.body;
      let username = prop.username;
      let password = prop.password;
      console.log(username);
      console.log(password);
      arr.forEach((val, i) => {
        if (username == arr[i].username && password == arr[i].password) {
          res.header("Autentication", "true");
          console.log("resultado valido");
          res.sendStatus(200);
        }
      });
    });
    app.post("/users/register", (req, res) => {
      let prop = req.body;
      let username = prop.user;
      let password = prop.password;
      let fullname = prop.fullname;
      let email = prop.email;
      //validacion de insecion
      console.log(username);
      console.log(password);
      console.log(fullname);
      console.log(email);
      if (
        username.match(validUserRegex) &&
        username.length < 49 &&
        password.match(validUserRegex) &&
        password.length < 99 &&
        fullname.length < 254 &&
        fullname.match(validFullnameRegex) &&
        email.length < 100 &&
        email.match(validRegex)
      ) {
        console.log("respuesta valida");
        try {
          INSERTUSER(username, password, fullname, email, "cliente");
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("ingreso invalido");
      }
      //recordar bajar el mail a 100 y le fullname tambiens
    });
  });
}
//INSERTUSER("Mayola", "julian","julian mayola","julianmayola131@gmail.com", "Admin")

SELECTUSER();

//////////////////////////////////////////////////////////
//                DATABASE PRODUCTS                     //
//////////////////////////////////////////////////////////

async function INSERT(name, desc, price, stock, cat, img, prov, mark) {
  sql = `INSERT INTO products(name_products, desc_products, price_products, stock_products, category_products, image_products, provider_products, mark_products) VALUES(?,?,?,?,?,?,?,?)`;
  db.run(sql, [name, desc, price, stock, cat, img, prov, mark], (err) => {
    if (err) return console.error(err.message);
  });
}
function PUT(name, desc, price, stock, cat, img, id, prov, mark) {
  sql =
    "UPDATE products SET name_products = ? , desc_products = ? , price_products = ? , stock_products =  ? , category_products = ? ,  image_products = ?, provider_products = ?, mark_products = ? WHERE id_products = ? ";
  db.run(sql, [name, desc, price, stock, cat, img, prov, mark, id], (err) => {
    if (err) return console.error(err.message);
    else console.log("actualizacion exitosa");
  });
}
function SELECT() {
  sql = `SELECT * FROM products`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = [];
    rows.forEach((row) => {
      arr.push(row); //añadimos a un array
    });
    app.get("/", (req, res) => {
      res.json(arr); // mostramos el array de objetos para visualizarlo
    });
    console.log("datos cargados en el puerto 3000");
  });
}
function DELETE(id) {
  sql = `DELETE FROM products WHERE id_products=?`;
  db.run(sql, [id], (err) => {
    if (err) return console.error(err.message);
    else console.log("Eliminacion Exitosa");
  });
}
function CREATE_TABLE() {
  sql =
    "CREATE TABLE `products` (`id_products` INTEGER PRIMARY KEY NOT NULL, `name_products` VARCHAR(25) NOT NULL , `desc_products` VARCHAR(100) NOT NULL, `price_products` INTEGER NOT NULL ,`stock_products` INT(10) NOT NULL , `category_products` VARCHAR(100) NOT NULL , `image_products` VARCHAR NOT NULL, provider_products VARCHAR NOT NULL, mark_products VARCHAR NOT NULL)";
  db.run(sql, (err) => {
    if (err) return console.error(err.message);
  });
}
function DROP_TABLE(table) {
  sql = `DROP TABLE ${table}`;
  db.run(sql, (res) => {
    console.log(res.message);
  });
}
//DROP_TABLE("products")
//CREATE_TABLE()
SELECT();
app.post("/products", (req, res) => {
  let prop = req.body;
  if (
    prop.name_products.length < 75 &&
    prop.name_products.match(validUserRegex) &&
    prop.desc_products.length < 250 &&
    prop.price_products.match(/^[0-9]*$/) &&
    prop.price_products.length < 10 &&
    prop.stock_products.length < 10 &&
    prop.stock_products.match(/^[0-9]*$/) &&
    prop.category_products.length < 254 &&
    prop.category_products.match(validUserRegex) &&
    prop.provider_products.length < 100 &&
    prop.provider_products.match(validUserRegex) &&
    prop.mark_products.match(validUserRegex) &&
    prop.mark_products.length < 100
  ) {
      console.log("respuesta valida");
       INSERT(
        prop.name_products,
        prop.desc_products,
        prop.price_products,
        prop.stock_products,
        prop.category_products,
        prop.image_products,
        prop.provider_products,
        prop.mark_products
      )
      res.sendStatus(200)
  } else {
    console.log("error en la validacion");
    res.sendStatus(505);
  }
});
app.put("/products", (req, res) => {
  let prop = req.body;
  PUT(
    prop.name_products,
    prop.desc_products,
    prop.price_products,
    prop.stock_products,
    prop.category_products,
    prop.image_products,
    prop.id_products,
    prop.provider_products,
    prop.mark_products
  );
  console.log("PUT realizado");
  res.sendStatus(200);
});
app.delete("/products", (req, res) => {
  let prop = req.body;
  DELETE(prop.id_products);
  console.log("Delete Realizado, se ha eliminado la ID: " + prop.id_products);
  res.sendStatus(200);
});
console.log("base de datos conectada.");
app.listen(3000);