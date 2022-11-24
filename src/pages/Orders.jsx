import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import OrdersStatus from './../components/orders/OrdersStatus';
import { getOrders } from './../store/actions/orderAction';
import OrderItem from './../components/orders/OrderItem';



const Orders = () => {
  const {orders} = useSelector(state=>state.orders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getOrders());
  },[dispatch])
  return (
    <div className="ms-3">
        {
            orders ? orders && orders.map(orderItem=>{
              return <>
                <OrderItem  key= {orderItem._id} orderItem={orderItem}/>
                <OrdersStatus key= {orderItem._id} orderItem={orderItem}  />
              </>
               
           }):null
        }
    </div>
  )
}

export default Orders
