import React from 'react';
import noop from 'noop-ts';
import { styled } from 'styled-components';
interface FormButtonProps {
  type: 'submit' | 'button';
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  label: string;
  onClick?: () => void;
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;

const FormButton: React.FC<FormButtonProps> = ({ type, variant, label, onClick = noop }) => {
  return (
    <Button type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

export default FormButton;
