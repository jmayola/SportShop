import "./index.css";
import Home from "./routes/Home";
import Products from "./routes/Products";
import ErrorPage from "./routes/error-page";
import { useState, useEffect } from "react";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
function App() {
  // creamos enturador
  const [data, setdata] = useState();

  //   useEffect(() => {
  // fetch("http://localhost:3000").then(res=>{
  //     console.log(res)
  //     setdata(res.json)
  // }).catch(err=>console.log(err))

  //   }, [])
  //   console.log(data)
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
      path: "/products",
      element: <Products></Products>,
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
