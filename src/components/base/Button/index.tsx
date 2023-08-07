import React from "react";
import noop from "noop-ts";
interface FormButtonProps {
  type: "submit" | "button";
  variant: "primary" | "secondary" | "success" | "danger";
  label: string;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
  type,
  variant,
  label,
  onClick = noop,
}) => {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default FormButton;
