import thunk from "redux-thunk"
import {createStore ,combineReducers,applyMiddleware} from "redux"
import{composeWithDevTools} from "redux-devtools-extension"
import  { productDetailsReducer, productListReducer } from "./reducers/productReducer"
import {cartReducer} from "./reducers/cartReducer"
import {userReducer,userRegisterReducer,userDetailsReducer,userProfileUpdateReducer} from "./reducers/userReducer"
const reducer=combineReducers({
    productList:productListReducer, 
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
    UserProfileUpadate:userProfileUpdateReducer
})
const cartItemsFromStorage=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
const userInfoFromStorage=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null

const initialState={
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware=[thunk]
const store=createStore (reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store