import * as React from "react";
import { KeyboardEvent } from "react";
import styled from "styled-components";

const InputTest = styled.div`
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
  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === "," || e.key === "." || e.key === "e" || e.key === "-") {
      e.preventDefault();
    }
  };

  return noArrows ? (
    <InputTest>
      <input
        type="number"
        onChange={changeHandler}
        onKeyPress={event => keyHandler(event)}
      />
    </InputTest>
  ) : (
    <input type="number" />
  );
};
