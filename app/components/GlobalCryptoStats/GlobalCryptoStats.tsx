import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/utils';
import { fetchGlobalCryptoData } from '@/app/store/slices/globalCryptoSlice';
import { AppDispatch } from '@/app/store/store';
import styled from 'styled-components';


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  border-radius: 8px;
  padding: 10px 0;
  padding-bottom: 10px;
  margin-top: 20px;
  flex-basis: calc(25% - 20px);
  text-align: center;
  background-image: linear-gradient(to bottom, #1a1a1a, #161616, #000);

  @media (max-width: 768px) {
    flex-basis: calc(90% - 20px);
  }

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.8em;
`;

const Value = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  color: #9b9b9b;
    &:hover {
    color: #28d709;
    transition: all 0.3s ease-in-out;
  }
`;

export const GlobalCryptoStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.globalCrypto
  );

  useEffect(() => {
    dispatch(fetchGlobalCryptoData());
  }, [dispatch]);

  if (loading) return <div>Loading global info...</div>;
  if (error) return <div>Error loading global info.</div>;
  

  return (
    <>
      <CardsContainer>
        {data && (
          <>
            <Card>
              <Title>Total Coins  🪙</Title>
              <Value>{data.coins_count}</Value>
            </Card>
            <Card>
              <Title>Active Markets  🛍️</Title>
              <Value>{data.active_markets}</Value>
            </Card>
            <Card>
              <Title>Total Market Cap 💰</Title>
              <Value>${data.total_mcap}</Value>
            </Card>
            <Card>
              <Title>Total Volume 📊</Title>
              <Value>${data.total_volume}</Value>
            </Card>
          </>
        )}
      </CardsContainer>
    </>
  );
};