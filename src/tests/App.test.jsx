import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders hello text", () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});