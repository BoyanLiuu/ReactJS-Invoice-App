/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { GlobalStyle, lightTheme, darkTheme } from '../Theme';
import Header from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    // check localstorage and see if we store dark/light
    const themeFlag = () => {
        if (localStorage.mode) {
            return localStorage.mode === 'true';
        }
        return true;
    };
    const [theme, setTheme] = useState(themeFlag());
    const themeToggler = () => {
        setTheme(!theme);
    };

    // update localstorage
    useEffect(() => {
        localStorage.setItem('mode', theme);
    }, [theme]);
    // eslint-disable-next-line react/jsx-filename-extension
    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header themeToggler={themeToggler} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
