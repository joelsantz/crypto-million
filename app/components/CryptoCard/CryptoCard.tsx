import React from 'react';
import styled from 'styled-components';
import { CryptoCurrency } from '../utils';

interface CryptoCardProps {
  crypto: CryptoCurrency;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
`;

const Info = styled.p`
  color: #666;
`;

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  return (
    <Card>
      <Title>{crypto.name} ({crypto.symbol})</Title>
      <Info>USD Price: ${crypto.price_usd}</Info>
      <Info>Change 24h: {crypto.percent_change_24h}%</Info>
    </Card>
  );
}