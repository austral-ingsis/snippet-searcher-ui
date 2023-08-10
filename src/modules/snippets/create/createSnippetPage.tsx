'use client'

import { Paper, Typography} from '@mui/material'
import {CreateSnippetForm} from '@/modules/snippets/create/createSnippetForm'

const CreateSnippetPage = () => {

  return (
    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
      <Typography component="h1" variant="h4" align="center">
        Create a new Snippet
      </Typography>
      <CreateSnippetForm/>

    </Paper>
  )
}

export default CreateSnippetPage