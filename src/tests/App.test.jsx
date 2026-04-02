import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"; // 🔥 THIS is the fix
import App from "../App";

test("renders hello text", () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});