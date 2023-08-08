import { noop } from '@babel/types';
import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  error: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, register, error, onChange = noop }) => {
  return (
    <div style={{ width: '100%' }}>
      <label>{label}</label>
      <input type={type} className="form-control" {...register} placeholder={placeholder} onChange={onChange} />
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default FormInput;
