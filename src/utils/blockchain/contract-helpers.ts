import web3Provider from './Web3Provider';

export const getWeb3Contract = (address: string, abi: any) => {
  const web3 = web3Provider;
  return new web3.eth.Contract(abi, address);
};