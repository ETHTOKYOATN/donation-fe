import Header from '../header';
import { Box, Main } from './LayoutType2.styled';

/**
 * @description layout with header
 */
type LayoutType2Props = {
    children: React.ReactNode;
};
const LayoutType2 = (props: LayoutType2Props) => {
    const { children } = props;

    return (
        <Box className="layout-type-2">
            <Main>
                <Header />
                <div className="main">{children}</div>
            </Main>
        </Box>
    );
};

export default LayoutType2;
