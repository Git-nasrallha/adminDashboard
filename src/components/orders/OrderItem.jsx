import React from 'react'

const OrderItem = ({orderItem}) => {
  return (
    <ul className="mb-5 shadow-none p-5 bg-light rounded">
        <h4 className="text-center text-capitalize">Order Info</h4>
      <li> <strong>OrderId:</strong> {orderItem._id} </li>
      <li> <strong>Email:</strong> {orderItem.email} </li>
      <li> <strong>Customer Name:</strong> {orderItem.name} </li>
      {
        orderItem.orders.map(({_id,name ,price ,quantity})=>{
            return <li key={_id}>
                <li> <strong>Product Name:</strong> {name} </li>
                <li> <strong>product Price:</strong> $ {price} </li>
                <li> <strong>Product Quantity:</strong> {quantity} </li>
            </li>
        })
      }
      <li> <strong>Order Total Amount:</strong> {orderItem.orderAmount} </li>
      <li> <strong>Order Quantity:</strong> {orderItem.orderQuantity} </li>
    </ul>
  )
}

export default OrderItem
