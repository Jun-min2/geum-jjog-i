import styled from 'styled-components';
import { IcArrow, IcHome } from '../assets/svgs/icons';

const Header = () => {
    return (
        <Head>
            <IcArrow />
            <HeadText>장바구니 (2)</HeadText>
            <IcHome />
        </Head>
    );
};

export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;
const HeadText = styled.div`
    ${({ theme }) => theme.fonts.SubHead2};
    color: black;
`;
