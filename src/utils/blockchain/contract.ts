import addressManager from './abi/AddressManager.json';
import banker from './abi/Banker.json';
import maxBanker from './abi/MaxBanker.json';
import ownerOnlyApprover from './abi/OwnerOnlyApprover.json';
import treasury from './abi/Treasury.json';
import usdc from './abi/USDC.json';
import yearUSDCStrategy from './abi/YearnUSDCStrategy.json';


export const contracts = {
    addressManager: {
        address: '0x7E3CFcfb4752Db5e2A418091D889Bec22Ec7a40f',
        abi: addressManager,
    },
    banker: {
        address: '0x4521683F54Fe27C466C49adFf1eB72edD21C00bA',
        abi: banker,
    },
    maxBanker: {
        address: '0xdccC1ccfeAed15d195a65C83586ADbA4874cb43E',
        abi: maxBanker,
    },
    ownerOnlyApprover: {
        address: '0xD31544b4C730d7BeB17F9245fd8d55a617E83876',
        abi: ownerOnlyApprover
    },
    treasury: {
        address: '0xcfC594D9389272780f07f66dD4D7333cB53BeC61',
        abi: treasury
    },
    usdc: {
        address: '0x3B3d53Dd1dc3b100D403EFB07Eb92AA3D29e0756',
        abi: usdc
    },
    yearUSDCStrategy: {
        address: '0x0EC515f35946cFC205e322a9EB8dF7F40F0AA861',
        abi: yearUSDCStrategy
    }
};