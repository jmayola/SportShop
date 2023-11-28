import { redirect, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
setInterval(()=>{
  redirect("/")
},1000)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Error en la Carga de Datos</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}