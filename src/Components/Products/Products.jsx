import axios from 'axios'
import React, { useEffect } from 'react'

function Products() {
  async function getProducts(){
    let {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(data);
  }
  let values={
    email:"moemenatia@gmail.com",
  }
  async function forgetPassword(){
    let res = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,values)
    console.log(res);
  }

  async function getSpecificProduct(){
    let res =await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/6439d61c0049ad0b52b90051`)
    console.log(res);
  }


  useEffect(()=>{forgetPassword()},[])
  
  return (
    <></>
  )
}

export default Products