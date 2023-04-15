type IconCoinStackProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconCoinStack = (props: IconCoinStackProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '67'}
            height={height || '72'}
            viewBox="0 0 67 72"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.3">
                <path
                    d="M55.5766 57.2663C55.5766 59.1949 55.5766 60.99 55.5766 62.7883C55.5766 63.0902 55.5703 63.392 55.5766 63.6939C55.602 65.8607 54.6774 67.1698 52.5487 68.0181C47.4365 70.0611 42.178 71.0556 36.6909 71.0746C30.0345 71.1001 23.4894 70.2644 16.9855 68.895C13.9798 68.2628 10.9583 67.7671 8.08292 66.6169C5.39178 65.543 3.87305 63.5413 4.03191 60.6659C4.13994 58.6897 4.57837 56.7357 4.78807 54.7626C4.96917 53.0469 6.08436 52.2684 7.53955 51.7918C8.05108 51.6234 8.59126 51.5504 9.09645 51.4392C8.60715 49.3295 8.13054 47.2642 7.64124 45.1609C6.35127 44.4174 4.93419 43.6485 3.56479 42.797C1.9571 41.7994 1.21045 40.2902 1.10877 38.4156C0.994392 36.3726 0.902294 34.3264 0.676709 32.2962C0.495605 30.6631 1.05478 29.3858 2.39558 28.5978C3.66648 27.8512 5.08991 27.3714 6.61817 26.6978C6.70396 24.7152 6.79924 22.4594 6.90091 20.1463C5.14389 19.3012 3.4409 18.4179 1.6807 17.6681C0.934039 17.3503 0.664006 16.9182 0.68307 16.1779C0.74026 13.8903 0.826025 11.5995 0.81967 9.31187C0.816493 7.90435 1.51863 6.87809 2.53218 6.12508C3.67599 5.2704 4.90564 4.41889 6.23373 3.94548C10.2212 2.52525 14.3802 1.82943 18.5901 1.4418C25.2083 0.828589 31.8329 0.765044 38.4384 1.5117C41.3615 1.84213 44.2624 2.43628 47.1473 3.03996C48.2498 3.26872 49.2952 3.81204 50.3309 4.28863C52.1579 5.12742 53.2699 6.49682 53.4256 8.58428C53.5336 10.0109 53.7592 11.4311 53.9403 12.8958C54.6806 12.9943 55.3288 13.0833 55.9769 13.1595C57.8674 13.3851 59.3448 14.3701 60.657 15.6727C61.3402 16.3527 61.6833 17.1565 61.6547 18.1065C61.5689 20.9343 61.4482 23.7621 61.3719 26.593C61.3465 27.5557 60.746 27.9656 59.9675 28.2452C58.3821 28.8202 56.7934 29.3794 55.2112 29.9545C54.9316 30.0562 54.6647 30.196 54.3946 30.3199C54.7123 32.957 55.0269 35.556 55.3415 38.1582C56.9269 38.441 58.5187 38.6984 60.0947 39.0256C60.7365 39.1591 61.3624 39.4005 61.9724 39.6515C64.8415 40.8366 66.3411 42.9019 66.2013 46.0982C66.1187 47.9632 66.1823 49.8347 66.2013 51.7029C66.2204 53.5552 65.3816 54.9151 63.6405 55.433C61.4037 56.1002 59.0938 56.5323 56.8125 57.0566C56.355 57.1614 55.8912 57.2186 55.5734 57.2726L55.5766 57.2663ZM37.0849 12.6575C37.8697 12.6575 38.6513 12.6766 39.4329 12.6544C42.3242 12.5686 45.2124 12.4955 48.0052 11.5931C49.1966 11.2087 50.188 10.5987 50.8679 9.5311C51.8624 7.96472 51.6622 6.76053 50.0196 5.93762C48.6343 5.24498 47.141 4.70167 45.6381 4.3204C41.7746 3.33862 37.8125 3.01454 33.8409 2.74448C24.9509 2.1408 16.1531 2.55384 7.53955 5.02575C6.39573 5.35301 5.2869 5.86455 4.23522 6.4301C2.58305 7.31973 2.61164 8.3015 4.23522 9.29916C4.43857 9.42308 4.66417 9.51522 4.88658 9.61054C7.22504 10.6145 9.64293 11.3739 12.1879 11.5232C20.4806 12.0125 37.0754 12.737 37.0817 12.6575H37.0849ZM52.1356 30.9077C52.0053 30.8791 51.8782 30.8156 51.7734 30.8378C46.7565 31.9244 41.6888 32.5281 36.5511 32.6457C30.8194 32.7759 25.0875 32.7569 19.4479 31.6861C15.273 30.8918 11.006 30.3072 7.16147 28.2706C7.0598 28.2166 6.91997 28.1721 6.8183 28.1975C5.09305 28.5915 3.42819 29.1062 2.40194 30.7203C1.99525 31.3589 2.03657 32.0261 2.57352 32.5408C3.09142 33.0365 3.64741 33.5893 4.29239 33.8308C6.25594 34.5616 8.23222 35.3686 10.2784 35.7467C13.7098 36.379 17.2016 36.6776 20.6616 37.1637C25.7802 37.885 30.8924 37.4688 35.9856 36.9795C39.5727 36.6331 43.1313 35.95 46.6866 35.3273C48.6565 34.9841 50.5438 34.355 52.0371 32.8999C52.7075 32.2485 52.8664 31.6067 52.1388 30.9077H52.1356ZM53.7655 33.3669C51.7797 35.1335 49.8352 36.1883 47.6461 36.6744C45.476 37.1574 43.2869 37.5927 41.0851 37.8977C34.9975 38.7428 28.8812 39.2131 22.7237 38.9748C22.4949 38.9652 22.263 39.0447 21.8658 39.1082C21.7038 41.3704 21.5449 43.6231 21.3861 45.8853C21.8341 46.0029 22.1168 46.1268 22.4091 46.149C27.461 46.5557 32.516 46.5938 37.5329 45.8186C40.3829 45.377 43.1948 44.6938 46.0257 44.1283C47.9956 43.7343 49.8416 43.0576 51.4906 41.8851C53.1682 40.6905 54.1722 39.14 54.0547 37.0112C53.9943 35.9373 53.8862 34.8666 53.7623 33.3637L53.7655 33.3669ZM36.5702 22.0717C27.0257 22.6723 17.6337 22.596 8.21316 20.7341C8.21316 22.3895 8.15599 23.9495 8.22906 25.5C8.31803 27.3746 8.4324 27.4318 10.2053 27.9878C18.4503 30.5646 26.9113 31.3907 35.509 31.1269C35.9125 31.1142 36.316 31.0348 36.8784 30.9681C36.7767 28.0132 36.6782 25.1537 36.5702 22.0749V22.0717ZM17.2144 20.3243C17.6211 20.3942 18.1389 20.5276 18.66 20.5657C27.9566 21.2488 37.1993 21.001 46.2989 18.7642C48.4404 18.2368 50.5628 17.5473 52.4914 16.2891C52.3389 14.513 52.1896 12.8132 52.0403 11.0625C50.9219 11.7329 50.0259 12.5495 48.9838 12.8386C46.9662 13.3978 44.8819 13.8426 42.8008 14.0079C36.1254 14.5321 29.4405 14.0746 22.7618 13.938C20.9794 13.903 19.197 13.9316 17.2175 13.9316V20.3243H17.2144ZM53.5368 57.5745C52.3643 57.5745 51.2936 57.5776 50.2197 57.5745C45.9527 57.5586 41.6729 57.7397 37.4249 57.4632C33.9013 57.2345 30.4032 56.5101 26.905 55.9382C21.9231 55.128 16.9093 54.4925 12.0989 52.8181C10.5961 52.2938 8.98525 52.583 7.51418 53.2184C6.1702 53.7999 5.8906 54.8293 6.88191 55.9382C7.4983 56.6276 8.33392 57.2536 9.19178 57.5713C10.647 58.1082 12.1879 58.4323 13.7098 58.7532C19.5338 59.9828 25.3545 61.2696 31.35 61.349C35.741 61.4062 40.1351 61.5746 44.5197 61.4412C47.2204 61.3586 49.8861 60.7295 52.2754 59.3092C52.8759 58.9534 53.5971 58.6643 53.5336 57.5713L53.5368 57.5745ZM54.5535 60.1735C54.1627 60.094 54.096 60.0559 54.0515 60.075C53.7783 60.1925 53.4986 60.3037 53.2413 60.4562C50.4135 62.1211 47.268 62.7629 44.078 62.8455C39.7506 62.9567 35.4169 62.7407 31.0863 62.6358C29.2498 62.5913 27.4133 62.4738 25.507 62.3848C25.3386 64.539 25.1861 66.4962 25.0272 68.5392C25.3672 68.6027 25.65 68.6822 25.9359 68.7108C30.5525 69.1683 35.1658 69.3049 39.8142 69.1492C44.3672 68.9999 48.5453 67.6114 52.7583 66.1658C53.6797 65.8512 54.131 65.2126 54.2231 64.3134C54.3661 62.9472 54.4454 61.5746 54.5535 60.1735ZM9.43636 45.377C9.57934 46.6479 9.65563 47.5915 9.79861 48.5256C9.9956 49.8219 10.6787 50.7433 11.9813 51.1373C13.4206 51.5726 14.825 52.1604 16.2929 52.4432C21.4909 53.4504 26.7111 54.3591 31.925 55.29C32.265 55.3504 32.6272 55.2964 33.1069 55.2964V47.6805C25.1638 47.9442 17.3573 47.3183 9.43636 45.3738V45.377ZM65.3117 44.6239C64.7398 44.9862 64.5237 45.0846 64.3553 45.234C62.5697 46.8131 60.4505 47.5788 58.1057 47.7313C55.888 47.8743 53.6639 47.9728 51.443 48.0427C49.9529 48.0903 48.4627 48.0522 46.8995 48.0522C46.5468 50.7815 46.2196 53.3169 45.8796 55.9509C46.4261 55.989 46.9027 56.078 47.3665 56.043C51.1411 55.7412 54.9189 55.487 58.6808 55.0581C60.2154 54.8833 61.7118 54.3464 63.2115 53.9238C64.2441 53.6315 64.851 52.8626 64.9304 51.8204C65.0988 49.555 65.1783 47.2833 65.3117 44.6239ZM46.5246 20.2575V30.107C49.4 30.1452 56.6727 28.3945 59.2177 27.0855C59.8246 26.7741 60.1391 26.361 60.1391 25.6811C60.1328 23.0599 60.1391 20.4418 60.1391 17.7062C57.0445 18.8881 54.0483 19.3901 50.9632 19.5427C49.5493 19.6126 48.1545 19.9843 46.5246 20.2544V20.2575ZM43.1312 46.3873C43.1217 46.5017 43.1154 46.6161 43.1059 46.7305C43.6809 46.8035 44.2592 46.9497 44.8343 46.937C49.1585 46.8321 53.486 46.7813 57.8007 46.5303C59.8405 46.4127 61.823 45.8186 63.4593 44.4365C64.6794 43.4071 64.6922 42.6763 63.3482 41.7517C60.8953 40.0646 58.0962 39.5276 55.2493 39.3243C52.9681 43.1878 51.2142 44.4778 46.7946 45.5612C45.5777 45.8599 44.3513 46.1109 43.128 46.3841L43.1312 46.3873ZM10.0941 13.0738C7.50778 12.1396 4.95961 11.2151 2.29707 10.2523V16.5306C4.78168 17.7157 7.27585 18.8182 10.0941 19.5141V13.0738ZM10.6755 37.8119C7.79694 36.8111 5.16615 35.896 2.31297 34.9047C2.48136 36.4234 2.6085 37.9517 2.84044 39.4609C2.90716 39.9025 3.18354 40.3823 3.50444 40.7032C5.47116 42.6636 7.84142 43.801 10.6724 44.106V37.8119H10.6755ZM5.69362 57.3457C5.69362 58.7755 5.63319 60.148 5.70944 61.5143C5.78887 62.9281 6.54507 64.1069 7.70159 64.7932C9.02015 65.578 10.5262 66.0482 12.2228 66.2865V60.0654C10.0941 59.179 8.06385 58.3338 5.69362 57.3457ZM38.0476 21.8621C37.6727 24.3276 37.8887 29.2587 38.4448 31.0729C39.4551 31.0062 40.5005 30.9363 41.6761 30.8601C41.5013 27.6542 41.7778 24.6326 41.352 21.4585C40.0716 21.6142 39.0294 21.7413 38.0476 21.8621ZM45.3331 30.3739C45.0885 27.0918 45.8414 23.9432 45.3489 20.6293C44.3259 20.8707 43.4172 21.0836 42.5244 21.2933C42.6197 24.5087 42.7118 27.5493 42.8071 30.787C43.7667 30.6313 44.507 30.5106 45.3331 30.3739ZM36.8402 55.9699C37.1103 53.0056 37.355 50.2954 37.6187 47.3913C36.4527 47.5375 35.4867 47.6582 34.4636 47.7853V55.6395C35.258 55.7507 35.9538 55.846 36.8402 55.9668V55.9699ZM44.5165 56.1034C44.8533 53.6982 45.1806 51.3915 45.4952 49.0848C45.5333 48.8052 45.5014 48.5161 45.5014 48.0935H42.7182C42.41 50.791 42.1113 53.3868 41.8 56.1034H44.5134H44.5165ZM40.5418 56.1669C40.869 53.2311 41.1613 50.5781 41.4695 47.8234C40.5894 47.6646 39.7919 47.5216 38.8451 47.3532C38.629 50.3049 38.4257 53.0755 38.2128 56.0049C39.0548 56.0653 39.7411 56.1129 40.545 56.1669H40.5418ZM13.3 66.6551C14.1451 66.7885 14.9299 66.9124 15.8036 67.0522C16.0483 64.8472 16.2706 62.8106 16.5089 60.6659C15.5208 60.4721 14.6662 60.3069 13.6717 60.1131C13.5446 62.3531 13.4271 64.4151 13.3031 66.6582L13.3 66.6551ZM23.6229 68.4788C23.7627 66.2865 23.8866 64.288 24.0264 62.1116C23.1971 61.9877 22.4219 61.8701 21.5449 61.7398C21.3829 63.9258 21.2367 65.883 21.0779 68.0467C21.904 68.1865 22.6792 68.3168 23.6261 68.4756L23.6229 68.4788ZM17.783 60.9551C17.5225 63.1823 17.2938 65.1173 17.0396 67.2715C17.9388 67.4113 18.7616 67.5383 19.6322 67.6718C19.8642 65.4922 20.0739 63.5509 20.2931 61.4984C19.4575 61.3173 18.7235 61.1584 17.783 60.9519V60.9551ZM15.3652 38.1995C15.2413 40.6492 15.1332 42.8542 15.0188 45.1196C15.7814 45.2467 16.3564 45.342 17.065 45.4596C17.2588 43.0893 17.4399 40.8398 17.6369 38.4378C16.9061 38.3616 16.2739 38.2948 15.3684 38.1995H15.3652ZM13.7543 44.948C13.9068 42.4761 14.0403 40.2902 14.1801 37.9962C13.2714 37.9104 12.5914 37.8468 11.8766 37.7801V44.4683C12.4643 44.6176 12.9727 44.7479 13.7543 44.948ZM53.524 18.0271C55.4558 17.6395 57.5338 17.5346 59.4656 16.5306C57.9119 14.6814 56.2724 14.1159 54.3311 14.5544C54.0642 15.7013 53.8163 16.7689 53.524 18.0271ZM19.9627 45.8091C20.1692 43.4229 20.3693 41.1385 20.579 38.7492H18.9014C18.7235 40.8462 18.5424 42.8637 18.3868 44.8877C18.3105 45.879 18.965 45.8948 19.9627 45.8091ZM11.581 13.1182V19.8381H13.2586V13.3057C12.7185 13.2453 12.1974 13.1881 11.581 13.1182ZM14.682 13.5186C14.682 15.5584 14.6407 17.5728 14.7011 19.584C14.7265 20.3783 15.2762 20.2893 15.972 19.9716C15.972 18.1192 15.9688 16.2764 15.972 14.4304C15.972 13.8172 15.8544 13.3438 14.6788 13.5186H14.682Z"
                    fill={fill || 'black'}
                />
            </g>
        </svg>
    );
};
