import React from 'react';
const orders = [
    {
      id: 1,
      product_name: "Nestle Original Coffee-Mate Coffee Creamer",
      quantity: 5,
      itemPrice: 250
    },
    {
      id: 2,
      product_name: "Nestle Original Coffee-Mate Coffee Creamer",
      quantity: 5,
      itemPrice: 220
    },
  ]
  
const InvoiceTable = () => {
    return (
        <div className='container my-[64px]'>
            <div className='border-[1px] rounded-t-[10px] rounded-bl-[10px]'>
                    <div className='grid grid-cols-5 justify-items-center font-semibold'>
                        <div className='py-[19px]'>Serial No</div>
                        <div className='py-[19px]'>Product Name</div>
                        <div className='py-[19px]'>Quantity</div>
                        <div className='py-[19px]'>Item Price</div>
                        <div className='py-[19px]'>Amount</div>
                    </div>
                    {
                        orders.map((order, index)=>
                        <div className='grid grid-cols-5 justify-items-center text-[#383838] border-t-[1px]'>
                            <div className='py-[19px]'>{index+1}</div>
                            <div className='py-[19px]'>{order.product_name.slice(0,25)}....</div>
                            <div className='py-[19px]'>{order.quantity}</div>
                            <div className='py-[19px]'>${order.itemPrice}</div>
                            <div className='py-[19px]'>${order.quantity * order.itemPrice}</div>
                        </div>) 
                    }
                
            </div>
        </div>
    );
};

export default InvoiceTable;