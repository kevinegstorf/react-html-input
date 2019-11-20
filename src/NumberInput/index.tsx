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
  changeHandler?: any;
}

export const NumberInput: React.FunctionComponent<Props> = ({
  noArrows = false,
  changeHandler
}) => {
  const keyHandler = (e: KeyboardEvent): boolean | undefined => {
    if (
      e.keyCode === 190 ||
      e.keyCode === 69 ||
      e.keyCode === 189 ||
      e.keyCode === 188
    ) {
      e.preventDefault();
      return false;
    }
    return undefined;
  };

  return noArrows ? (
    <InputWrapper>
      <input
        data-testid="input"
        type="number"
        onChange={changeHandler}
        onKeyDown={event => keyHandler(event)}
      />
    </InputWrapper>
  ) : (
    <input type="number" />
  );
};
