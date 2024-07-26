import React, { useContext, useEffect, useState } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const [product,setProduct] = useState(null);

  useEffect(()=>{
    if(products.length===0) console.log("No products")
    else{
    console.log("Product id",productId)
    setProduct(products.find((e)=>e.id === Number(productId)))
}},[products,productId])

  return product ? (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts id={product.id} category={product.category}/>
    </div>
  ) : <div>Loading...</div>
}

export default Product
