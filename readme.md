## Test driven development

Test before you develop, literally!

First you write your test based on your usecase, which is in this example:

'I should be able to click a button that has the label I want and the onClick function will be executed'

Ok fair enough, first we render the button

```javascript
const { getByTestId } = render(
  <Button onClick={() => console.log("test")}>Click me</Button>
);
```

Next we get the button with it's testing ID (called `button`).

```javascript
const button = getByTestId("button");
```

Then we check if our button has the correct label.

```javascript
expect(getByTestId("button")).toHaveTextContent("Click me");
```

Then we simulate a click on the button

```javascript
fireEvent(
  button,
  new MouseEvent("click", {
    bubbles: true,
    cancelable: true
  })
);
```

At this point we need to check if your onClick has worked, so we can look in the console if `test` was logged.

```javascript
expect(global.console.log).toHaveBeenCalledWith("test");
```

And that's it! Happy testing.
