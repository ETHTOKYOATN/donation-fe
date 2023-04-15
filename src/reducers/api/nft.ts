import { hexToDecimal } from './../../utils/utilFunctions';
import { mintNft } from './../module/nft';
import { ethers } from 'ethers';
import { GelatoRelayAdapter } from '@safe-global/relay-kit';
import Safe, { EthersAdapter } from '@safe-global/protocol-kit';
import {
    MetaTransactionData,
    MetaTransactionOptions,
    OperationType,
    RelayTransaction,
} from '@safe-global/safe-core-sdk-types';
import { getMetamaskAddress } from './wallet';
import axios from 'axios';
import { NFT_ABI } from './abi/nft';
import BigNumber from 'bignumber.js';

export const mintingNFT = async (staked: string, lockup: string, goal: string, donation: string) => {
    const { address } = await getMetamaskAddress();
    const iface = new ethers.utils.Interface(NFT_ABI);
    const data = iface.encodeFunctionData('safeMint', [
        address,
        lockup,
        goal,
        new BigNumber(staked).multipliedBy(10 ** 18).toString(),
        '0xF1238CE800C5596DC7F7F2451c901E0fFABb0A53',
    ]);
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');

    const signer = new ethers.Wallet(process.env.REACT_APP_OWNER_1_PRIVATE_KEY ?? '', provider);
    const result = await signer.sendTransaction({
        to: '0x0CC77D19782D5b79C2a7784D0ff0379c9e944994',
        data,
        gasLimit: 1000000,
    });

    return result.hash;

    // Safe from which the transaction will be sent. Replace with your Safe address
    const safeAddress = '0xfad5b9e1192178acec0f9d9e2949e10f19859ba9';
    const chainId = 80001;

    // Any address can be used for destination. In this example, we use vitalik.eth
    const destinationAddress = '0x0CC77D19782D5b79C2a7784D0ff0379c9e944994';

    // Get Gelato Relay API Key: https://relay.gelato.network/
    const GELATO_RELAY_API_KEY = process.env.REACT_APP_GELATO_RELAY_API_KEY;

    // Usually a limit of 21000 is used but for smart contract interactions, you can increase to 100000 because of the more complex interactions.
    const gasLimit = '100000';

    const safeTransactionData: MetaTransactionData = {
        to: destinationAddress,
        data,
        value: '0',
        operation: OperationType.Call,
    };

    const options: MetaTransactionOptions = {
        gasLimit: ethers.BigNumber.from(gasLimit),
        isSponsored: true,
    };

    const relayTransaction = async () => {
        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer,
        });

        const safeSDK = await Safe.create({
            ethAdapter,
            safeAddress,
        });

        const relayAdapter = new GelatoRelayAdapter(GELATO_RELAY_API_KEY);

        //Prepare the transaction
        const safeTransaction = await safeSDK.createTransaction({
            safeTransactionData,
        });

        const signedSafeTx = await safeSDK.signTransaction(safeTransaction);

        const encodedTx = safeSDK
            .getContractManager()
            .safeContract.encode('execTransaction', [
                signedSafeTx.data.to,
                signedSafeTx.data.value,
                signedSafeTx.data.data,
                signedSafeTx.data.operation,
                signedSafeTx.data.safeTxGas,
                signedSafeTx.data.baseGas,
                signedSafeTx.data.gasPrice,
                signedSafeTx.data.gasToken,
                signedSafeTx.data.refundReceiver,
                signedSafeTx.encodedSignatures(),
            ]);

        const relayTransaction: RelayTransaction = {
            target: safeAddress,
            encodedTransaction: encodedTx,
            chainId: chainId,
            options,
        };
        const response = await relayAdapter.relayTransaction(relayTransaction);

        return `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`;
    };

    return relayTransaction();
};

export const getUserNFTIDs = async (address: string): Promise<number[]> => {
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');
    const contract = new ethers.Contract('0x0CC77D19782D5b79C2a7784D0ff0379c9e944994', NFT_ABI, provider);
    const ids: BigNumber[] = await contract.getNftListOfHolder(address);

    return ids.map((item) => item.toNumber());
};

type getAllCharacterType = {
    Watering: BigNumber;
    Date: BigNumber;
    Goal: string;
    CreatedTime: BigNumber;
    Staked: BigNumber;
    DonationContract: string;
};
export const getNFTCharacterData = async (ids: number[]): Promise<any> => {
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');
    const contract = new ethers.Contract('0x0CC77D19782D5b79C2a7784D0ff0379c9e944994', NFT_ABI, provider);
    const promises = ids.map((id) => contract.getAllCharacter(id));
    const result: getAllCharacterType[] = await Promise.all(promises);

    const resultParsed = result.map((item, index) => {
        return {
            id: ids[index] ?? 0,
            staked: new BigNumber(item.Staked.toString()).div(new BigNumber(10 ** 18)).toString(),
            lockup: item.Date.toString(),
            create: item.CreatedTime.toString(),
            goal: item.Goal,
            watered: item.Watering.toString(),
            donation: item.DonationContract,
        };
    });

    return resultParsed;
};

const URL = [
    'https://ipfs.io/ipfs/QmYorvYETjoVbh9SyMQNvLySHoDWWLTHNRrYSHkJWGXSor/1.png',
    'https://ipfs.io/ipfs/QmYorvYETjoVbh9SyMQNvLySHoDWWLTHNRrYSHkJWGXSor/2.png',
    'https://ipfs.io/ipfs/QmYorvYETjoVbh9SyMQNvLySHoDWWLTHNRrYSHkJWGXSor/3.png',
    'https://ipfs.io/ipfs/QmYorvYETjoVbh9SyMQNvLySHoDWWLTHNRrYSHkJWGXSor/4.png',
    'https://ipfs.io/ipfs/QmYorvYETjoVbh9SyMQNvLySHoDWWLTHNRrYSHkJWGXSor/5.png',
];
export const getTokenURIData = async (ids: number[]) => {
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');
    const contract = new ethers.Contract('0x0CC77D19782D5b79C2a7784D0ff0379c9e944994', NFT_ABI, provider);
    const promises = ids.map((id) => contract.tokenURI(id));
    const result: string[] = await Promise.all(promises);

    const resultParsed = result.map((item, index) => {
        const step = URL.indexOf(item);
        return {
            id: ids[index] ?? 0,
            url: item,
            step,
        };
    });

    return resultParsed;
};
