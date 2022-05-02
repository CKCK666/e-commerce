import axios from "axios";
import constants from "../constants/cartConstants";


export const addToCart=(id,qty)=> async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)

dispatch({
    type:constants.CART_ADD_ITEM,
    payload:{
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        count:data.countInStock,
        qty
    }
})
localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))















}

