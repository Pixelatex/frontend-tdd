import { fireEvent } from "@testing-library/react";

export function changeInputValue(input, value) {
  fireEvent.change(input, { target: { value } });
}

export function clickButton(button) {
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
}
