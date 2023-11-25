import { GlobalStyle } from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import Router from '@routes/Router';
import theme from '@styles/theme';
import { FormProvider } from '@contexts/FormContext';

const App = () => (
  <FormProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </FormProvider>
);

export default App;
