import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "../../components/Loading";
import "@testing-library/jest-dom";

describe("loading component", () => {
  test("renders loading text", () => {
    render(<Loading />);
    const loadElement = screen.getByText(/Fetching data, please wait.../i);
    expect(loadElement).toBeInTheDocument();
  });
});
