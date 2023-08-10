import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {SyntheticEvent, useState} from "react";
import {SnippetTest} from "@/modules/snippets/test/snippetTest";
import {Button, Grid, ListItem, ListItemIcon, ListItemText, Chip} from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {Cancel, CheckCircle, CheckCircleOutline, InputOutlined, PlayArrow} from "@mui/icons-material";
import Link from "next/link";
import {Test} from "@/data/test";
import List from "@mui/material/List";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    test: Test;
}

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, test, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{padding: '4px', flexGrow: 1}}
            {...other}
        >
            {value === index && (
                <Grid container justifyContent="center">
                    <Grid item xs={2}>
                        <Box height="50%" width="100%">
                            <Typography>Input</Typography>
                            <List>
                                {
                                    test.input.map((input, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <InputOutlined/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={input}
                                            />
                                        </ListItem>))
                                }
                            </List>
                        </Box>
                        <Box height="50%" width="100%">
                            <Typography>Output</Typography>
                            <List>
                                {
                                    test.output.map((out, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <CheckCircleOutline/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={out}
                                            />
                                        </ListItem>))
                                }
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography>Snippet</Typography>
                        <CodeMirror
                            value={test?.snippet}
                            height="500px"
                            width="100%"
                            extensions={[javascript({typescript: true, jsx: false})]}
                            readOnly={true}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography>Execution</Typography>
                        <CodeMirror
                            value={test.snippet}
                            height="500px"
                            width="100%"
                            readOnly={true}
                            theme="dark"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} gap={1}>
                            <Chip label="Passed" icon={<CheckCircle />} color="success" />
                            <Chip label="Failed" icon={<Cancel />} color="error" />
                            <Link href="snippets">
                                <Button variant="contained" sx={{boxShadow: 0}}>
                                    <PlayArrow/>
                                    Run
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const VerticalTabs = ({tests}: { tests: Test[] }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%"}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                {
                    tests.map((test, i) => <Tab label={test.name} key={test.id} {...a11yProps(i)} />)
                }
            </Tabs>
            {
                tests.map((test, i) => (
                    <TabPanel index={i} value={value} key={test.id} test={test}>
                        <SnippetTest/>
                    </TabPanel>))
            }
        </Box>
    );
}