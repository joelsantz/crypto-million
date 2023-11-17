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
  margin-left: 50px;
`;

const SortText = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const SortIcon = styled.span`
  font-weight: regular;
`;

export const SortByPrice: React.FC<SortByPriceProps>  = ({ sortOrder, toggleSortOrder }) => {
  return (
    <SortByPriceContainer onClick={toggleSortOrder}>
      <SortText>Sort by price USD:</SortText>
      {sortOrder === "highest" ? (
        <SortIcon>High ⬆️</SortIcon>
      ) : (
        <SortIcon>Low ⬇️</SortIcon>
      )}
    </SortByPriceContainer>
  );
};
