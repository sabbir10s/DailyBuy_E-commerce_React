import React from 'react';
import { RiShoppingBagLine} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import ShoppingItems from './ShoppingItems';

const ShoppingCart = ({visible, handleCloseCart}) => {
 
    const handleCloseModal = (e)=>{
            if(e.target.id === 'container') handleCloseCart()
    }

    const {cartItems} = useSelector((state) => state.cart);

    const total = cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
    const shipping = 3;

    

    if (!visible) {
        return null
    }
   

    
    return (
        <div
            id='container'
            onClick={handleCloseModal}
            className='z-50 fixed inset-0 bg-black bg-opacity-25 flex items-center justify-end'>
            <div className='relative w-1/3'>
                <div className='bg-white w-full h-screen'>
                    <div className=' w-full flex justify-between bg-[#eef2ff] py-[20px] px-[15px]'>
                        <div className='flex items-center gap-2'>
                            <RiShoppingBagLine className="text-[24px]"/>
                            <h2 className="text-xl font-medium">
                                Shopping Cart
                            </h2>{" "}
                        </div>
                        <button
                            className='text-sm flex gap-2 items-center hover:text-secondary-500 duration-300'
                            onClick={handleCloseCart}> <span>X</span> Close</button>
                    </div>
                    
                    <div className='w-full'>
                        {
                            cartItems.map(item=><ShoppingItems item={item} key={item._id}/>)    
                        }   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;