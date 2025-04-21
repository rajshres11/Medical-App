import React from 'react';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
      <Footer/>
    </>
  );
};

export default Layout;
