import { Form } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
export default function InsertProduct() {
  return (
    <>
      <Header></Header>
      <section className="flex justify-center m-5">
        <div className="flex flex-col w-2/3 border border-gray-300 shadow-md p-8">
          <h1 className="text-center font-Inter text-4xl mb-10">
            Ingreso De Productos
          </h1>
          <Form
            method="POST"
            className="grid grid-cols-3 gap-7"
            action="/products/insert"
          >
            <input
              type="text"
              name="name_products"
              placeholder="Ingrese un Nombre"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="desc_products"
              placeholder="Ingrese una descripcion"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="number"
              name="price_products"
              placeholder="Ingrese el Precio"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="number"
              name="stock_products"
              placeholder="Ingrese el Stock"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />

            <input
              type="text"
              name="category_products"
              placeholder="Ingrese una Categoria"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="provider_products"
              placeholder="Ingrese un Proveedor"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="text"
              name="mark_products"
              placeholder="Ingrese Una Marca"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <input
              type="file"
              name="image_products"
              placeholder="Ingrese una Imagen"
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-black"
              id=""
            />
            <button className=" bg-black rounded-md font-semibold text-white">
              Ingresar
            </button>
          </Form>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
