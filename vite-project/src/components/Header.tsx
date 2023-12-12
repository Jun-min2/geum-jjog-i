import styled from 'styled-components';
import { IcArrow, IcHome } from '../assets/svgs/icons';

const Header = () => {
    return (
        <Head>
            <IcArrow />
            <HeadTextWrapper>
                장바구니 <HeadTextBox>(2)</HeadTextBox>
            </HeadTextWrapper>
            <IcHome />
        </Head>
    );
};

export default Header;

const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem 1.2rem 1.2rem;
`;
const HeadTextWrapper = styled.div`
    ${({ theme }) => theme.fonts.SubHead2};
    color: black;
`;
const HeadTextBox = styled.span`
    ${({ theme }) => theme.fonts.SubHead2};
    color: ${({ theme }) => theme.colors.red_300};
`;
