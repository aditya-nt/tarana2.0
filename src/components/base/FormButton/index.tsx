import React, { ReactNode } from 'react';
import noop from 'noop-ts';
import { styled } from 'styled-components';

interface FormButtonProps {
  type?: 'submit' | 'button';
  variant ?: 'primary' | 'secondary' | 'success' | 'danger' | 'link';
  label?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  fontSize?: string;
 
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;

const ControlButton = styled(Button)<{ fontSize?: string }>`
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.fontSize || '1.5rem'};
  margin: 0 10px;
  cursor: pointer;
`;

const FormButton: React.FC<FormButtonProps> = ({
  variant,
  label = '',
  onClick = noop,
  children,
 
  ...rest // Collecting remaining props using the spread operator
}) => {
  const ButtonComponent = variant === 'link' ? ControlButton : Button;

  return (
    <ButtonComponent onClick={onClick} {...rest}>
      {label}
      {children}
    </ButtonComponent>
  );
};

export default FormButton;
