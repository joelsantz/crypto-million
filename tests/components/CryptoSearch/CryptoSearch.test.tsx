import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CryptoSearch } from '@/app/components/CryptoSearch/CryptoSearch';

describe('CryptoSearch', () => {
  it('renders the input field', () => {
    render(<CryptoSearch onSearch={jest.fn()} />);

    expect(screen.getByPlaceholderText(/Search by currency name.../i)).toBeInTheDocument();
  });

  it('calls the onSearch function when typing', () => {
    const handleSearchMock = jest.fn();
    render(<CryptoSearch onSearch={handleSearchMock} />);

    const input = screen.getByPlaceholderText(/Search by name.../i);
    const value = 'bitcoin';

    fireEvent.change(input, { target: { value } });
    
    expect(handleSearchMock).toHaveBeenCalledWith(value);
  });

});