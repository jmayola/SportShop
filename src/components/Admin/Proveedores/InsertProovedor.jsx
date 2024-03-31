import axios from "axios";
import { Form, redirect } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
export default function InsertProveedor() {
  return (
    <>
      <Header></Header>
      <section className="flex justify-center m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-md px-5 py-8">
          <h1 className="text-center font-Inter text-4xl mb-10">
            Ingreso De Proveedores
          </h1>
          <Form
            method="POST"
            className="grid grid-cols-3 gap-7"
            action="/Proveedores/insert"
          >
            <input
              type="text"
              name="provider"
              placeholder="Ingrese el Proveedor"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="webpage"
              placeholder="Ingrese la Pagina Web"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="address"
              placeholder="Ingrese la Direccion"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Ingrese el Telefono"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese el Email"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <button className="p-2 bg-black rounded-md font-semibold text-white">
              Ingresar
            </button>
          </Form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
export const actionProvidersInsert = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    provider: data.get("provider"),
    webpage: data.get("webpage"),
    address: data.get("address"),
    telephone: data.get("telephone"),
    email: data.get("email"),
  };
  axios
    .post("http://localhost:3000/providers", submission)
    .then((res) => {
      if (res.status == 200) {
        alert("Ingreso Exitoso");
      }
    })
    .catch((err) => {
      alert("Ingreso invalido, codigo de error: " + err);
    });
  return redirect("/Proveedores");
};
