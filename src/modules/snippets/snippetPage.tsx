'use client'

import {Paper} from '@mui/material'
import {SnippetTable} from './snippetTable'
import {Snippet} from "@/data/snippet";

const SnippetsPage = ({snippets}: {snippets: Snippet[]}) => {
    return (
        <>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <SnippetTable snippets={snippets}/>
            </Paper>
        </>
    )
}

export default SnippetsPage