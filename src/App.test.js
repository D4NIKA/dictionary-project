import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "./App";
import "./Dictionary.css";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
