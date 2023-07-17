"use client"
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {createContext, ReactNode, useContext} from "react";

type GlobalContextType = {
    children: ReactNode,
    accessToken: string,
}

const defaultTheme = createTheme({
    palette: {
        primary: {
            light: '#94C13E',
            main: '#2A692F'
        }
    }
})

const AccessToken = createContext<string>("");

export const GlobalContext = ({children, accessToken}: GlobalContextType) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AccessToken.Provider value={accessToken }>
                {children}
            </AccessToken.Provider>
        </ThemeProvider>

    )
}

export const useAccessToken = (): string => {
    return useContext(AccessToken);
}