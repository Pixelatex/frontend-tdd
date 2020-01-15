import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { changeInputValue } from "../helpers";
import Input from "../input";


test("Basic component renders", () => {
  // Render comp
  const { getByTestId, queryByTestId } = render(
    <Input placeholder="Enter a name" label="Name" />
  );

  // Teaser has a text title
  expect(getByTestId("input-label")).toHaveTextContent("Name");

  expect(queryByTestId("input-field")).toBeTruthy();

  expect(getByTestId("input-field")).toHaveProperty(
    "placeholder",
    "Enter a name"
  );
});

test("Only accept numbers", () => {
  // Render comp
  const { getByTestId, queryByTestId } = render(
    <Input type="number" placeholder="Enter a name" label="Name" />
  );

  const input = getByTestId("input-field");
  const getErrorField = () => queryByTestId("input-error");
  // Test error
  changeInputValue(input, "test");
  expect(getErrorField()).toBeTruthy();

  // Test correct input
  changeInputValue(input, 12);
  expect(getErrorField()).toBeNull();
});

test("Not empty", () => {
  // Render comp
  const { getByTestId, queryByTestId } = render(
    <Input notEmpty placeholder="Enter a name" label="Name" />
  );

  const input = getByTestId("input-field");
  const getErrorField = () => queryByTestId("input-error");
  // Test error
  changeInputValue(input, "");
  expect(getErrorField()).toBeTruthy();

  // Test correct input
  changeInputValue(input, "test");
  expect(getErrorField()).toBeNull();
});
