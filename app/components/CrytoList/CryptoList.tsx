"use client";
import { getCryptos } from '@/app/store/slices/cryptoSlice';
import { AppDispatch } from '@/app/store/store';
import { RootState } from '@/app/store/utils';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const CryptoList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cryptos, loading, error } = useSelector((state: RootState) => state.cryptos);

    useEffect(() => {
        dispatch(getCryptos());
    }, [dispatch]);

    if (loading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {cryptos.map(crypto => (
                <div key={crypto.id}>{crypto.name}</div>
            ))}
        </div>
    );
}
