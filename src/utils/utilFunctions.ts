export const shortenAddress = (address: string, chars = 4): string => {
    return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};

export const hexToDecimal = (hex: string) => parseInt(hex, 16);

export const delay = (time: number) => new Promise((response) => setTimeout(response, time));
