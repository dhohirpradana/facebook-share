/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function About() {
  return (
    <div>
      <div className="text-light px-5 pt-3">
        <div className="mb-5">Facebook share tool (free)</div>
        <div className="mb-1">Contact me on facebook</div>
        <div className="mb-5">
          <a target="_blank" href="https://facebook.com/8883">
            <img
              style={{ height: "30px" }}
              alt="fb"
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            />
            <span className="ms-1 fw-normal text-light">Dhohir Pradana</span>
          </a>
        </div>
        <a target="_blank" href="https://icons8.com/icon/118497/facebook">
          Facebook icon by Icons8
        </a>
      </div>
    </div>
  );
}
