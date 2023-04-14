import { Box, Main } from './LayoutType1.styled';

/**
 * @description layout without header
 */
type LayoutType1Props = {
    children: React.ReactNode;
};
const LayoutType1 = (props: LayoutType1Props) => {
    const { children } = props;

    return (
        <Box className="layout-type-1">
            <Main>
                {/* <Header /> */}
                <div className="main">{children}</div>
            </Main>
        </Box>
    );
};

export default LayoutType1;
