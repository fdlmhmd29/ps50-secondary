/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Button } from "theme-ui";
import { Link } from "react-scroll";

export default function Subscribe() {
  return (
    <div className="subscribe__area">
      <Link
        activeClass="active"
        to="feature"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button
          className="subscribe_button"
          variant="subscribeButton"
          aria-label="Get Started"
        >
          Pelajari selengkapnya
        </Button>
      </Link>
    </div>
  );
}
