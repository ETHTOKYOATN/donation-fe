import { FloatSelectBox } from './FloatBox.styeld';

type FloatBoxProps = {
    children?: React.ReactNode;
    selected?: boolean;
    color?: string;
    onClick?: (() => void) | undefined;
};
export const FloatBox = (props: FloatBoxProps) => {
    const { children, selected = false, color = '#FFF', onClick } = props;

    return (
        <FloatSelectBox color={color} selected={selected} onClick={onClick}>
            {children}
        </FloatSelectBox>
    );
};
