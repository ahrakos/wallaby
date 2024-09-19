import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "primary",
}) => {
  let backgroundColor = "blue";
  if (color === "primary") {
    backgroundColor = "green";
  }

  const buttonStyle = {
    backgroundColor,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
