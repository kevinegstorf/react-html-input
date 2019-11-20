import * as React from "react";
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
  noArrows: boolean;
}

const NumberInput: React.FunctionComponent<Props> = ({ noArrows = false }) => {
  return !noArrows ? (
    <input type="number" />
  ) : (
    <InputTest>
      <input type="number" />
    </InputTest>
  );
};

export default NumberInput;
