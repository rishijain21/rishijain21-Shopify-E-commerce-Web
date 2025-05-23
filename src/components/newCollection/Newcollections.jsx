import React from 'react'
import './newCollectionsCSS.css'
import Item from '../items/item'
import new_collections from '../../assets/newcollections'

const Newcollections = () => {
  return (
    <div className="Newcollections">
<h1>NEW COLLECTION</h1>
<hr />
<div className="collections">
    {new_collections.map((item,i)=>{
        return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />
    })}


</div>

    </div>
  )
}

export default Newcollections