import { ImgProduct1, ImgProduct2 } from '../assets/images/images';

type ItemDetails = {
    itemImages: string;
    itemText: string;
    itemCost: string;
    itemDiscountPrice: string;
};
export const ITEMDETAILS: ItemDetails[] = [
    {
        itemImages: ImgProduct1,
        itemText: '콜레올로지 600mg * 30+10정 추가증정',
        itemCost: '22,900원',
        itemDiscountPrice: '17,900원',
    },
    {
        itemImages: ImgProduct2,
        itemText: '[단독기획]줄라이미 페르소나 퍼퓸 50ml 단품/기획 6종',
        itemCost: '49,000원',
        itemDiscountPrice: '36,900원',
    },
];
