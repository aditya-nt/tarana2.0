import { noop } from '@babel/types';
import React from 'react';
import { styled } from 'styled-components';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  register?: any;
  error?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  border: 2px solid ${props => props.theme.borderColor};
  padding: 0.5rem;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    // background: rgb(65, 65, 65);
    // color: white;
  }

  &:focus {
    border-color: rgb(65, 65, 65);
    box-shadow: 0 0 5px rgba(65, 65, 65, 0.5);
  }
`;

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, register, error, onChange = noop }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput type={type} {...register} placeholder={placeholder} onChange={onChange} />
      {error && <p className="text-danger">{error.message}</p>}
    </InputWrapper>
  );
};

export default FormInput;
