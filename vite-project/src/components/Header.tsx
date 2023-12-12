import styled from 'styled-components';
import { IcArrow, IcHome } from '../assets/svgs/icons';

const Header = () => {
    return (
        <Head>
            <Button>
                <IcArrow />
            </Button>
            <HeadTextWrapper>
                장바구니 <HeadTextBox>(2)</HeadTextBox>
            </HeadTextWrapper>
            <Button>
                <IcHome />
            </Button>
        </Head>
    );
};

export default Header;

const Head = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.2rem;

    text-align: center;
`;
const HeadTextWrapper = styled.div`
    ${({ theme }) => theme.fonts.SubHead2};
    color: black;
    padding-top: 1.2rem;
`;
const HeadTextBox = styled.span`
    ${({ theme }) => theme.fonts.SubHead2};
    color: ${({ theme }) => theme.colors.red_300};
`;

const Button = styled.button`
    background-color: white;
    border: none;
    padding: 0;
`;
