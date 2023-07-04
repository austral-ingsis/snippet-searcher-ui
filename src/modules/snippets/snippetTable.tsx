import Typography from '@mui/material/Typography'
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Box} from '@mui/material'
import {SnippetRow} from '@/modules/snippets/snippetRow'
import {Add} from "@mui/icons-material";
import Link from "next/link";
import {Snippet} from "@/data/snippet";

export const SnippetTable = ({snippets}: {snippets: Snippet[]}) => {
    return (
        <>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Snippets
                </Typography>
                <Link href="snippets/create">
                    <Button variant="contained" disableRipple sx={{boxShadow: 0}}>
                        <Add/>
                        Add Snippet
                    </Button>
                </Link>
            </Box>
            <Table size="medium">
                <TableHead>
                    <TableRow sx={{fontWeight: 'bold'}}>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Conformance</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {snippets && snippets.map((snippet) => (
                        <SnippetRow key={snippet.id} snippet={snippet}/>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}