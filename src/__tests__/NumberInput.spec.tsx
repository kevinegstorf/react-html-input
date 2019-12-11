import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/dom";
import { NumberInput } from "../NumberInput/index";

describe("NumberInput Component", () => {
  it("renders a default number type input", () => {
    const { container, debug } = render(<NumberInput />);
    debug();
    expect(container.outerHTML).toBe(`<div><input type="number"></div>`);
  });

  it("removes the default number type input increment and deciment arrows", () => {
    const { getByTestId, debug } = render(<NumberInput noArrows={true} />);
    const input = getByTestId("input");

    console.log(input);

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
    debug();
  });

  it("only renders numbers when keys are pressed", () => {
    const { container, debug } = render(<NumberInput noArrows={true} />);
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
    debug();
  });

  // it only renders positive numbers
  // https://github.com/testing-library/react-testing-library/issues/269

  // TODO it handles a custom validation error when input is not a number
});
