import React from 'react';
import styled from 'styled-components';

interface SortByPriceProps {
    sortOrder: string;
    toggleSortOrder: () => void;
    }

const SortByPriceContainer = styled.div`
  display: flex;
  align-self: flex-start;
  cursor: pointer;
  // Añade aquí más estilos según sea necesario
`;

const SortText = styled.span`
  margin-right: 5px;
`;

const SortIcon = styled.span`

`;

const SortByPrice: React.FC<SortByPriceProps>  = ({ sortOrder, toggleSortOrder }) => {
  return (
    <SortByPriceContainer onClick={toggleSortOrder}>
      <SortText>Sort by price</SortText>
      {sortOrder === "highest" ? (
        <SortIcon>📈</SortIcon>
      ) : (
        <SortIcon>📉</SortIcon>
      )}
    </SortByPriceContainer>
  );
};

export default SortByPrice;