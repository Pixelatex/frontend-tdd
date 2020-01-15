import React from "react";
import { render } from "@testing-library/react";

import Teaser from "../teaser";

test("Basic component renders", () => {
  // Render comp
  const { getByTestId } = render(
    <Teaser
      text="News headline here"
      image={"https://via.placeholder.com"}
      size="small"
    />
  );

  // Teaser has a text title
  expect(getByTestId("teaser-title")).toHaveTextContent("News headline here");
  // Teaser has an image
  expect(getByTestId("teaser-image")).toHaveProperty(
    "src",
    "https://via.placeholder.com/150"
  );
});

test("Different sizes", () => {
  // Render comp
  const { getByTestId } = render(
    <Teaser
      text="News headline here"
      image={"https://via.placeholder.com"}
      size="large"
    />
  );

  // Teaser has a text title
  expect(getByTestId("teaser-title")).toHaveTextContent("News headline here");
  // Teaser has an image
  expect(getByTestId("teaser-image")).toHaveProperty(
    "src",
    "https://via.placeholder.com/500"
  );
});
