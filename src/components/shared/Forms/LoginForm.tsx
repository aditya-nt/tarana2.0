import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../base/FormInput';
import FormButton from '../../base/Button';
import { StyledCard, VStack } from '../AppStyles';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

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
    <StyledCard>
      <form onSubmit={handleFormSubmit}>
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
      </form>
    </StyledCard>
  );
};

export default LoginForm;
