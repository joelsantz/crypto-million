import React from 'react';
import { NavBar, Footer } from './shared';
import { GlobalCryptoStats } from './GlobalCryptoStats';

interface MainLayoutProps {
    children: React.ReactNode;
  }
  
  export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <>
        <NavBar />
        <GlobalCryptoStats />
        <main>{children}</main>
        <Footer />
      </>
    );
  };