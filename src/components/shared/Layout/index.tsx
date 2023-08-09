import { Outlet } from 'react-router-dom';
import { Container, VStack } from '@/components/shared/AppStyles';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import React from 'react';

function Layout() {
  return (
    <VStack.colg2>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </VStack.colg2>
  );
}

export default Layout;
