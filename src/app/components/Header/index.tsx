import React, { useState } from 'react';
import { Navbar,Container, Nav, Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import { useSelector, useDispatch } from 'react-redux';
import WalletConnectActions from '../../../actions/wallet.actions';
import Web3 from 'web3';
export function Header() {
    const [connection, setConnection] = useState(false);
    const [isChain, setCorrectChain] = useState(false);

    const [metaAccount, setMetaAccount] = useState('Connect Wallet');
    const [accountAddress, setAddress] = useState('');
    const dispatch = useDispatch()
    // const isConnected = useSelector((state) => state.isConnected)
    // const account = useSelector((state) => state.ConnectWallet.account)   
    const connectMetamask = async () => {
      if (window.ethereum === undefined) {
        return;
      }
      console.log(window.ethereum)
      await window.ethereum.enable();
      let provider = new Web3(window.ethereum)
      let chainId = await provider.eth.getChainId();
      let accounts = await provider.eth.getAccounts();

      //   handle network change & disconnect here
      window.ethereum.on('chainChanged', (_chainId:any) => {
        //   handle chainId change
        dispatch(WalletConnectActions.changeChainId(_chainId))
        dispatch(WalletConnectActions.setAccount(''))
        console.log('chainid is changed to ', _chainId)
      })
      window.ethereum.on('disconnect', (error: any) => {
        //   handle disconnect
        dispatch(WalletConnectActions.disconnectWallet())
        dispatch(WalletConnectActions.setAccount(''))
        setMetaAccount("Connect Wallet");
        console.log('handler for disconnection', error)
      })
      window.ethereum.on('accountsChanged', (accounts: any) => {
        if (accounts.length === 0) {
          // handle when no account is connected
          dispatch(WalletConnectActions.disconnectWallet())
          console.log('disconnected')
        } else {
          let account = accounts[0];
          setAddress(account);
          const length = account.length;
          setMetaAccount(account.substring(0,5)+'...'+account.substring(length-4,length));
          dispatch(WalletConnectActions.setAccount(account))
        }
      })

      // setMetaAccount(account.substr(0,6));
      // console.log('chainId: ', chainId);
      // console.log('account: ', account);
      dispatch(WalletConnectActions.setAccount(accounts[0]))
      return chainId
    }
  
    const handleWalletConnect = async () => {
      let provider = new Web3(window.ethereum)
      let chainId = await provider.eth.getChainId();
      let accounts = await provider.eth.getAccounts();
      let account = accounts[0];
      setCorrectChain(false);

      if (connection === false) {
        console.log(metaAccount.substring(0,5));
        setAddress(account);
        const length = account.length;
        setMetaAccount(account.substring(0,5)+'...'+account.substring(length-4,length));
        // setMetaAccount(account);

        let chainId = await connectMetamask()
        dispatch(WalletConnectActions.connectWallet(chainId))  
        setConnection(true);
      } else {
        setAddress('');
        setMetaAccount("Connect Wallet");
        setConnection(false);
      }
    }
  
    // if (!connectionTried) {
    //   setConnectionTried(true)
    //   handleWalletConnect()
    // }
    // const closeAlert = () => setCorrectChain(!isChain);
 
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src="https://assets.website-files.com/60994c647265c8170c7f6576/609d518beea2436b274cf1c7_Maxos_Logo-White.svg" loading="eager" width="126" alt="" className="logo-nav"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="assets">Assets</Nav.Link>
                        <Nav.Link href="settings">Settings</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Button variant="info" size="lg" onClick={handleWalletConnect}>
                      {!connection&&metaAccount}
                      {connection&&metaAccount}
                    </Button>{' '}
                </Container>
            </Navbar>
        </>
    )
}