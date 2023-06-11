import { render, screen } from "@testing-library/react";
import ButtonSample from "./ButtonSample";
import "@testing-library/jest-dom";

describe("ButtonSampleのテスト", () => {
  it("renders a heading", () => {
    render(<ButtonSample />);

    const heading = screen.getByRole("heading", {
      name: "This is button sample",
    });

    expect(heading).toBeInTheDocument();
  });
});
