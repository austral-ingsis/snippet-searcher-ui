import RulesComponent from "@/modules/formatter/FormatterRulesComponent";
import {rules} from "@/modules/formatter/Rules";


export const Formatter = () => {
    return (
        <>
            <RulesComponent title='Formatting rules' rules={rules}/>
        </>
    )
}
