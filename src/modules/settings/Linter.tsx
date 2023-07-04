import RulesComponent from "@/modules/settings/SettingsRulesComponent";
import {useEffect, useState} from "react";
import {useSettingsRules} from "@/hooks/useSettingsRules";


export const Linter = () => {
    const [rules, setRules] = useState({});
    const {getAllRules, loading} = useSettingsRules({
        onSuccess: (response) => {
            setRules(response.data)
        },
        onError: (error) => {
            console.error(error);
        },
    }, 'linting');
    useEffect(() => {
        getAllRules();
    }, []);
    return (
        <>
            <RulesComponent title='Linting Rules' rules={rules} formatter={false}/>
        </>
    )
}
