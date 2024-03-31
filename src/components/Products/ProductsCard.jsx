function ProductsCard(children) {
  let prop = children.value;
  let Data = prop.Data;
  let index = prop.i;
  return (
    <>
      <div className="flex flex-row h-full overflow-hidden border border-gray-300 duration-500 rounded-md hover:shadow-2xl">
        <div className="flex flex-col gap-y-2 mt-2 ">
          <img
            src={"/" + Data[index].image_products}
            className="h-auto"
            alt=""
          />
          <div className="mx-4">
            <h2 className=" font-inter text-start text-xl font-medium ">
              {Data[index].name_products}
            </h2>
            <p className="font-inter text-sm">{Data[index].desc_products}</p>
            <div className="py-3">
              <p className="font-semibold text-2xl ">
                ${Data[index].price_products}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
