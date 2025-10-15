import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#2c2c2c",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
};
