import * as React from "react";
import { KeyboardEvent } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

interface Props {
  noArrows?: boolean;
  test?: number;
  minimalNumber?: number;
  maximalNumber?: number;
  placeholder?: string;
  changeHandler?: () => void;
}

export const NumberInput: React.FunctionComponent<Props> = ({
  noArrows = false,
  changeHandler,
  minimalNumber = 0,
  maximalNumber,
  placeholder
}) => {
  const keyHandler = (e: KeyboardEvent): boolean | undefined => {
    const isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(e.keyCode));
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      return;
    } else if (!isNum) {
      e.preventDefault();
      return false;
    }
    return undefined;
  };

  return noArrows ? (
    <InputWrapper>
      <input
        pattern="\d*"
        placeholder={placeholder}
        type="number"
        data-testid="input"
        min={minimalNumber}
        max={maximalNumber}
        onChange={changeHandler}
        onKeyDown={event => keyHandler(event)}
      />
    </InputWrapper>
  ) : (
    <input type="number" pattern="\d*" onKeyDown={event => keyHandler(event)} />
  );
};
