import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";

const TextFieldExample = () => {
  const [value, setValue] = useState("Jaded Pixel");

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );

  return (
    <TextField
      label={`Store name ${value}`}
      value={value}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};

export default TextFieldExample;
