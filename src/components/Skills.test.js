import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills component", () => {
  test("renders coorrectly", () => {
    render(<Skills />);
    const h2Elem = screen.getByRole("heading", {
      level: 1,
    });
    expect(h2Elem).toBeInTheDocument();
  });

  test("renders with prop", () => {
    render(<Skills Skills={"Programming"} />);
  });
});
