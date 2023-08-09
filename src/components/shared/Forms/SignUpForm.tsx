import React from 'react';
import { useForm } from 'react-hook-form';
import { Card } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '@/components/base/FormInput';
import FormButton from '@/components/base/Button';

interface SignUpFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
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
      <form onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
        <FormInput
          label="Name"
          type="text"
          placeholder="Name"
          register={methods.register('name')}
          error={errors.name}
        />
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
          <FormButton type="submit" variant="danger" label="SignUp" />
        </div>
      </form>
    </Card>
  );
};

export default SignUpForm;
