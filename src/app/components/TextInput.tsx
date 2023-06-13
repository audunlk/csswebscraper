import React, { useState } from 'react';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setInputError?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextInput = ({  placeholder, value, onChange, setInputError }: TextInputProps) => {
  const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^www\.[^\s/$.?#].[^\s]*$|^[^\s/$.?#]+\.[^\s/$.?#]+$/;

  const isValidUrl: boolean = urlRegex.test(value);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  if (setInputError) {
    if (!isValidUrl && isFocused) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }

  return (
    <div className="flex flex-col ">
      <input
        className={!isValidUrl ? "px-4 py-2 border border-black-300 rounded-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500" :
          "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
        type="text"
        placeholder={placeholder}
        style={{color: "black"}}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextInput;
