'use client'
import RulesComponent from "@/modules/settings/SettingsRulesComponent";


export const Linter = ({rules}: { rules: any }) => {

    return (
        <>
            <RulesComponent title='Linting Rules' rules={rules} formatter={false}/>
        </>
    )
}
