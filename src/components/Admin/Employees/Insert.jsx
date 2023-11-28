import React, { useState } from "react";
import axios from "axios";
import { Form, redirect } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
export default function InsertProduct() {
  return (
    <>
      <Header></Header>
      <section className="flex justify-center max-[800px]: m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-lg  p-10">
          <h1 className="text-center p-2 font-Inner text-2xl m-5">
            Ingreso De Productos
          </h1>
          <Form
            method="POST"
            className="grid grid-cols-3 gap-5"
            action="/products/insert"
          >
            <input
              type="text"
              name="username"
              placeholder="Ingrese un usuario"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="fullname"
              placeholder="Ingrese el Nombre Completo"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="address"
              placeholder="Ingrese el Domicilio"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="dni"
              placeholder="Ingrese el DNI"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              id=""
            />
            <input
              type="text"
              name="worksector"
              placeholder="Ingrese el Sector de Trabajo"
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
export const actionEmployeesInsert = async ({ request }) => {
    const data = await request.formData();
    const submission = {
      username: data.get("username"),
      address: data.get("address"),
      dni: data.get("dni"),
      fullname: data.get("fullname"),
      worksector: data.get("worksector")
    };
    console.log(submission)
    axios.post("http://localhost:3000/employees", submission);
    return redirect("/products");
  }
