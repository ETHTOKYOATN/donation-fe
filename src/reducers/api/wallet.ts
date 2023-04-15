import axios from 'axios';
import BigNumber from 'bignumber.js';

import { isDefined } from '@/utils/typeguard';
import { hexToDecimal } from '@/utils/utilFunctions';

export const getMetamaskAddress = async () => {
    const { ethereum } = window;
    if (!ethereum) throw new Error('Failed to detect wallet or browser.');
    try {
        const addresses = await ethereum.request<string[]>({ method: 'eth_requestAccounts' });
        if (!Array.isArray(addresses)) throw new Error('The value returned is not of the correct type.');
        const address = addresses.filter(isDefined).shift();
        if (!address) throw new Error('The returned value was returned as an empty array.');
        return {
            wallet: 'metamask',
            address,
        };
    } catch (error) {
        throw new Error('Unknown error is occured.');
    }
};

type GetBalanceType = {
    id: number;
    jsonrpc: string;
    result: string;
};
export const getMetamaskAddressBalance = async () => {
    const { address } = await getMetamaskAddress();

    const result = await axios.post<GetBalanceType>(
        'https://ethereum-mainnet-rpc.allthatnode.com/',
        {
            jsonrpc: '2.0',
            method: 'eth_getBalance',
            params: [address, 'latest'],
            id: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    const { result: balanceHex } = result?.data ?? { result: '0x0' };
    const balanceDecimal = hexToDecimal(balanceHex);
    const balance = new BigNumber(balanceDecimal).div(Math.pow(10, 18)).toString();

    return balance;
};
