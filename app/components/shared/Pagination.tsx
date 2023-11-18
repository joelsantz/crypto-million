import React from "react"
import { styled } from "styled-components";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageNumber = styled.a`
  margin: 0 10px;
  cursor: pointer;
`;

const PageNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Pagination:React.FC<PaginationProps>  = ({ totalPages, currentPage, paginate }) => {
    return (
        <PaginationContainer>
          {/* Button for navigating to the previous page. Disabled on the first page. */}
          <PageNavButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <span>«</span>
          </PageNavButton>
          {/* Render page numbers dynamically based on the total number of pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <PageNumber key={number} onClick={() => paginate(number)}>
              {number}
            </PageNumber>
          ))}
          {/* Button for navigating to the next page. Disabled on the last page. */}
          <PageNavButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            <span>»</span>
          </PageNavButton>
        </PaginationContainer>
      );
  };