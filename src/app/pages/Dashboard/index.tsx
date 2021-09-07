import React from 'react';
import { Header } from '../../components/Header';
import web3Provider from '../../../utils/blockchain/Web3Provider';
export function Dashboard() {
    console.log('web3prvider:', web3Provider);
    return(
        <>
            <Header/>
            <div>asdfade</div>
        </>
    );
}