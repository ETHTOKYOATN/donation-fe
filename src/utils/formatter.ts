const BALANCE_FORMATTER = 6;

export const balanceFormatter = (value: unknown): number => {
    if (typeof value === 'number' || typeof value === 'string') {
        return parseFloat(Number(value).toFixed(BALANCE_FORMATTER));
    }

    return 0;
};
