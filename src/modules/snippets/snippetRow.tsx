'use client'

import {TableCell, TableRow} from '@mui/material'
import {Snippet} from '@/data/snippet'
import EditIcon from '@mui/icons-material/Edit'
import ViewIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import Link from "next/link";
import {BugReport} from "@mui/icons-material";

export const SnippetRow = ({snippet}: { snippet: Snippet }) => {
    return (
        <TableRow key={snippet.id}>
            <TableCell>{snippet.name}</TableCell>
            <TableCell>{snippet.type}</TableCell>
            <TableCell>{snippet.status}</TableCell>
            <TableCell>
                <Link href={`/snippets/view/${snippet.id}`}>
                    <IconButton title='View snippet'>
                        <ViewIcon/>
                    </IconButton>
                </Link>
                <Link href={`/snippets/edit/${snippet.id}`}>
                    <IconButton title='Edit snippet'>
                        <EditIcon/>
                    </IconButton>
                </Link>
                <Link href={`/snippets/test/${snippet.id}`}>
                    <IconButton title='Test snippet'>
                        <BugReport/>
                    </IconButton>
                </Link>
            </TableCell>
        </TableRow>
    )
}
