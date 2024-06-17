import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { VStack } from '../AppStyles';
import FormInput from '@/components/base/FormInput';
import FormButton from '@/components/base/FormButton';
import { useTranslation } from 'react-i18next';


interface LoginFormProps {
  onSubmit: SubmitHandler<{ email: string; password: string }>;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});


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

// interface LoginFormProps {
//   onSubmit: (data: { email: string; password: string }) => void;
// }

// const Card = styled.div`
//   width: 600px;
//   padding: 1.5rem;
//   border: 2px solid rgb(65, 65, 65);
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const schema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string().required('Password is required'),
// });

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit: SubmitHandler<{ email: string; password: string }> = (data) => {
    onSubmit(data);
  };

  return (
    <StyledCard>
      
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <VStack.colg1>
        <h3>{t('sign_in')}</h3>
          <FormInput
           label={t('email_address')}
            type="email"
            placeholder="Email"
            register={register('email')}
            error={errors.email}
          />

          <FormInput
            label={t('password')}
            type="password"
            placeholder="Enter password"
            register={register('password')}
            error={errors.password}
          />
          <div className="d-grid">           
             <FormButton type="submit" variant="danger" label={t('log_in')} />
          
          </div>
        </VStack.colg1>
      </Form>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  border: 2px solid ${(props) => props.theme.borderColor};
`;

export default LoginForm;
