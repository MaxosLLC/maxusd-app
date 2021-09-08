import React from 'react';
import { Header } from '../../components/Header';
import { contracts } from '../../../utils/blockchain/contract.testnet';
import { getWeb3Contract } from '../../../utils/blockchain/contract-helpers';
export function Dashboard() {
    var bankerContract = getWeb3Contract(contracts.banker.address, contracts.banker.abi);
    console.log('bankerContract :', bankerContract.methods);
    return(
        <>
            <Header/>
            <div>asdfade</div>
        </>
    );
}