import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  error: any;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, register, error }) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        {...register}
        placeholder={placeholder}
      />
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default FormInput;