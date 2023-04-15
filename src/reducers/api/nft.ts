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
import { NFT_ABI } from './abi/nft';
import axios from 'axios';

export const mintingNFT = async (lockup: string) => {
    const { address } = await getMetamaskAddress();
    const iface = new ethers.utils.Interface(NFT_ABI);
    const data = iface.encodeFunctionData('safeMint', [address, lockup]);
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');

    const signer = new ethers.Wallet(process.env.REACT_APP_OWNER_1_PRIVATE_KEY ?? '', provider);
    const safeAddress = '0xfad5b9e1192178acec0f9d9e2949e10f19859ba9'; // Safe from which the transaction will be sent. Replace with your Safe address
    const chainId = 80001;

    // Any address can be used for destination. In this example, we use vitalik.eth
    const destinationAddress = '0xCd04238667e5AA09193Ad2A293FeDc62cF6d3D9f';
    const withdrawAmount = ethers.utils.parseUnits('0.0005', 'ether').toString();

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

export const getUserNFTData = async (): Promise<typeof USER_NFT_DATA_TMP> => {
    return new Promise((resolve) => {
        resolve(USER_NFT_DATA_TMP);
        return USER_NFT_DATA_TMP;
    });
};

const USER_NFT_DATA_TMP = [
    {
        id: 1,
        staked: '1.5',
        step: '0',
        lockup: '30',
        create: '2023-03-20',
        goal: 'Memorize at least 5 English words',
    },
    {
        id: 2,
        step: '4',
        staked: '4',
        lockup: '30',
        create: '2023-02-30',
        goal: 'Memorize at least 5 English words',
    },
    {
        id: 3,
        step: '2',
        staked: '1.5',
        lockup: '90',
        create: '2023-01-21',
        goal: 'Memorize at least 5 English words',
    },
    {
        id: 4,
        step: '1',
        staked: '3',
        lockup: '90',
        create: '2022-12-21',
        goal: 'Memorize at least 5 English words',
    },
    {
        id: 5,
        step: '3',
        staked: '7',
        lockup: '30',
        create: '2023-03-20',
        goal: 'Memorize at least 5 English words',
    },
];
