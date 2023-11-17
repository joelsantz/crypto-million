import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 25px;
  margin-top: 30px;
  border-top: 1px solid #ddd;
  background-color: #ddd;
`;

const FooterText = styled.p`
  margin: 0;
  color: #393939;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Made by Joel Santana for Million and Up Technical Test</FooterText>
    </FooterContainer>
  );
};
