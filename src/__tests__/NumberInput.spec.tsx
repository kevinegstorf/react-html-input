import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/dom";
import { NumberInput } from "../NumberInput/index";

describe("NumberInput Component", () => {
  it(" it renders a default number type input", () => {
    const { container, debug } = render(<NumberInput />);
    debug();
    expect(container.outerHTML).toBe(`<div><input type="number"></div>`);
  });

  it("it removes the default number type input increment and deciment arrows", () => {
    const { container, debug } = render(<NumberInput noArrows={true} />);
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
    debug();
  });

  // it only renders numbers when keys are pressed

  // it only renders positive numbers
  // https://github.com/testing-library/react-testing-library/issues/269

  // it only handles decimals with peroid

  // it only handles decimals with comma

  // it renders a currency sign

  // it handles custom styles
});
