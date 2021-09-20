import { configureStore } from '@reduxjs/toolkit'
import {ConnectWallet} from '../reducers/wallet.reducer'

export default configureStore({
  reducer: {
    ConnectWallet: ConnectWallet
  },
})
