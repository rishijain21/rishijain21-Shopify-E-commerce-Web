import React , {createContext, useState}  from 'react'
import all_product from '../assets/all_product'

export const ShopContext = createContext(null);

    const GetDefaultCart = ()=>{
        let cart = {};
        for(let index =0;index<all_product.length+1;index++){
           cart[index] =0;

        }
        return cart;
    }

const ShopContextProvider = (props)=>{
        const [cartItem,SetCartItems] = useState(GetDefaultCart())

const addToCart = (itemId)=>{
    SetCartItems((prev)=>(
        {

            ...prev,[itemId]:prev[itemId]+1
        }
    ));
    console.log(cartItem);
}
const RemoveFromCart = (itemId)=>{
    SetCartItems((prev)=>(
        {

            ...prev,[itemId]:prev[itemId]-1
        }
    ));
}


const getTotalCartAmount=()=>{
    let totalamount = 0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            let itemInfo = all_product.find((product)=> product.id === Number(item))
            totalamount += itemInfo.new_price * cartItem[item];
        }
       
    }
     return totalamount;

}
const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
        if (cartItem[item] > 0) {
            totalItem += cartItem[item];  // accumulate instead of reset
        }
    }
    return totalItem;
}; const contextValue = {all_product,cartItem,addToCart,RemoveFromCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;