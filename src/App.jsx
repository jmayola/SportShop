import "./index.css";
import Aboutus from "./routes/Aboutus";
import Products from "./routes/Products";
import ErrorPage from "./routes/error-page";
import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
function App() {
  // creamos enturador
  const router = createBrowserRouter([
    {
      // colocamos la direccion en base a la ruta del main
      path: "/",
      // y el elemento que se va a cargar en el main :)
      element: <>
      <Aboutus></Aboutus>
      </>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/contacts",
      element: <div>Hola mundo!</div>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/products",
      element: <Products></Products>,
      errorElement: <ErrorPage></ErrorPage>
    },
     {
      element: <Products/>,
      path: "teams",
      loader: async () => {
        return json({message: "hola mundo"});
      },
    },
  ]);
  return (
        <RouterProvider router={router} /> 
  );
}

export default App;
