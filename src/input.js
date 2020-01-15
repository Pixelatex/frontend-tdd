import React, { useState } from "react";

function validateInput(type, value, notEmpty) {
  if (notEmpty && !value) {
    return false;
  }

  if (type === "number" && isNaN(value)) {
    return false;
  }
  return true;
}

const Input = ({ placeholder, label, type, notEmpty }) => {
  const [value, setValue] = useState(null);
  const isValid = validateInput(type, value, notEmpty);
  return (
    <div>
      <label data-testid="input-label">{label}</label>
      <input
        onChange={e => setValue(e.currentTarget.value)}
        data-testid="input-field"
        placeholder={placeholder}
      />
      {!isValid && <div data-testid="input-error">error!</div>}
    </div>
  );
};

export default Input;
