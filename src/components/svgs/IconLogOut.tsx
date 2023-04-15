type IconLogOutProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconLogOut = (props: IconLogOutProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '25'}
            height={height || '25'}
            viewBox="0 0 25 25"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_16_1312)">
                <path
                    d="M17.0793 7.69568L15.6693 9.10568L18.2493 11.6957H8.07935V13.6957H18.2493L15.6693 16.2757L17.0793 17.6957L22.0793 12.6957L17.0793 7.69568ZM4.07935 5.69568H12.0793V3.69568H4.07935C2.97935 3.69568 2.07935 4.59568 2.07935 5.69568V19.6957C2.07935 20.7957 2.97935 21.6957 4.07935 21.6957H12.0793V19.6957H4.07935V5.69568Z"
                    fill={fill || '#86614D'}
                />
            </g>
            <defs>
                <clipPath id="clip0_16_1312">
                    <rect width="24" height="24" fill="white" transform="translate(0.0793457 0.695679)" />
                </clipPath>
            </defs>
        </svg>
    );
};
