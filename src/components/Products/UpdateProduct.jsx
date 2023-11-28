import axios from "axios";
import ProductsCard from "./ProductsCard";
import {
  Form,
  Navigate,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
export default function UpdateProduct(children) {
  const Data = children.values.Data;
  const { i } = useParams();
  if (Data.length == 0) {
    return <h1>Esperando Objetos</h1>;
  } else {
    return (
      <>
        <ProductsCard value={{ Data, i }}></ProductsCard>
        <Form
          method="PUT"
          action="/products/update/:id"
          className="grid grid-cols-2 place-content-center gap-2 border border-gray-300 p-4"
        >
          <label htmlFor="name_products" className="m-auto">
            Nombre del Producto:
          </label>
          <input
            type="text"
            name="name_products"
            defaultValue={Data[i].name_products}
            placeholder="Ingrese un Nombre"
            className="p-4 bg-gray-100 border border-gray-300 "
            id=""
          />
          <label htmlFor="desc_products" className="m-auto">
            Descripción del Producto:
          </label>
          <textarea
            type="text"
            name="desc_products"
            defaultValue={Data[i].desc_products}
            placeholder="Ingrese una descripcion"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="price_products" className="m-auto">
            Precio del Producto:
          </label>

          <input
            type="number"
            name="price_products"
            defaultValue={Data[i].price_products}
            placeholder="Ingrese el Precio"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="stock_products" className="m-auto">
            Stock del Producto:
          </label>

          <input
            type="number"
            name="stock_products"
            defaultValue={Data[i].stock_products}
            placeholder="Ingrese el Stock"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="category_products" className="m-auto">
            Categoria del Producto:
          </label>

          <input
            type="text"
            name="category_products"
            defaultValue={Data[i].category_products}
            placeholder="Ingrese una Categoria"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="provider_products" className="m-auto">
            Proveedor del Producto:
          </label>
          <input
            type="text"
            name="provider_products"
            defaultValue={Data[i].category_products}
            placeholder="Ingrese una Marca"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="mark_products" className="m-auto">
            Marca del Producto:
          </label>
          <input
            type="text"
            name="mark_products"
            defaultValue={Data[i].category_products}
            placeholder="Ingrese una Marca"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <label htmlFor="image_products" className="m-auto">
            Imagen del Producto:
          </label>
          <input
            type="file"
            name="image_products"
            placeholder="asdjasj"
            className="p-4 bg-gray-100 border border-gray-300"
            id=""
          />
          <input type="hidden" name="id_products" value={Data[i].id_products} />
          <button className="grid col-end-3 col-start-1 p-5 bg-black text-white ">
            Modificar
          </button>
        </Form>
      </>
    );
  }
}
export const updateProductAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    name_products: data.get("name_products"),
    desc_products: data.get("desc_products"),
    price_products: data.get("price_products"),
    stock_products: data.get("stock_products"),
    category_products: data.get("category_products"),
    image_products: data.get("image_products"),
    id_products: data.get("id_products"),
    provider_products: data.get("provider_products"),
    mark_products: data.get("mark_products"),
  };
  console.log(submission);
  axios.put("http://localhost:3000/products", submission);
  return redirect("/products");
};
