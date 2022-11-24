import React from 'react';
import OrderStatusPrograss from './OrderStatusPrograss';
import OrderStatusDate from './OrderStatusDate';


const OrdersStatus = ({orderItem}) => {
  return (
    <div className="order-status">
      <div className="status-text d-flex justify-content-between">
        <div className="ordered-text"> orderd</div>
        <div className="packed-text"> packed </div>
        <div className="shipped-text"> shipped </div>
        <div className="delivered-text"> deleverd </div>
      </div>
      <OrderStatusPrograss 
        orderStatus = {orderItem.orderStatus}
        orderId={orderItem._id}
        delivered={orderItem.delivered}
        orders={orderItem.orders}
        />
      <OrderStatusDate orderStatus={orderItem.orderStatus} />   
    </div> /*end order status */
  )
}

export default OrdersStatus
