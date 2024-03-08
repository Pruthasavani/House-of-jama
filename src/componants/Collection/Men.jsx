import React from 'react'
import Product from './Product'

export default function Men() {
  return (
    <>

      <div className="banner ">
        <img src="./images/home1.avif" className="d-block w-100" alt="" />
      </div>

      



      <div className="container">
        <div className="row">

          <Product title='AMAARE' desc='Ivory Silk Hand Embroidered Sherwani Set' img='./images/men1.avif' />
          <Product title='title 1' desc='description 1' img='./images/men2.webp' />
          <Product title='title 1' desc='description 1' img='./images/men3.webp' />
          <Product title='title 1' desc='description 1' img='./images/men4.webp' />
         
        </div>

      </div>
    </>
  )
}
