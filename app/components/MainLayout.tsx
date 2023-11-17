import React from 'react';
import { NavBar, Footer } from './shared';
import { GlobalCryptoStats } from './GlobalCryptoStats';
import { styled } from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  margin-top: 40px;
`;

interface MainLayoutProps {
    children: React.ReactNode;
  }
  
  export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <>
        <NavBar />
        <Layout>
          <GlobalCryptoStats />
        <main>{children}</main>
        </Layout>
        <Footer />
      </>
    );
  };