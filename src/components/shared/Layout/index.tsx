import { Outlet } from 'react-router-dom';
import { Container, VStack } from '@/components/shared/AppStyles';

import Header from '@/components/shared/Header';
import React from 'react';

function Layout() {
  return (
    <VStack.colg2>
      <Header />
      <Outlet />
    </VStack.colg2>
  );
}

export default Layout;
