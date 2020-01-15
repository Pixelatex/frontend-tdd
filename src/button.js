import React from "react";
import { button } from "./button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button className={button} onClick={onClick} data-testid="button">
        {children}
      </button>
      <span>test</span>
    </div>
  );
};

export default Button;
