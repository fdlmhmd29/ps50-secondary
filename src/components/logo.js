/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo() {
  return (
    <Link path="/" sx={styles.logo}>
      Maxmore
    </Link>
  );
}

const styles = {
  logo: {
    color: "text",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "2rem",
  },
};
