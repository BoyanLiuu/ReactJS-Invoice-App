import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    btnEditDefaultBtn: '#f9fafe',
    btnEditDefaultText: 'hsl(231, 37%, 63%)',
    btnEditHoverBtn: 'hsl(231, 73%, 93%)',
    btnEditHoverText: 'hsl(231, 37%, 63%)',
    btnSaveText: 'hsl(231, 20%, 61%)',
    btnSaveHoverBtn: 'hsl(228, 29%, 7%)',
    formHighlight: 'hsl(252, 94%, 67%)',
    mainText: 'hsl(228, 29%, 7%)',
    subText: 'hsl(231, 37%, 63%)',
    bgColor: 'hsl(240, 27%, 98%)',
    header: 'rgb(55, 59, 83)',
    homeSubText: 'hsl(231, 20%, 61%)',
    filterOptionsBg: '#ffffff',
    filterCheckBox: 'hsl(231, 73%, 93%)',
};

export const darkTheme = {
    btnEditDefaultBtn: 'hsl(233, 30%, 21%)',
    btnEditDefaultText: 'hsl(231, 73%, 93%)',
    btnEditHoverBtn: '#ffffff',
    btnEditHoverText: 'hsl(231, 73%, 93%)',
    btnSaveText: 'hsl(231, 73%, 93%)',
    btnSaveHoverBtn: 'hsl(233, 31%, 17%)',
    formHighlight: 'hsl(252, 100%, 73%)',
    mainText: '#ffffff',
    subText: 'hsl(231, 73%, 93%)',
    bgColor: 'hsl(233, 30%, 11%)',
    header: 'hsl(233, 31%, 17%)',
    homeSubText: '#ffffff',
    filterOptionsBg: 'hsl(233, 30%, 21%)',
    filterCheckBox: 'hsl(233, 31%, 17%)',
};

export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 62.5%;
        --btnSaveDefaultBtn: #373b53;
        --btnDraft: rgba(55, 59, 83, 0.06);
        --btnPaid: rgba(51, 214, 159, 0.06);
        --btnPending: rgba(255, 143, 0,0.06);
        --btnDraftText: rgb(55, 59, 83);
        --btnPaidText: rgb(51, 214, 159);
        --btnPendingText: rgb(255, 143, 0);


    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width:100%;
        min-width: 28rem;
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Spartan', sans-serif;
        overflow-x: hidden;
        transition: background-color ease-in-out 0.3s;
                                    
    }
    a {
        text-decoration: none;
    }
    @keyframes fade {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;
