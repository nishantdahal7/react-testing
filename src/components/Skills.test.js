import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills component", () => {
  const skills = [
    { id: 1, name: "painting" },
    { id: 2, name: "wiring" },
    { id: 3, name: "painting" },
  ];
  test("renders correctly", () => {
    const view = render(<Skills skills={skills} />);
    const h2Elem = screen.getByRole("heading", {
      level: 2,
    });
  });
  expect(h2Elem).toBeInTheDocument();
  const listElem = screen.getByRole("list");
  expect(listElem).toBeInTheDocument();
});
