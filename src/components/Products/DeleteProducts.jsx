import React from "react"
function DeleteProducts(res){
  const children = res.values.Data
  const index = res.values.i
  console.log(children)
    return(
      <option>{children[index].id_products}</option>
      )
}
export default DeleteProducts