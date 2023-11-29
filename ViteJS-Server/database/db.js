/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const sqlite = sqlite3.verbose();
let sql;
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validUserRegex = /^[ñÑa-zñÑ A-ZñÑ0-9]*$/;
let validFullnameRegex = /^[ñÑa-zñÑA-ZñÑ]+ [ñÑa-zñÑA-ZñÑ]\w+$/;
let validNum = /^[0-9]*$/;
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
    //provider, webpage, address, telephone,email
    app.post("/providers", (req, res) => {
      const prop = req.body;
      console.log(prop);
      let provider = prop.provider.toString();
      let webpage = prop.webpage.toString();
      let address = prop.address.toString();
      let telephone = prop.telephone;
      let email = prop.email.toString();
      if (
        provider == "" ||
        webpage == "" ||
        address == "" ||
        telephone == "" ||
        email == ""
      ) {
        console.log("error");
        res.sendStatus(405)
      } else if (
        provider.length < 50 &&
        provider.match(validUserRegex) &&
        webpage.length < 100 &&
        address.length < 100 &&
        address.match(validUserRegex) &&
        telephone.match(validNum) &&
        email.length < 150 &&
        email.match(validRegex)
      ) {
        INSERTPROVIDERS(
          prop.provider,
          prop.webpage,
          prop.address,
          prop.telephone,
          prop.email
        );
        console.log("ingreso Realizado")
        res.sendStatus(200)
      }
      else{
        res.sendStatus(405)
        console.log("Error")
      }
    });
    app.delete("/providers", (req, res) => {
      const prop = req.body;
      console.log(prop)
      let provider = prop.provider;
      if(provider != undefined){
        DELETEPROVIDERS(provider)
        console.log("Se ha realizado un Delete sobre: "+ provider)
        res.sendStatus(200)
      }
      else{
        res.sendStatus(405)
      }
    });
    app.put("/providers", (req,res)=>{
      const prop = req.body.data;
      console.log(prop)
      let provider = prop.provider;
      let webpage = prop.webpage;
      let address = prop.address;
      let telephone = prop.telephone;
      let email = prop.email;
      if(provider != "" && provider.match(validUserRegex)){
        PUTPROVIDERS(provider, webpage, address, telephone, email)
        console.log("Se ha realizado un PUT sobre: "+ provider)
        res.sendStatus(200)
      }
      else{
        res.sendStatus(405)
      }
    })
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
function DELETEPROVIDERS(provider){
  sql = `DELETE FROM providers WHERE provider=?`;
  db.run(sql, [provider], (err) => {
    if (err) return console.error(err.message);
    else console.log("Eliminacion Exitosa");
  });
}
function PUTPROVIDERS(provider, webpage, address, telephone, email) {
  sql =
    "UPDATE providers SET webpage = ? , address = ? , telephone = ? , email=? WHERE provider = ? ";
  db.run(sql, [webpage, address, telephone, email, provider], (err) => {
    if (err) return console.error(err.message);
    else console.log("actualizacion exitosa");
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
      const prop = req.body;
      console.log(prop);
      let username = prop.username.toString();
      let fullname = prop.fullname.toString();
      let address = prop.address.toString();
      let dni = prop.dni;
      let worksector = prop.worksector.toString();
      if (
        username == "" ||
        fullname == "" ||
        address == "" ||
        dni == "" ||
        worksector == ""
      ) {
        console.log("error");
      } else if (
        username.length < 50 &&
        username.match(validUserRegex) &&
        fullname.length < 100 &&
        fullname.match(validUserRegex) &&
        address.length < 100 &&
        address.match(validUserRegex) &&
        dni.match(validNum) &&
        worksector.length < 13 &&
        worksector.match(validUserRegex)
      ) {
        INSERTEMPLOYEE(
          prop.username,
          prop.fullname,
          prop.address,
          prop.dni,
          prop.worksector
        );
      }
    });
    app.delete("/employees", (req, res) => {
      const prop = req.body;
      let username = prop.username;
      if(username != undefined){
        DELETEEMPLOYEE(username)
        console.log("Se ha realizado un Delete sobre: "+ username)
        res.sendStatus(200)
      }
      else{
        res.sendStatus(405)
      }
    });
    app.put("/employees", (req,res)=>{
      const prop = req.body.data;
      console.log(prop)
      let username = prop.username;
      let fullname = prop.fullname;
      let address = prop.address;
      let dni = prop.dni;
      let worksector = prop.worksector;
      if(username != "" && username.match(validUserRegex)){
        PUTEMLOYEE(username, fullname, address, dni, worksector)
        console.log("Se ha realizado un PUT sobre: "+ username)
        res.sendStatus(200)
      }
      else{
        res.sendStatus(405)
      }
    })
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
function DELETEEMPLOYEE(username){
  sql = `DELETE FROM employees WHERE username=?`;
  db.run(sql, [username], (err) => {
    if (err) return console.error(err.message);
    else console.log("Eliminacion Exitosa");
  });
}
function PUTEMLOYEE(username, fullname, address, dni, worksector) {
  sql =
    "UPDATE employees SET fullname = ? , address = ? , dni = ? , worksector=? WHERE username = ? ";
  db.run(sql, [fullname, address, dni, worksector, username,], (err) => {
    if (err) return console.error(err.message);
    else console.log("actualizacion exitosa");
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
//DROP_TABLE("cart")
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
    );
    res.sendStatus(200);
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
app.post("/cart", (req, res) => {
  const prop = req.body;
  console.log(prop);
  if (
    prop.username == undefined ||
    prop.id_products == undefined ||
    prop.cant == undefined
  ) {
    res.sendStatus(405);
  } else {
    INSERTCART(prop.username, prop.id_products, prop.cant);
    res.sendStatus(200);
    console.log("respuesta valida");
  }
});
//db2.run("CREATE TABLE cart(id_cart INTEGER PRIMARY KEY AUTOINCREMENT, username,  id_products, cant )", (err)=>{
//    if(err){
//     console.log("Se ha detectado un Error" + err.message)
//    }
//    else{
//     console.log("Tabla Creada")
//    }
//  })

async function INSERTCART(username, prod, cant) {
  sql = `INSERT INTO cart(username,  id_products, cant ) VALUES(?,?,?)`;
  db.run(sql, [username, prod, cant], (err) => {
    if (err) return console.error(err.message);
  });
}
SELECTCART();
function SELECTCART() {
  sql = `SELECT * FROM cart`;
  db.all(sql, [], (err, rows) => {
    if (err) console.error(err.message);
    let arr = [];
    rows.forEach((row) => {
      arr.push(row); //añadimos a un array
    });
    app.get("/cart", (req, res) => {
      res.json(arr); // mostramos el array de objetos para visualizarlo
    });
    console.log("datos cargados en el puerto 3000");
  });
}
console.log("base de datos conectada.");
app.listen(3000);
