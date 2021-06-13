import React, { useState, useEffect } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BiGame } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import "../styles/header.css";

const useStyles = makeStyles(() => ({
  header: {
    background: "#000000",
    padding: "10px 55px",
    "@media (max-width:900px)": {
      padding: "0",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    fontFamily: "Press Start 2P",
    fontWeight: 800,
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none !important",
    "@media(max-width:360px)": {
      fontSize: "1.4rem",
      fontFamily: "Press Start 2P",
    },
  },
  links: {
    "&:hover": {
      background: "rgba(58, 58, 58, 0.37)",
      color: "orange",
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  cart: {
    fontSize: "1.8rem",
  },
  cartConteiner: {
    border: "solid 2px white",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      border: "solid 2px rgba(58, 58, 58, 0.37)",
      background: "rgba(58, 58, 58, 0.37)",
      color: "orange",
    },
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const headersData = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Search",
    href: "/search",
  },
];

export const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const { header, logo, links, toolBar, cart, cartConteiner, drawerContainer } =
    useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolBar}>
        {Logo}
        <div> {getMenuButtons()}</div>
        <div>
          <RouterLink
            to="/cart"
            style={{ textDecoration: "none" }}
            className={cartConteiner}
          >
            {" "}
            <AiOutlineShoppingCart className={cart} />
          </RouterLink>
        </div>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          className={links}
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: links,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const Logo = (
    <Typography className={logo} variant="h6" component="h1">
      <RouterLink
        to="/"
        className={logo}
        style={{ fontFamily: "Press Start 2P" }}
      >
        {" "}
        retroDonkey <BiGame /> •••
      </RouterLink>
    </Typography>
  );

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };

    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{Logo}</div>
        <RouterLink
          to="/cart"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            marginLeft: "15px",
          }}
        >
          {" "}
          <AiOutlineShoppingCart
            style={{ fontSize: "1.5rem", color: "white", marginRight: "5px" }}
          />
        </RouterLink>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};
