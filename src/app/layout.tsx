import '@/components/globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from 'react'
import {GlobalContext} from "@/components/globalContext";
import {UserProvider} from "@auth0/nextjs-auth0/client";
import {getAccessToken} from "@auth0/nextjs-auth0";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Snippet Searcher',
    description: 'Search the best snippets',
}

type RootLayoutProps = {
    children: ReactNode
}

export default async function RootLayout({children}: RootLayoutProps) {
    const {accessToken} = await getAccessToken();
    return (
        <html lang="en">
        <body className={inter.className}>
        <GlobalContext accessToken={accessToken ?? ""}>
            <UserProvider>
                {children}
            </UserProvider>
        </GlobalContext>
        </body>
        </html>
    )
}
