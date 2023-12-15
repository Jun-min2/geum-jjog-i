import { ITEMDETAILS } from '../../constants/ItemDetails';
import SectionBody from './SectionBody';
import SectionHeader from './SectionHeader';
import SectionItem from './SectionItem';

const Section = () => {
    return (
        <>
            <SectionHeader />
            <SectionBody />
            {ITEMDETAILS.map((item, idx) => (
                <SectionItem key={idx} item={item} />
            ))}
        </>
    );
};

export default Section;
