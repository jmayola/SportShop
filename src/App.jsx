import "./index.css";
import Home from "./routes/Home";
import Inserts from "./routes/Inserts";
import Products from "./routes/Products";
import Update from "./routes/Update";
import Delete from "./routes/Delete";
import Facturas from "./routes/Facturas";
import ErrorPage from "./routes/error-page";
import {insertProductAction} from "./components/Products/InsertProduct";
import {updateProductAction} from "./components/Products/UpdateProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  // creamos enturador
  const router = createBrowserRouter([
    {
      // colocamos la direccion en base a la ruta del main
      path: "/",
      // y el elemento que se va a cargar en el main :)
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [{ index: true,
      element: <Home></Home> }],
    },
    {
      path: "/admin/facturas",
      element: <Facturas></Facturas>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products",
      element: <Products></Products>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/insert",
      element: <Inserts></Inserts>,
      action: insertProductAction ,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/update/:id",
      element: <Update></Update>,
      action: updateProductAction ,
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: "/products/delete/",
      element: <Delete></Delete>,
      errorElement: <ErrorPage></ErrorPage>,
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
