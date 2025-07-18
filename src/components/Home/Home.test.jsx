import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it('renders Home component correctly (snapshot)', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});