import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px 0;
  
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
`;

export interface CryptoSearchProps {
  onSearch: (searchTerm: string) => void;
}

export const CryptoSearch: React.FC<CryptoSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};