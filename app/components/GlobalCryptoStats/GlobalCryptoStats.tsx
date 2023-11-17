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
  width: 100%;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding-top: 10px;
  margin-top: 20px;
  flex-basis: calc(25% - 20px);
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: calc(50% - 20px);
  }
`;

const Title = styled.h4`
  margin: 0;
  color: #333;
`;

const Value = styled.p`
  color: #666;
`;

export const GlobalCryptoStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.globalCrypto
  );

  useEffect(() => {
    dispatch(fetchGlobalCryptoData());
  }, [dispatch]);

  console.log(data);

  if (loading) return <div>Cargando datos globales...</div>;
  if (error) return <div>Error al cargar datos globales</div>;
  

  return (
    <>
      <h2>Global Stats</h2>
      <CardsContainer>
        {data && (
          <>
            <Card>
              <Title>Total Coins</Title>
              <Value>{data.coins_count}</Value>
            </Card>
            <Card>
              <Title>Active Markets</Title>
              <Value>{data.active_markets}</Value>
            </Card>
            <Card>
              <Title>Total Market Cap</Title>
              <Value>${data.total_mcap}</Value>
            </Card>
            <Card>
              <Title>Total Volume</Title>
              <Value>${data.total_volume}</Value>
            </Card>
          </>
        )}
      </CardsContainer>
    </>
  );
};