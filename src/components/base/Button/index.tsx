import React, { ReactNode } from 'react';
import noop from 'noop-ts';
import { styled } from 'styled-components';
import { ThemeContextType } from '@/contexts/ThemeContext';

interface FormButtonProps {
  type: 'submit' | 'button';
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  label: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = styled.button<{ theme: ThemeContextType['themeStyle'] }>`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  border: 2px solid
    ${(props) => {
      return props.theme.borderColor;
    }};
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;

const FormButton: React.FC<FormButtonProps> = ({ type, variant, label, onClick = noop, children }) => {
  return (
    <Button type={type} onClick={onClick}>
      {label}
      {children}
    </Button>
  );
};

export default FormButton;
