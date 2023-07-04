'use client'
import RulesComponent from "@/modules/settings/SettingsRulesComponent";
import {useEffect, useState} from "react";
import {useSettingsRules} from "@/hooks/useSettingsRules";


export const Formatter = () => {
    const [rules, setRules] = useState({});
    const {getAllRules, loading} = useSettingsRules({
        onSuccess: (response) => {
            setRules(response.data)
        },
        onError: (error) => {
            console.error(error);
        },
    }, 'formatting');
    useEffect(() => {
        getAllRules();
    }, []);
    return (
        <>
            <RulesComponent title='Formatting rules' rules={rules} formatter/>
        </>
    )
}
