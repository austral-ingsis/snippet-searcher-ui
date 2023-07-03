'use client'
import React, {useState} from 'react';
import {rules} from "@/modules/formatter/Rules";
import styles from './Settings.module.scss'
import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";

interface RuleValues {
    [key: string]: string;
}

interface RulesComponent {
    title: string;
    rules: {
        name: string
        key: string
        value: string
    }[]
}

const RulesComponent = (props: RulesComponent) => {
    const initialState = rules.reduce((state: RuleValues, rule) => ({...state, [rule.key]: rule.value}), {});
    const [ruleValues, setRuleValues] = useState<RuleValues>(initialState);

    const handleRuleChange = (key: string, value: string) => {
        setRuleValues({...ruleValues, [key]: value});
    };

    return (
        <div className={styles.table}>
            <TableContainer component={Paper}>
                <h3 className={styles.title}>{props.title}</h3>
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
                        {props.rules.map((rule) => (
                            <TableRow key={rule.key}>
                                <TableCell className={styles.td}>
                                    <p className={styles.text}>{rule.name}
                                    </p>
                                </TableCell>
                                <TableCell className={styles.td}>
                                    {rule.key === 'lineBeforePrintln' ? (
                                        <div className={styles.text}>
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                value={ruleValues[rule.key]}
                                                onChange={(e) => handleRuleChange(rule.key, e.target.value)}
                                                className={styles.input}
                                                size="small"
                                            />
                                        </div>
                                    ) : (
                                        <div className={styles.text}>
                                            <Checkbox
                                                checked={ruleValues[rule.key] === 'yes'}
                                                onChange={(e) => handleRuleChange(rule.key, e.target.checked ? 'yes' : 'no')}
                                            />
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="contained" onClick={() => console.log('Mock Data:', ruleValues)}
                        className={styles.saveButton}>Save Changes</Button>
            </TableContainer>


        </div>
    );
};

export default RulesComponent;
