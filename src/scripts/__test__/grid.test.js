// import react from "react";
import Grid from "../grid";
import { screen, render } from "@testing-library/react";

test("Initial state of stones contains at least 1 stone of value 1 at index (0,0)", () => {
  render(<Grid />);
  const el = screen.getByTestId("0,0");
  expect(el.textContent).toBe("1");
});
