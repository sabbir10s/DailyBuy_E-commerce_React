import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart} from '../../../redux/feature/cartSlice';

const ShoppingItems = ({item}) => {
    const {name, main_img_url, price, del_price, cartQuantity} = item
    const total = price * cartQuantity;
    const dispatch = useDispatch();
    const handleRemoveItem = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    return (
        <div
            className='bg-white hover:bg-gray-50 cursor-pointer p-2 flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <div className="w-580px] h-[50px] bg-gray-50  rounded-full">
                    <img
                        src={main_img_url}
                        className="w-full h-full rounded-full"
                        alt="product-img"/>
                </div>
                <div className=' col-span-2'>
                    <h3 className='text-[14px]'>{name.slice(0, 20)}
                     <span>
                        {
                            name.length>20 && <span>...</span>
                        }
                     </span>
                    </h3>
                    <p className='text-[12px] text-gray-500'>Item Price ${price}</p>
                    <h2 className=' font-semibold mt-2'>${total}</h2>
                </div>
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={() => handleDecreaseCart(item)}
                    type="button"
                    className="w-6 h-6 text-xs md:text-base lg:text-xl font-medium border border-primary-600 lg:border-0 bg-gray-50 rounded-[50%] text-primary-600 lg:text-black transition hover:opacity-75">
                    &minus;
                </button>

                <span className="px-2 lg:text-base font-medium">{cartQuantity}</span>

                <button
                    onClick={() => handleIncreaseCart(item)}
                    type="button"
                    className=" w-6 h-6 text-xs md:text-base lg:text-xl font-medium border border-primary-600 lg:border-0 bg-gray-50 rounded-[50%] text-primary-600 lg:text-black transition hover:opacity-75">
                    &#43;
                </button>
            </div>

            <button
                onClick={() => handleRemoveItem(item)}
                className="p-2 lg:p-4">
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" w-[18px]  h-[18px] inline-block text-secondary-500">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                </svg>
            </button>
        </div>
    );
};

export default ShoppingItems;