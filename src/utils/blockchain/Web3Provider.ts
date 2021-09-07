import Web3 from 'web3';
import { rpcProvider } from './../classifiers';
var web3Provider = new Web3(rpcProvider['4']+process.env.INFURA_KEY)
export default web3Provider;
