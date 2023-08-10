'use client'
import React, {useState} from 'react';
import styles from './Settings.module.scss'
import {
    Button,
    Checkbox, FormControlLabel,
    Paper, Radio, RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {puter} from "@/data/fetcher";
import Typography from "@mui/material/Typography";
import {useAccessToken} from "@/components/globalContext";

interface RulesComponent {
    title: string;
    rules: any
    formatter?: boolean;
}

export interface RuleValues {
    spaceBeforeColon: boolean;
    spaceAfterColon: boolean;
    spaceAroundEquals: boolean;
    newLineBeforePrintln: number;
    indentSize: number;
    caseType: "CAMEL_CASE" | "SNAKE_CASE";
    limitPrint: boolean;
    limitRead: boolean;
}

const SettingsRulesComponent = (props: RulesComponent) => {
    const [ruleValues, setRuleValues] = useState<RuleValues>(props.rules);
    const accessToken = useAccessToken();

    const handleRuleChange = (key: keyof RuleValues, value: boolean | number | string) => {
        setRuleValues(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleClick = async () => {
        const res = await puter<RuleValues>(props.formatter ? `manager/formatting` : 'manager/linting', ruleValues, accessToken).then(res => console.log('ok'))
        console.log('res', res)
    }

    return (
        <div className={styles.table}>
            <TableContainer component={Paper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    {props.title}
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.td}>
                                <p className={styles.text}><strong>Name</strong></p>
                            </TableCell>
                            <TableCell className={styles.td}>
                                <p className={styles.text}><strong>Value</strong></p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(ruleValues).map(([key, value]) => {
                            if (['userId', 'id', 'created_at', 'author'].includes(key)) {
                                return null;
                            }
                            return (
                                <TableRow key={key}>
                                    <TableCell className={styles.td}>
                                        <p className={styles.text}>{key}</p>
                                    </TableCell>
                                    <TableCell className={styles.td} style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {key === 'caseType' ? (
                                            <RadioGroup
                                                row
                                                value={value as 'CAMEL_CASE' | 'SNAKE_CASE'}
                                                onChange={(e) => handleRuleChange(key as keyof RuleValues, e.target.value as 'CAMEL_CASE' | 'SNAKE_CASE')}
                                            >

                                                <FormControlLabel
                                                    value="CAMEL_CASE"
                                                    control={<Radio color="primary"/>}
                                                    label="Camel Case"
                                                />
                                                <FormControlLabel
                                                    value="SNAKE_CASE"
                                                    control={<Radio color="primary"/>}
                                                    label="Snake Case"
                                                />
                                            </RadioGroup>
                                        ) : typeof value === 'number' ? (
                                            <div className={styles.text}>
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    value={value}
                                                    onChange={(e) => handleRuleChange(key as keyof RuleValues, parseInt(e.target.value, 10))}
                                                    className={styles.input}
                                                    size="small"
                                                />
                                            </div>
                                        ) : (
                                            <div className={styles.text}>
                                                <Checkbox
                                                    checked={value as boolean}
                                                    onChange={(e) => handleRuleChange(key as keyof RuleValues, e.target.checked)}
                                                />
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>
                <Button variant="contained" onClick={handleClick}
                        className={styles.saveButton}>Save Changes</Button>
            </TableContainer>
        </div>
    );
};

export default SettingsRulesComponent;
