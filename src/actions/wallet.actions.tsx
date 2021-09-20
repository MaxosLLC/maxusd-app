import { WalletConnectConstants } from '../constants/wallet.connection';
import { Dispatch } from 'redux';

const WalletConnectActions = {
  connectWallet,
  disconnectWallet,
  changeChainId,
  setAccount,
};

function connectWallet(chainId: any) {
  return (dispatch: Dispatch) => {
    dispatch(_connectWallet(chainId));
  };
}

const _connectWallet = (chainId: any) => {
  return {
    type: WalletConnectConstants.WALLETCONNECTED,
    chainId: chainId,
  };
};

function disconnectWallet() {
  return (dispatch: Dispatch) => {
    dispatch(_disconnectWallet());
  };
}

const _disconnectWallet = () => {
  return {
    type: WalletConnectConstants.WALLETDISCONNECTED,
  };
};

function changeChainId(chainId: any) {
  return (dispatch: Dispatch) => {
    dispatch(_changeChainId(chainId));
  };
}

const _changeChainId = (chainId:any) => {
  return {
    type: WalletConnectConstants.CHAINCHANGED,
    chainId: chainId,
  };
};

function setAccount(account: any) {
  return (dispatch: Dispatch) => {
    dispatch(_setAccount(account));
  };
}

const _setAccount = (account:any) => {
  return {
    type: WalletConnectConstants.ACCOUNTCHANGED,
    account: account,
  };
};

export default WalletConnectActions;
