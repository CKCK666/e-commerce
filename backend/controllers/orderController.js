import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

const addOrderItems = asyncHandler(async (req, res) => {
 
    const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice}=req.body


    if(orderItems && orderItems===0){
        res.status(400)
        throw new Error("no order items")
       
    }
    else{
        const order= new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
           
        })
        const createdOrder=await order.save()
        res.status(201).json(createdOrder)
    }

})

const getOrderById = asyncHandler(async (req, res) => {
  
    const order= await Order.findById(req.params.id).populate(
        "user",
        "name email"
    ) 
  
 if (order) {
    res.json(order)
 }
 else{
    res.status(404)
    throw new Error("order not found")
 }

})
const updateOrderDetails = asyncHandler(async (req, res) => {

    const order= await Order.findById(req.params.id)
   
  
 if (order) {
    order.isPaid=true
    order.paidAt=Date.now()
    
    order.payResult={
        id:req.body.id,
        status:req.body.status,
        update_time:req.body.update_time,
        email_address:req.body.payer.email_address
    }
    
    const updateOrder=await order.save()
    res.json(updateOrder)
  }
 

 else{
    res.status(404)
    throw new Error("order not found")
 }

})
const getMyOrders = asyncHandler(async (req, res) => {
     
    const orders= await Order.find({user:req.user._id})
   

    res.json(orders)
 

})


export{addOrderItems,getOrderById,updateOrderDetails,getMyOrders}
