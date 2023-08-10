'use client'
import RulesComponent from "@/modules/settings/SettingsRulesComponent";


export const Formatter = ({rules}: { rules: any }) => {
    return (
        <>
            <RulesComponent title='Formatting rules' rules={rules} formatter/>
        </>
    )
}
