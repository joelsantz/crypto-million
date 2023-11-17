import React from 'react';
import { render, screen } from '@testing-library/react';
import { CryptoCard } from '../../../app/components/CryptoCard/CryptoCard';


describe('CryptoCard', () => {
  it('renders the cryptocurrency information', () => {
    const cryptoMock = {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price_usd: '50000',
      percent_change_24h: '5'
    };

    render(<CryptoCard crypto={cryptoMock} />);

    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('USD Price: $50000')).toBeInTheDocument();
    expect(screen.getByText('Change 24h: 5%')).toBeInTheDocument();
  });
});