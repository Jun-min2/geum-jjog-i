import styled from 'styled-components';
import { useState } from 'react';
const SectionHeader = () => {
    const [isDelivery, setIsDelivery] = useState(true);
    const handleOnGeneralClick = () => {
        setIsDelivery(true);
    };
    const handleOnTodayClick = () => {
        setIsDelivery(false);
    };
    return (
        <>
            <HeadTextLayout>
                <HeadTextWrapper onClick={handleOnGeneralClick} selected={isDelivery}>
                    일반 배송 ( 2 )
                </HeadTextWrapper>
                <HeadTextWrapper onClick={handleOnTodayClick} selected={!isDelivery}>
                    오늘드림&픽업 ( 0 )
                </HeadTextWrapper>
            </HeadTextLayout>
        </>
    );
};

export default SectionHeader;

const HeadTextLayout = styled.section`
    width: 100%;
    height: 3.2rem;

    display: flex;
    justify-content: space-between;
`;

const HeadTextWrapper = styled.button<{ selected: boolean }>`
    display: flex;
    justify-content: center;

    width: 100%;
    ${({ theme, selected }) => (selected ? theme.fonts.SubHead1 : theme.fonts.SubHead2)};
    color: ${({ theme, selected }) => (selected ? 'black' : theme.colors.gray_500)};
    background-color: white;
    border-bottom: solid 0.2rem ${({ theme, selected }) => (selected ? 'black' : theme.colors.gray_200)};
`;
