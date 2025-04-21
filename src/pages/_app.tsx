import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from '../theme/theme';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
