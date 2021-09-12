import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button if isDisable present", () => {
    const { container } = render(<Button isDisabled></Button>);
    expect(contianer.querySelector("span-disabled")).toBeInTheDocument();
});