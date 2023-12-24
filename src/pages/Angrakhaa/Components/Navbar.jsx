import React from "react";

const Navbar = () => {
  return (
    <div className=" hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out">
      <div className="flex items-center justify-around  ">
        <div></div>
        <img
          className="hover:text-black"
          src="https://www.angrakhaa.com/cdn/shop/files/PNG_image-2A63BEA27C7C-1_e878d479-987a-4ac5-b849-050fb2c845e4_200x.png?v=1626339400"
        />
        <ul className="flex gap-5">
          <li>Account</li>
          <li>Search</li>
          <li>Cart</li>
        </ul>
      </div>
      <ul className="flex gap-5 items-center justify-center">
        <li>Categories</li>
        <li>Womenswear</li>
        <li>Menswear</li>
        <li>Collections</li>
        <li>SPECIAL</li>
      </ul>
    </div>
  );
};

export default Navbar;
