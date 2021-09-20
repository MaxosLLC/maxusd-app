import React, { useState } from 'react'
import { Navbar,Container, Nav, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import WalletConnectActions from '../../../actions/wallet.actions'
export function Header() {
    const [connectionTried, setConnectionTried] = useState(false)
    const dispatch = useDispatch()
    const connectMetamask = async () => {
      if (window.ethereum === undefined) {
        return;
      }
      await window.ethereum.enable();
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
        console.log('handler for disconnection', error)
      })
      window.ethereum.on('accountsChanged', (accounts: any) => {
        if (accounts.length === 0) {
          // handle when no account is connected
          dispatch(WalletConnectActions.disconnectWallet())
          console.log('disconnected')
        }
      })
    //   let provider = new ethers.providers.Web3Provider(window.ethereum)
    //   let chainId = (await provider.getNetwork()).chainId
    //   let accounts = await provider.listAccounts()
    //   let account = accounts[0]
    //   dispatch(WalletConnectActions.setAccount(account))
    //   return chainId
    }
  
    const handleWalletConnect = async () => {
    //   if (isConnected) {
    //     dispatch(WalletConnectActions.setAccount(''))
    //     dispatch(WalletConnectActions.disconnectWallet())
    //     // handle disconnect here
    //   } else {
    //     // handle connect here
    //     let chainId = await connectMetamask()
    //     if (chainId !== DestNet.ChainID) {
    //       console.log('not connected to Opera Network')
    //       dispatch(WalletConnectActions.connectWallet(chainId))
    //     } else {
    //       console.log('connected')
    //       dispatch(WalletConnectActions.connectWallet(chainId))
    //     }
    //   }
    }
  
    if (!connectionTried) {
      setConnectionTried(true)
      handleWalletConnect()
    }
  
    // const isConnected = useSelector((state) => state.ConnectWallet.isConnected)
    // const account = useSelector((state) => state.ConnectWallet.account)    
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
                    <Button variant="info" size="lg">
                        Connect Wallet
                    </Button>{' '}
                </Container>
            </Navbar>
        </>
    )
}