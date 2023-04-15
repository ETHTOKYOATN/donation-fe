export const mintingNFT = async () => {
    return new Promise((resolve) => {});
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
        id: 4,
        step: '3',
        staked: '7',
        lockup: '30',
        create: '2023-03-20',
        goal: 'Memorize at least 5 English words',
    },
];
