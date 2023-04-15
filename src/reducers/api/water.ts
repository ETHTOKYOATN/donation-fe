import { ethers } from 'ethers';
import {
    MetaTransactionData,
    MetaTransactionOptions,
    OperationType,
    RelayTransaction,
} from '@safe-global/safe-core-sdk-types';
import Safe, { EthersAdapter } from '@safe-global/protocol-kit';
import { GelatoRelayAdapter } from '@safe-global/relay-kit';
import { NFT_ABI } from './abi/nft';
import BigNumber from 'bignumber.js';

export const wateringToTree = async (id: number) => {
    const iface = new ethers.utils.Interface(NFT_ABI);
    const data = iface.encodeFunctionData('increaseWatering', [id]);
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');
    const signer = new ethers.Wallet(process.env.REACT_APP_OWNER_1_PRIVATE_KEY ?? '', provider);
    const safeAddress = '0xfad5b9e1192178acec0f9d9e2949e10f19859ba9';
    const chainId = 80001;
    const destinationAddress = '0x0CC77D19782D5b79C2a7784D0ff0379c9e944994';
    const GELATO_RELAY_API_KEY = process.env.REACT_APP_GELATO_RELAY_API_KEY;
    const gasLimit = '100000';

    // const result = await signer.sendTransaction({
    //     to: destinationAddress,
    //     data,
    //     gasLimit,
    // });

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

export const getWateringDates = async (id: number): Promise<string[]> => {
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-testnet-rpc.allthatnode.com:8545');
    const contract = new ethers.Contract('0x0CC77D19782D5b79C2a7784D0ff0379c9e944994', NFT_ABI, provider);
    const result = await contract.getWateringDate(id);
    const resultParse: string[] = result.map((date: BigNumber) => {
        const day = new Date(date.toNumber() * 1000);
        return day.toISOString().split('T')[0];
    });
    const resultRemoveDuplicates = [...new Set(resultParse)];
    return resultRemoveDuplicates;
};
