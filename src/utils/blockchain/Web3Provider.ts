import Web3 from 'web3';
import { rpcProvider } from './../classifiers';
console.log(process.env)
var web3Provider = new Web3(rpcProvider['4']+"8b93e2f68f7f488888e6255ed3235d5c")
export default web3Provider;
