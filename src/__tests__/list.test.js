import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";


import List from "../list";

const testData = [
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" },
  { image: "", text: "1" }
];

test("Basic component renders", () => {
  // Render comp
  const { container, getByTestId, queryByTestId } = render(
    <List items={testData} />
  );

  // List has x children as defined
  expect(getByTestId("list-container").children.length).toBe(testData.length);

  // Don't show load more button
  expect(queryByTestId("show-more")).toBeNull();
});

test("Test load more", () => {
  // Render comp
  const { container, getByTestId, queryByTestId } = render(
    <List loadMore={5} items={testData} />
  );

  // Only load 5 elements
  expect(getByTestId("list-container").children.length).toBe(5);

  // show more button exists
  expect(queryByTestId("show-more")).toBeTruthy();

  // Click load more
  fireEvent(
    getByTestId("show-more"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  // List now has 10 elements
  expect(getByTestId("list-container").children.length).toBe(10);

  // Click load more again to hit the limit
  fireEvent(
    getByTestId("show-more"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  // show more button exists
  expect(queryByTestId("show-more")).toBeNull();
});
