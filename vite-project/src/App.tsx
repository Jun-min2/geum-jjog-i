import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import styled from 'styled-components';
import SectionHeader from './components/Section/SectionHeader';
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ShoppingBasket>
                <Header />
                <Section>
                    <SectionHeader />
                </Section>
            </ShoppingBasket>
        </ThemeProvider>
    );
};

export default App;

const ShoppingBasket = styled.div`
    width: 100vw;
`;
const Section = styled.section`
    width: 100%;
    margin-top: 1rem;
`;
