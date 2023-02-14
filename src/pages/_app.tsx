import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

import theme from '@/styles/theme'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
        <ToastContainer theme="light" />
      </ThemeProvider>
    </Provider>
  )
}
export default MyApp
