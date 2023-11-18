import React from "react"
function DeleteProducts(res){
  const children = res.values.Data
  const index = res.values.i
    return(
      <option value={children[index].id_products} className="bg-white">{children[index].id_products} - {children[index].name_products}</option>
      )
}
export default DeleteProducts