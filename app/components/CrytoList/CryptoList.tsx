"use client";
import { getCryptos } from '@/app/store/slices/cryptoSlice';
import { AppDispatch } from '@/app/store/store';
import { RootState } from '@/app/store/utils';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoCard } from '../CryptoCard';
import styled from 'styled-components';
import { CryptoSearch } from '../CryptoSearch';
import { CryptoCurrency } from '../utils';
import { GlobalCryptoStats } from '../GlobalCryptoStats';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const CryptoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
  width: 100%; 

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const CryptoList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cryptos, loading, error } = useSelector((state: RootState) => state.cryptos);
    const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrency[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getCryptos());
    }, [dispatch]);

    useEffect(() => {
        const filtered = cryptos.filter(crypto =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCryptos(filtered);
      }, [cryptos, searchTerm]);
    
      const handleSearch = (term: string) => {
        setSearchTerm(term);
      };

    if (loading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainContainer>
        <GlobalCryptoStats />
        <CryptoSearch onSearch={(term) => handleSearch(term)} />
            <CryptoContainer>
                {filteredCryptos.map(crypto => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
            </CryptoContainer>
        </MainContainer>
    );
}
