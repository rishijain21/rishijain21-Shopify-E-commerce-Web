import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/popular'
import Offer from '../components/offers/Offer'
import Newcollections from '../components/newCollection/Newcollections'
import Newsletter from '../components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div><Hero/>
    <Popular/>
    <Offer/>
<Newcollections/>
<Newsletter/>

    </div>
  )
}

export default Shop