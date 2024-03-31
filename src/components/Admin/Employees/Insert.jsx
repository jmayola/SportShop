import axios from "axios";
import { Form, redirect } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
export default function InsertProduct() {
  return (
    <>
      <Header></Header>
      <section className="flex justify-center">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-md px-5 py-8 ">
          <h1 className="text-center font-Inter text-4xl mb-10">
            Ingreso De Productos
          </h1>
          <Form
            method="POST"
            className="grid grid-cols-3 gap-7"
            action="/Empleados/insert"
          >
            <input
              type="text"
              name="username"
              placeholder="Ingrese un usuario"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="fullname"
              placeholder="Ingrese el Nombre Completo"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="address"
              placeholder="Ingrese el Domicilio"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="dni"
              placeholder="Ingrese el DNI"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="worksector"
              placeholder="Ingrese el Sector de Trabajo"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-black"
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
export const actionEmployeesInsert = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    username: data.get("username"),
    address: data.get("address"),
    dni: data.get("dni"),
    fullname: data.get("fullname"),
    worksector: data.get("worksector"),
  };
  axios.post("http://localhost:3000/employees", submission);
  return redirect("/products");
};
