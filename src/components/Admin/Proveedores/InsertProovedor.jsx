import React from "react";
import axios from "axios";
import { Form, redirect } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
export default function InsertProveedor() {
  return (
    <>
      <Header></Header>
      <section className="flex justify-center max-[800px]: m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-lg  p-10">
          <h1 className="text-center p-2 font-Inner text-2xl m-5">
            Ingreso De Proveedores
          </h1>
          <Form
            method="POST"
            className="grid grid-cols-3 gap-5"
            action="/Proveedores/insert"
          >
            <input
              type="text"
              name="provider"
              placeholder="Ingrese el Proveedor"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="webpage"
              placeholder="Ingrese la Pagina Web"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="address"
              placeholder="Ingrese la Direccion"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Ingrese el Telefono"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese el Email"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <button className="p-5 bg-black rounded-md font-medium text-white">
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
        email: data.get("email")
    };
    axios.post("http://localhost:3000/providers", submission).then((res)=>{
        if(res.status == 200){
            alert("Ingreso Exitoso")
        }
    }).catch((err)=>{
        alert("Ingreso invalido, codigo de error: "+err)
    });
    return redirect("/Proveedores");
  }
