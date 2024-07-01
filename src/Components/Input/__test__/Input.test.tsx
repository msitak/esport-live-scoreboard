import React from "react";
import { render } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import Input from "../Input";

describe("Input", () => {
  it("renders input with label", () => {
    const { getByLabelText } = render(<Input label="Test Label" id="test" />);
    const input = getByLabelText("Test Label");
    expect(input).toBeInTheDocument();
  });

  it("renders input without label", () => {
    const { container } = render(<Input id="test" />);
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute("label");
  });

  it("handles onChange event", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Input label="Test Label" id="test" onChange={handleChange} />,
    );
    const input = getByLabelText("Test Label");
    Simulate.change(input, { target: { value: "new value" } } as any);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
