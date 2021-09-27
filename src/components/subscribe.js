/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Button } from "theme-ui";

export default function Subscribe() {
  return (
    <div className="subscribe__area">
      <a
        sx={{ textDecoration: "none" }}
        target="_blank"
        href="https://forms.gle/KxPpnjPtr3yrPSt46"
      >
        <Button
          className="subscribe_button"
          variant="subscribeButton"
          aria-label="Get Started"
        >
          Hubungi Kami
        </Button>
      </a>
    </div>
  );
}
