import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { clickButton } from "../helpers";
import Button from "../button";

test("Basic component renders", () => {
  // Render comp
  const { container, getByTestId, queryByTestId } = render(
    <Button onClick={() => console.log("test")}>Click me</Button>
  );

  const button = getByTestId("button");
  expect(getByTestId("button")).toHaveTextContent("Click me");

  clickButton(button);
  //   expect(container.getElementsByTagName("span")[0]).toHaveTextContent("test");
  // Teaser has a text title
  //   fireEvent(
  //     getByTestId("button"),
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true
  //     })
  //   );
  expect(global.console.log).toHaveBeenCalledWith("test");
});
