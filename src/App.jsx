import "./index.css";
import Home from "./routes/Home";
import Inserts from "./routes/Inserts";
import Products from "./routes/Products";
import Update from "./routes/Update";
import Facturas from "./routes/Facturas";
import ErrorPage from "./routes/error-page";
import Ingresar, { loginUserAction } from "./components/Ingresar";
import Registrar, { registerUserAction } from "./components/Registrar";
import Empleados from "./components/Admin/Empleados";
import Usuarios from "./components/Admin/Usuarios";
import Proveedores from "./components/Admin/Proveedores";
import ProductosAdmin from "./components/Admin/ProductosAdmin";
import User from "./routes/User";
import Insert, {actionEmployeesInsert} from "./components/Admin/Employees/Insert"
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Product from "./routes/Product";
import axios from "axios";
import Loading from "./routes/Loading";

function App() {
  // creamos enturador
  const router = createBrowserRouter([
    {
      // colocamos la direccion en base a la ruta del main
      path: "/",
      // y el elemento que se va a cargar en el main :)
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [{ index: true, element: <Home></Home> }],
    },
    {
      path: "/admin/facturas",
      element: <Facturas></Facturas>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products",
      loader: async () => {
        let data = await axios.get("http://localhost:3000");
        return data;
      },
      element: <Products></Products>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/:id",
      element: <Product></Product>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/insert",
      element: <Inserts></Inserts>,
      action: async ({ request }) => {
        const data = await request.formData();
        const submission = {
          name_products: data.get("name_products"),
          desc_products: data.get("desc_products"),
          price_products: data.get("price_products"),
          stock_products: data.get("stock_products"),
          category_products: data.get("category_products"),
          image_products: data.get("image_products"),
          provider_products: data.get("provider_products"),
          mark_products: data.get("mark_products"),
        };
        axios
          .post("http://localhost:3000/products", submission)
          .catch((err) => {
            if (err.response.status == 505)
              alert("Ingreso Invalido, revisa los caracteres que ingresas.");
          })
          .then((res) => {
            if (res.status == 200) {
              console.log("Ingreso Exitoso");
            }
          });
        return redirect("/");
      },
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/update/:i",
      element: <Update></Update>,
      action: async ({ request }) => {
        const data = await request.formData();
        const submission = {
          name_products: data.get("name_products"),
          desc_products: data.get("desc_products"),
          price_products: data.get("price_products"),
          stock_products: data.get("stock_products"),
          category_products: data.get("category_products"),
          image_products: data.get("image_products"),
          id_products: data.get("id_products"),
          provider_products: data.get("provider_products"),
          mark_products: data.get("mark_products"),
        };
        axios.put("http://localhost:3000/products", submission);
        return redirect("/products");
      },
      loader: async () => {
        return axios.get("http://localhost:3000");
      },
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Ingresar",
      element: <Ingresar></Ingresar>,
      action: loginUserAction,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Registrar",
      element: <Registrar></Registrar>,
      action: registerUserAction,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Empleados",
      element: <Empleados></Empleados>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Empleados/insert",
      element: <Insert></Insert>,
      action: actionEmployeesInsert,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Usuarios",
      element: <Usuarios></Usuarios>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Proveedores",
      element: <Proveedores></Proveedores>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/ProductosAdmin",
      element: <ProductosAdmin></ProductosAdmin>,
      loader: async () => {
        return axios.get("http://localhost:3000");
      },
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/ProductosAdmin",
      element: <ProductosAdmin></ProductosAdmin>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/User",
      element: <User></User>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/Loading",
      loader: async ({ res }) => {
        var data = await axios.get("http://localhost:3000");
        return redirect("/");
      },
      element: <Loading></Loading>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
