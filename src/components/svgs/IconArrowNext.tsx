type IconArrowNextProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconArrowNext = (props: IconArrowNextProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '45'}
            height={height || '25'}
            viewBox="0 0 45 25"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M42.2392 10.8395C43.0051 10.9897 43.8415 11.0856 44.8589 11.4458C41.2539 13.056 37.6066 14.1157 34.1458 15.884C33.9843 15.7616 33.2867 15.3794 33.3865 16.2669C28.3636 18.1618 23.5661 21.0492 19.2368 24.4283C18.7865 21.0747 19.7129 16.9748 20.514 14.2273C19.7219 13.4021 18.462 13.5426 17.772 13.7825C12.6927 15.4293 7.99044 17.391 2.37337 17.2317C2.24878 17.2155 1.41018 16.9419 1.4264 16.8172C1.03059 14.9916 0.873926 12.3987 1.36423 10.384C0.909036 9.50108 1.11774 7.70319 0.5 6.60908C6.29804 7.03271 12.2933 7.5959 18.0674 7.52216C18.3339 7.51876 19.1942 8.11207 19.2189 7.24083C19.8201 7.00208 20.0616 6.41242 19.7159 5.7592C19.5338 5.40604 20.2551 4.82812 19.8608 4.54877C19.5379 4.30406 18.4512 4.0869 18.3775 3.87455C17.9223 2.99166 17.0967 2.3268 16.9198 0.960449C24.1844 5.00904 34.1692 9.18291 42.2923 10.821L42.2392 10.8395Z"
                fill={fill || '#FAECC9'}
            />
        </svg>
    );
};
