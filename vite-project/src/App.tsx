import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import styled from 'styled-components';
import Section from './components/Section/Section';
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ShoppingBasket>
                <Header />
                <Main>
                    <Section />
                </Main>
            </ShoppingBasket>
        </ThemeProvider>
    );
};

export default App;

const ShoppingBasket = styled.div`
    width: 100vw;
`;
const Main = styled.main`
    width: 100%;
    margin-top: 1rem;
`;
