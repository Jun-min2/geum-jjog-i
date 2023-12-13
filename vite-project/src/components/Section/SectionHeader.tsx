import styled from 'styled-components';
import { useState } from 'react';
const SectionHeader = () => {
    const [isDelivery, setIsDelivery] = useState(true);
    const handleOnClick = () => {
        setIsDelivery(true);
    };
    const handleOnTodayClick = () => {
        setIsDelivery(false);
    };
    return (
        <>
            <HeadTextLayout>
                <HeadTextWrapper onClick={handleOnClick} isSelected={isDelivery}>
                    일반 배송 ( 2 )
                </HeadTextWrapper>
                <HeadTextWrapper onClick={handleOnTodayClick} isSelected={!isDelivery}>
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

const HeadTextWrapper = styled.button<{ isSelected: boolean }>`
    display: flex;
    justify-content: center;

    width: 100%;
    ${({ theme, isSelected }) => (isSelected ? theme.fonts.SubHead1 : theme.fonts.SubHead2)};
    color: ${({ theme, isSelected }) => (isSelected ? 'black' : theme.colors.gray_500)};
    background-color: white;
    border-bottom: solid 0.2rem ${({ theme, isSelected }) => (isSelected ? 'black' : theme.colors.gray_200)};
`;
