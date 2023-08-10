'use client'

import {Paper, Typography} from '@mui/material'
import {Snippet} from '@/data/snippet'
import {EditSnippetForm} from "@/modules/snippets/edit/editSnippetForm";


const EditSnippetPage = ({snippet}: { snippet: Snippet }) => {
    return (
        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
            <Typography component="h1" variant="h4" align="center">
                Edit {snippet?.name}
            </Typography>
            <EditSnippetForm snippet={snippet}/>

        </Paper>
    )
}

export default EditSnippetPage