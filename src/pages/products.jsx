import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Bredcrums from '../components/Bredcrums/Bredcrums.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Discription from '../components/Discription/Discription';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';


const Products = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}= useParams(); 
const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
<Bredcrums product={product }/>
<ProductDisplay product={product}/>
<Discription/>
<RelatedProducts/>
    </div>
  )
}

export default Products