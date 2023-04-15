import { isDefined } from '@/utils/typeguard';

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
