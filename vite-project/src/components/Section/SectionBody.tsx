import styled from 'styled-components';
import { IcCheck, IcDelivery } from '../../assets/svgs/icons';
// IcEmptyCheck
const SectionBody = () => {
    return (
        <SectionContainer>
            <SectionWrapper>
                <SectionLayout>
                    <CheckButton>
                        <IcCheck />
                    </CheckButton>
                    <SectionBox>올리브영 배송</SectionBox>
                </SectionLayout>
                <ButtonBox>
                    <FastButton>오늘드림 이동</FastButton>
                    <CancelButton>선택삭제</CancelButton>
                </ButtonBox>
            </SectionWrapper>
            <DeliveryBox>
                <DeliveryText>무료 배송</DeliveryText>
                <DeliveryPic>
                    <DeliveryBar />
                    <IcDelivery />
                </DeliveryPic>
            </DeliveryBox>
        </SectionContainer>
    );
};

export default SectionBody;

const SectionContainer = styled.div`
    width: 100%;
    height: 8.2rem;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.03);
    padding: 1.3rem 1.2rem 0.6rem 1.7rem;
`;

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SectionLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const CheckButton = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
`;

const SectionBox = styled.span`
    ${({ theme }) => theme.fonts.Title2};
    color: black;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.4rem;
`;
const FastButton = styled.button`
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_700};
    background-color: white;

    padding: 0.5rem 0.7rem;

    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    border-radius: 4px;
`;
const CancelButton = styled.button`
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_700};
    background-color: white;

    padding: 0.6rem 0.6rem 0.5rem;

    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    border-radius: 4px;
`;
const DeliveryBox = styled.div`
    padding: 0 0.7rem 0 0.3rem;
`;
const DeliveryText = styled.div`
    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.colors.gray_700};
`;
const DeliveryPic = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`;
const DeliveryBar = styled.div`
    width: 100%;
    height: 0.6rem;

    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.red_300};
`;
