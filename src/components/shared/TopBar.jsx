import React from "react";

const TopBar = () => {
  return (
    <div className="border border-gray-100">
      <div className="container py-3 ">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-8">
            <li className="txtHover text-base">🔥Offer</li>
            <li className="txtHover text-base">🤍Wishlist</li>
          </ul>

          <ul className="flex space-x-8">
            <li className="txtHover text-base">👜Order Tracking</li>
            <li className="txtHover text-base">💁‍♂️Support Center</li>
            <li className="txtHover text-base">English</li>
            <li className="txtHover text-base">💰USD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
