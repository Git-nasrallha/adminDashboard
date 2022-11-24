import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {updateOrderType} from '../../store/actions/orderAction';

const OrderStatusPrograss = ({orderStatus,orderId ,delivered,orders}) => {
    const [orderType,setOrderType] = useState('');
    const dispatch = useDispatch();
    const changeOrderStutus =(e)=>{
        setOrderType(e.target.value);
        const values={
            orderId,
            type:e.target.value,
            orderItems:orders
        };
        dispatch(updateOrderType(values));
    };
return (
    <div className="main-status d-flex">
        <div className="stutus-progress d-flex">
            {
                orderStatus && orderStatus.map((status)=>{
                    return <div key={status._id} className={`orderStatus ${status.isCompleted?'active':''}`}></div>
                })
            }
        </div>
        {/*select order status */}
        <div className="select-status">
            {
                delivered ? <p className="lead" 
                                style={{color:"#080",fontWeight:"bold"}}>
                                Order Is Delivered
                            </p>
                 :<select onChange={changeOrderStutus} value ={orderType}>
                    <option value="">!-- select order type --!</option>
                    {
                        orderStatus && orderStatus.map((status)=>{
                            return status.isCompleted ? "" :
                            <option key={status._id} value={status.type}> {status.type} </option>
                        })
                    }
                </select>
            }
        </div>
  </div> 
  )
};
export default OrderStatusPrograss
