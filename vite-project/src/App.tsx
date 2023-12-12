import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import styled from 'styled-components';
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ShoppingBasket>
                <Header />
            </ShoppingBasket>
        </ThemeProvider>
    );
};

export default App;

const ShoppingBasket = styled.div`
    width: 100vw;
    padding-top: 1.2rem;
`;
