import React from 'react';

const OrderStatusDate = ({orderStatus}) => {
    // format status date
    const formatDate =(date)=>{
        if(date){
          const d = new Date(date);
          return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        }
        return ""
    };
  return (
    <div className="status-date d-flex justify-content-between">
        {
            orderStatus && orderStatus.map((status)=>{
                return <div key={status._id}> {formatDate(status.date)} </div>
            })
        }
  </div>
  )
}

export default OrderStatusDate
