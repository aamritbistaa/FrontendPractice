import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import { CiSearch, CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List, ListItem } from "@mui/material";
import { Logo } from "@/constants/images";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [search, setSearch] = useState(false);
  const toggleSearchBar = () => {
    setSearchText("");

    setSearch(!search);
  };
  const [searchText, setSearchText] = useState("");

  const list = () => (
    <div className={styles.wrapper_menulist} onClick={handleClose}>
      <List style={{ marginTop: "100px" }}>
        <ListItem
          button
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <button>Home</button>
          <button>About us</button>
          <button>Sneakers</button>
          <button>Apparel</button>
          <button>
            <CloseIcon />
          </button>
        </ListItem>
      </List>
    </div>
  );
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_menubutton}>
          <button onClick={handleOpen}>
            <CiMenuBurger />
          </button>
        </div>
        <div className={styles.wrapper_title}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={styles.wrapper_leftbox}>
          <button>Home</button>
          <button>About us</button>
          <button>Sneakers</button>
          <button>Apparel</button>
        </div>

        <div className={styles.wrapper_rightbox}>
          <button onClick={toggleSearchBar}>
            <CiSearch />
          </button>
          <div style={{ position: "absolute", marginTop: "50px" }}>
            {search && (
              <input
                placeholder="Find your preference"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}
          </div>

          <button>Account</button>
          <button>
            <CiShoppingCart />
          </button>
        </div>
      </div>
      <Drawer open={open} onClose={handleClose}>
        {list()}
      </Drawer>
    </>
  );
};

export default Navbar;
