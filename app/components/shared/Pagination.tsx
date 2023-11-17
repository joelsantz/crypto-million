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
          <PageNavButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            «
          </PageNavButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <PageNumber key={number} onClick={() => paginate(number)}>
              {number}
            </PageNumber>
          ))}
          <PageNavButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            »
          </PageNavButton>
        </PaginationContainer>
      );
  };