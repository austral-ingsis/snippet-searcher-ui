'use client'

import {Box, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import CodeMirror from '@uiw/react-codemirror'
import {javascript} from '@codemirror/lang-javascript'
import {BugReport, Download, PlayArrow, Send} from "@mui/icons-material";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import {Snippet} from "@/data/snippet";
import IconButton from "@mui/material/IconButton";
import {saveAs} from 'file-saver';

const ViewSnippetPage = ({snippet}: {snippet: Snippet}) => {

    const downloadSnippet = () => {
        const blob = new Blob([snippet.content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `${snippet.name}.psc`);
    }

    return (
        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Box flex={1}/>
                <Typography component="h1" variant="h4" align="center" sx={{flex: 1}}>
                    {snippet?.name}
                </Typography>
                <Link href={`/snippets/edit/${snippet?.id}`} style={{flex: 1}}>
                    <Button variant="contained" disableRipple sx={{boxShadow: 0}}>
                        <EditIcon/>
                        Edit
                    </Button>
                </Link>
            </Box>
            <Grid container justifyContent="center">
                <>
                    <Grid item xs={6}>
                        <CodeMirror
                            value={snippet?.content}
                            height="500px"
                            width="100%"
                            extensions={[javascript({typescript: true, jsx: false})]}
                            readOnly={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CodeMirror
                            value={snippet?.content}
                            height="450px"
                            width="100%"
                            readOnly={true}
                            theme="dark"
                        />
                        <Box display='flex' alignItems="center" flexDirection="row" height="50px">
                            <TextField sx={{width: '90%'}} size="small"/>
                            <IconButton>
                                <Send />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button variant="contained" sx={{mt: 3, ml: 1, boxShadow: 0}} onClick={downloadSnippet}>
                                <Download/>
                                Download
                            </Button>
                            <Link href="snippets">
                                <Button variant="contained" sx={{mt: 3, ml: 1, boxShadow: 0}}>
                                    <PlayArrow/>
                                    Run
                                </Button>
                            </Link>
                            <Link href="snippets">
                                <Button sx={{mt: 3, ml: 1}}>
                                    <BugReport/>
                                    Test
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </>
            </Grid>
        </Paper>
    )
}

export default ViewSnippetPage
