import React from 'react';

interface ButtonProps {
    text: string;
    disabled: boolean;
    onClick: () => void;
}

const Button = ({ text, disabled, onClick } : ButtonProps) => {
  return (
    <button
      className="px-4 py-2 font-medium text-white bg-blue-500 rounded-full
      hover:bg-blue-600 
      focus:outline-none focus:ring-2 focus:ring-blue-500
      "
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;