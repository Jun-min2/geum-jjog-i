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
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.03);

    text-align: center;
`;
const HeadTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.fonts.SubHead2};
    color: black;
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
