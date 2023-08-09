import React from 'react';
import AuthStatus from '../../components/custom/AuthStatus';
import { StyledCard, VStack } from '../../components/shared/AppStyles';

const DashboardPage = () => {
  return (
    <StyledCard>
      <VStack.col>
        <AuthStatus />
      </VStack.col>
    </StyledCard>
  );
};

export default DashboardPage;
