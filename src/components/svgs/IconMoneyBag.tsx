type IconMoneyBagProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconMoneyBag = (props: IconMoneyBagProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '56'}
            height={height || '74'}
            viewBox="0 0 56 74"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.3">
                <path
                    d="M14.8766 25.1732C12.5058 28.8477 9.54512 32.0686 7.25375 35.8111C4.17968 40.8352 1.38919 48.4224 0.719933 54.3765C-0.822771 68.0766 14.7064 73.0553 25.5734 73.4749C32.9353 73.7584 41.0458 72.7831 47.727 69.5849C53.7957 66.6816 55.2023 60.478 55.3725 54.3085C55.7355 40.9373 49.542 27.9971 37.6881 21.476C38.3461 19.1737 38.5162 16.8261 37.552 14.5919C37.518 14.5012 37.4613 14.4558 37.4046 14.3878C38.5049 12.9475 38.7885 10.7473 37.7675 7.33359C37.5974 6.75519 36.8033 6.33562 36.2589 6.7439C35.8278 7.06145 33.094 9.51113 32.334 8.37702C31.9256 7.7646 31.7101 7.00472 31.3471 6.36962C30.6552 5.16747 29.3054 4.6571 27.9782 4.57771C24.4504 4.36223 20.9906 5.42828 18.0527 2.86519C17.0545 1.99193 16.0222 0.767117 14.6497 0.483589C12.1655 -0.0154189 11.3147 4.04467 11.8705 5.70047C13.1864 9.59046 16.181 12.5732 18.1321 16.1229C18.0867 16.225 18.0527 16.3498 18.0413 16.4972C17.9846 18.0283 17.9165 19.5026 18.0073 20.9996C16.6801 22.1224 15.8067 23.7328 14.8766 25.1845V25.1732ZM53.3193 52.5505C53.4101 58.051 52.9223 63.3473 48.1694 66.9765C43.7909 70.3221 37.0529 70.7757 31.8009 71.2407C25.3352 71.8191 18.79 71.3881 12.6646 69.0178C9.6926 67.8724 7.20838 65.7516 5.20059 63.3246C0.595169 57.7561 3.40835 51.4278 5.49553 45.4511C7.3672 40.0754 9.6132 35.5049 13.0956 30.9571C14.8992 28.5868 16.9751 24.2885 19.3799 22.4966C21.8754 22.5647 24.3596 22.5194 26.8552 22.406C29.4982 22.2925 32.2206 21.7141 34.8636 22.0317C34.943 22.2358 35.0905 22.4286 35.34 22.542C46.8763 28.1559 53.1038 40.0186 53.3193 52.5505ZM35.8164 15.726C36.3836 17.121 36.2589 18.6861 35.9186 20.1264C33.9562 19.7861 32.0278 19.9222 30.02 20.1264C26.6964 20.4553 23.3387 20.5687 19.9924 20.4666C19.947 19.5139 19.9811 18.5726 20.0151 17.62C24.768 16.7013 31.9824 17.8241 35.8051 15.7147L35.8164 15.726ZM15.4777 3.28481C16.1243 3.8065 16.7142 4.39626 17.3267 4.94063C18.8581 6.27888 21.07 6.58512 23.0211 6.7439C24.2916 6.85731 25.6414 6.5964 26.9119 6.5397C29.7137 6.43763 29.6116 7.94604 30.8367 9.77195C32.1525 11.734 34.4893 10.4978 36.1567 9.32963C36.9394 13.6733 34.3985 15.0229 29.8045 15.2043C29.1012 15.227 28.3979 15.2384 27.6832 15.227C28.3638 14.3878 29.0218 13.5259 29.691 12.6753C30.3943 11.768 28.897 10.5091 28.137 11.371C27.3203 12.3123 26.6056 13.3444 25.8116 14.297C25.562 14.6032 25.5394 14.9208 25.6414 15.2043C25.3238 15.2043 24.9948 15.2043 24.6772 15.2043C25.0175 15.0342 25.2784 14.7053 25.2557 14.2176C25.199 13.0382 24.836 11.8927 24.8133 10.7019C24.7906 9.3977 22.7035 9.55645 22.7829 10.8834C22.8509 12.0969 23.2026 13.2537 23.2366 14.4672C23.2366 14.8528 23.4294 15.0796 23.6903 15.2157C22.5106 15.2383 21.3309 15.3291 20.1512 15.5219C18.461 12.2897 16.0109 9.46575 14.298 6.23353C13.6855 5.07674 13.4359 1.59503 15.5118 3.26217L15.4777 3.28481Z"
                    fill={fill || 'black'}
                />
                <path
                    d="M28.783 42.7186C28.9305 39.2142 29.18 35.7212 29.6565 32.2848C31.0063 31.9332 32.4129 31.8312 33.5359 31.9786C34.8404 32.1601 35.192 30.13 33.8875 29.9712C32.6398 29.8125 31.3126 29.8351 30.0081 30.0393C30.1783 29.0413 30.3598 28.0432 30.5866 27.0452C30.8362 25.9225 28.9192 25.4688 28.6129 26.5803C28.2612 27.8618 28.023 29.2001 27.8302 30.561C23.9848 31.8312 21.2056 34.8253 23.4062 39.3504C24.257 41.1082 25.5956 42.6053 27.0021 44.0342C27.0021 44.1476 26.9908 44.2723 26.9794 44.3971C26.6505 49.2057 26.503 54.0597 26.1287 58.8797C23.1454 58.5962 20.3662 57.0424 20.0713 54.2525C19.9351 52.9483 17.8934 53.0957 18.0408 54.3999C18.4265 58.0858 22.045 60.354 25.9698 60.9211C25.8564 62.1346 25.743 63.3367 25.5842 64.5389C25.4254 65.8431 27.4672 65.8318 27.626 64.5389C27.7735 63.3934 27.8869 62.2253 27.989 61.0685C31.5282 61.0458 34.9198 59.6282 36.0542 56.6115C37.3927 53.0504 33.7741 48.3212 31.6643 45.8034C30.7568 44.726 29.7699 43.728 28.7943 42.73L28.783 42.7186ZM25.8904 39.4864C23.5991 36.4924 25.0851 34.3035 27.5466 33.0673C27.3197 35.6985 27.2516 38.375 27.1495 40.9835C26.7185 40.5071 26.2875 40.0081 25.8904 39.4864ZM28.1478 58.8683C28.4427 54.502 28.5221 50.0903 28.6696 45.6786C29.4069 46.4158 30.1329 47.153 30.7794 47.9242C36.5759 54.8309 32.7645 58.4147 28.1478 58.8683Z"
                    fill={fill || 'black'}
                />
            </g>
        </svg>
    );
};
