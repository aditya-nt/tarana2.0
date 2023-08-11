import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/components/base/FormInput';
import FormButton from '@/components/base/Button';
import { StyledCard, VStack } from '@/components/shared/AppStyles';
import { styled } from 'styled-components';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const Card = styled.div`
  width: 600px;
  padding: 1.5rem;
  border: 2px solid rgb(65, 65, 65);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    ...methods
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Card>
      <Form onSubmit={handleFormSubmit}>
        <VStack.colg1>
          <h3>Sign In</h3>
          <FormInput
            label="Email address"
            type="email"
            placeholder="Email"
            register={methods.register('email')}
            error={errors.email}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter password"
            register={methods.register('password')}
            error={errors.password}
          />
          <div className="d-grid">
            <FormButton type="submit" variant="danger" label="Login" />
          </div>
        </VStack.colg1>
      </Form>
    </Card>
  );
};

export default LoginForm;
