import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet component", () => {
  test("renders coorrectly", () => {
    render(<Greet />);
    //   const h1Elem = screen.getByRole("heading", {
    //     level: 1,
    //   });
    const h1Elem = screen.getByRole("heading", {
      name: "Hello",
    });
    expect(h1Elem).toBeInTheDocument();
  });

  test("renders with prop", () => {
    render(<Greet name={"Nishant"} />);
    const h1Elem = screen.getByText(/hello nishant/i);
    expect(h1Elem).toBeInTheDocument();
  });
});
