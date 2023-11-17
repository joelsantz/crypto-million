import React from 'react';
import styled from 'styled-components';
import { CryptoCurrency } from '../utils';

interface CryptoCardProps {
  crypto: CryptoCurrency;
}

const Card = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 30px;
  width: 200px;
  margin: 10px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to right, #1a1a1a, #161616, #000);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Symbol = styled.h3`
  margin: 0;
  font-weight: bold;
  color: #0992d7;
`;

const Info = styled.p`
  margin: 0;
`;

const ChangeInfo = styled(Info)<{ isPositive: boolean }>`
  color: ${({ isPositive }) => (isPositive ? '#28d709' : '#FF4136')};
  &::after {
    content: "${({ isPositive }) => (isPositive ? ' ↑' : ' ↓')}";
    margin-left: 5px;
  }
`;

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const isChangePositive = !crypto.percent_change_24h.startsWith('-');

  return (
    <Card>
      <Symbol>({crypto.symbol})<Title>{crypto.name}</Title></Symbol>
      <Info>USD Price: ${crypto.price_usd}</Info>
      <ChangeInfo isPositive={isChangePositive}>
        Change 24h: {crypto.percent_change_24h}%
      </ChangeInfo>
    </Card>
  );
}