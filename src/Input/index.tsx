import * as React from "react";

interface InputProps {
  inputType: string;
}

const Input: React.FunctionComponent<InputProps> = ({ inputType = "" }) => {
  return <input type={inputType} />;
};

export default Input;
