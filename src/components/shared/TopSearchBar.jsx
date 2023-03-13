import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/big_logo.png";
import smallLogo from "../../assets/logo/logo.png";
import Modal from "./Modal";
import {AiOutlineSearch} from 'react-icons/ai';
import {BsHandbag} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
const TopSearchBar = () => {
    const {cartItems} = useSelector((state) => state.cart);
    const [showModal,
        setShowModal] = useState(false);

    const handleOnClose = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div
                className="border border-gray-100/60 fixed lg:static top-0 z-50 bg-white w-full">
                <div className="container ">
                    <div className="flex gap-4 justify-between items-center py-5 ">
                        <Link to="/">
                            <img className=" hidden lg:block w-[180px]" src={logo} alt=""/>
                            <img
                                className="block lg:hidden w-[80px] md:w-[130px] cursor-pointer"
                                src={smallLogo}
                                alt=""/>
                        </Link>
                        <div className="hidden md:block w-1/2  lg:w-[550px] xl:w-[778px] relative">
                            <input
                                placeholder="I'm looking for..."
                                type="text"
                                className=" py-1.5 md:py-3 px-2 md:px-5 border border-gray-200/80 w-[80%] md:w-[86%] lg:w-[92%] focus:outline-primary-600 rounded-l-md bg-white"/>
                            <button
                                className="bg-primary-600 text-white p-3 w-[14%] lg:w-[8%] h-full rounded-r-md absolute top-0 right-2 flex items-center justify-center">
                                <AiOutlineSearch className="text-2xl lg:text-3xl"/>
                            </button>
                        </div>
                        <div className="flex gap-6">
                            <Link to="/cart">
                                <button
                                    type="button"
                                    className="bg-secondary-50 w-10 lg:w-12 h-10 lg:h-12 rounded-full relative flex items-center justify-center">
                                    {" "}
                                    <BsHandbag className="text-xl lg:text-2xl text-secondary-600"/>
                                    <span
                                        className=" w-[14px] md:w-[17px]  h-[14px] md:h-[17px] text-[12px] flex items-center justify-center rounded-[50%] bg-secondary-600 text-white font-semibold absolute top-[3px]  right-[-4px]">
                                        {cartItems.length}
                                    </span>
                                </button>
                            </Link>
                            <button onClick={() => setShowModal(true)}>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="bg-[#F8F8F8] w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center">
                                        <HiOutlineUser className="text-xl lg:text-2xl"/>
                                    </div>
                                    <div className="leading-4 hidden md:block">
                                        <span className="text-gray-400">Hello</span>
                                        <p className="text-base">Sign in</p>
                                    </div>
                                </div>
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    );
};

export default TopSearchBar;
