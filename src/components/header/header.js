/** @jsx jsx */

// Red Circles
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";

// Yellow Circles
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import Toggler from "./toggler";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container} id="container">
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Toggler />

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: "10px",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "background",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: ["24px", "34px", null, "50px", "50px", "100px", "30px", "0px"],
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      color: "navToggled",
      fontSize: 2,
      fontWeight: "bold",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
        fontWeight: "bold",
      },
    },
  },
};
