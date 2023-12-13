import styled from 'styled-components';
import { ITEMDETAILS } from '../../constants/ItemDetails';
import { IcMinus, IcPlus, IcSmallCheck } from '../../assets/svgs/icons';
const SectionItem = () => {
    return (
        <>
            {ITEMDETAILS.map(({ itemImages, itemText, itemCost, itemDiscountPrice }) => (
                <MyItem>
                    <ItemWrapper key={itemImages}>
                        <Items>
                            <ItemPic>
                                <CheckButton>
                                    <IcSmallCheck />
                                </CheckButton>
                                <ItemImg src={itemImages} />
                            </ItemPic>
                            <ItemDetails>{itemText}</ItemDetails>
                        </Items>

                        <ItemCounter>
                            <MinusCount>
                                <IcMinus />
                            </MinusCount>
                            <ItemCount>1</ItemCount>
                            <PlusCount>
                                <IcPlus />
                            </PlusCount>
                        </ItemCounter>
                    </ItemWrapper>
                    <ItemLayout>
                        <FastItem>오늘드림</FastItem>
                        <ItemPrice>
                            <ItemCost>{itemCost}</ItemCost>
                            <DiscountPrice>{itemDiscountPrice}</DiscountPrice>
                        </ItemPrice>
                    </ItemLayout>
                </MyItem>
            ))}
        </>
    );
};

export default SectionItem;

const MyItem = styled.div`
    padding: 2.18rem 1.9rem 1.52rem 2.1rem;
    height: 14.7rem;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.03);
`;

const ItemWrapper = styled.div`
    width: 100%;

    margin-bottom: 1.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const Items = styled.div`
    display: flex;
    width: 245rem;
    gap: 1.4rem;
`;

const ItemPic = styled.div`
    position: relative;

    width: 7.4rem;
    height: 7.4rem;
`;
const ItemImg = styled.img`
    width: 100%;
    height: 100%;
`;
const CheckButton = styled.button`
    position: absolute;
    top: -0.05rem;
    left: -0.09rem;
    width: 1.6rem;
    height: 1.6rem;
    z-index: 10;
    background-color: white;
`;
const ItemDetails = styled.h3`
    width: 60%;
    ${({ theme }) => theme.fonts.SubTitle2};
    color: black;
    padding-top: 0.8rem;
    word-break: keep-all;
`;
const ItemCounter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 7.6rem;
    height: 2.3rem;
    position: absolute;
    top: 5.6rem;
    right: 0;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    border-radius: 2px;
`;

const ItemCount = styled.button`
    width: 150%;

    height: 100%;
    color: black;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    border-left: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    ${({ theme }) => theme.fonts.SubTitle3};
    background-color: white;
`;

const PlusCount = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: black;
    ${({ theme }) => theme.fonts.SubTitle3};
    background-color: white;
`;

const MinusCount = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    height: 100%;
    color: black;
    ${({ theme }) => theme.fonts.SubTitle3};
    background-color: white;
`;
const ItemLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FastItem = styled.div`
    padding: 0.19rem 0.5rem;
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.colors.gray_000};
    background-color: ${({ theme }) => theme.colors.sky_300};
    border-radius: 10px;
`;
const ItemPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`;
const ItemCost = styled.div`
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_300};
    text-decoration-line: line-through;
`;
const DiscountPrice = styled.div`
    ${({ theme }) => theme.fonts.SubHead2};
    color: black;
`;
