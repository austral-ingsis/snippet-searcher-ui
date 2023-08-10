'use client'

import {Paper} from '@mui/material'
import {Snippet} from "@/data/snippet";
import {VerticalTabs} from "@/modules/snippets/test/tabNavigation";

const TestSnippetPage = ({snippet, tests = []}: { snippet: Snippet, tests: any[] }) => {
    return (
        <Paper variant="outlined" sx={{p: {xs: 2, md: 3}, height: "100%"}}>
            <VerticalTabs tests={tests}/>
        </Paper>
    )
}

export default TestSnippetPage