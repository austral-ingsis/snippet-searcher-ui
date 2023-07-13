'use client'
import React, {useState} from 'react';
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
import {useSettingsRules} from "@/hooks/useSettingsRules";

interface RulesComponent {
    title: string;
    rules: any
    formatter?: boolean;
}

export interface RuleValues {
    spaceBeforeColon: boolean;
    spaceAfterColon: boolean;
    spaceAroundEquals: boolean;
    lineBeforePrint: number;
    lineAfterSemicolon: boolean;
    spaceBetweenTokens: boolean;
    spaceAroundOperators: boolean;
    indentationInsideIf: number;
    braceOnSameLineAsIf: boolean;
}

const SettingsRulesComponent = (props: RulesComponent) => {
    const [ruleValues, setRuleValues] = useState<RuleValues>(props.rules);

    const handleRuleChange = (key: keyof RuleValues, value: boolean | number) => {
        setRuleValues(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    const { editRules, loading } = useSettingsRules({
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.error(error);
        },
    }, props.formatter ? 'formatter' : 'linting');

    const handleClick = () => {
        editRules(ruleValues);
    }

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
                        {Object.entries(props.rules).map((rule) => (
                            <TableRow key={rule[0]}>
                                <TableCell className={styles.td}>
                                    <p className={styles.text}>{rule[0]}
                                    </p>
                                </TableCell>
                                <TableCell className={styles.td}>
                                    {rule[0] === 'lineBeforePrint' || rule[0] === 'indentationInsideIf' ? (
                                        <div className={styles.text}>
                                            <TextField
                                                type="number"
                                                variant="outlined"
                                                value={ruleValues[rule[0] as keyof RuleValues]}
                                                onChange={(e) => handleRuleChange(rule[0] as keyof RuleValues, parseInt(e.target.value, 10))}
                                                className={styles.input}
                                                size="small"
                                            />
                                        </div>
                                    ) : (
                                        <div className={styles.text}>
                                            <Checkbox
                                                checked={ruleValues[rule[0] as keyof RuleValues] as boolean}
                                                onChange={(e) => handleRuleChange(rule[0] as keyof RuleValues, e.target.checked)}
                                            />
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="contained" onClick={handleClick}
                        className={styles.saveButton}>Save Changes</Button>
            </TableContainer>
        </div>
    );
};

export default SettingsRulesComponent;
