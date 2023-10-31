import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCard from "../components/Products/ProductsCard";

function Products() {
  const [Data, setData] = useState(data);
  return (
    <>
      <Header />
      <section className="grid place-content-center gap-5">
        {Data.map((val, i) => {
          return <ProductsCard values={i} key={i}></ProductsCard>;
        })}
      </section>
      <Footer />
    </>
  );
}

export default Products;
