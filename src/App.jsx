import "./index.css";
import Aboutus from "./routes/Aboutus";
import ErrorPage from "./routes/error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  // creamos enturador
  const router = createBrowserRouter([
    {
      // colocamos la direccion en base a la ruta del main
      path: "/",
      // y el elemento que se va a cargar en el main :)
      element: <Aboutus></Aboutus>
    },
    {
      path: "/contacts",
      element: <div>Hello world!</div>,
      errorElement: <ErrorPage></ErrorPage>
    },
  ]);
  return (
    <div>
        <RouterProvider router={router} /> 
      <h1 className="w-full h-96 grid place-content-center place-items-center text-center text-5xl">
        Hola Mundo!
      </h1>
    </div>
  );
}

export default App;
