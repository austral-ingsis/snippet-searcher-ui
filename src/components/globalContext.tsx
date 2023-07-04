"use client"
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {ReactNode} from "react";

type GlobalContextType = {
    children: ReactNode
}

const defaultTheme = createTheme({
    palette: {
        primary: {
            light: '#94C13E',
            main: '#2A692F'
        }
    }
})

export const GlobalContext = ({children}: GlobalContextType) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>

    )
}