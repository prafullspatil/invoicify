import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const TextFieldExample = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("Jaded Pixel");

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );

  return (
    <TextField
      label={t("components.text_field.store_name")}
      value={value}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};

export default TextFieldExample;
