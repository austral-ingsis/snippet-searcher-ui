import RulesComponent from "@/modules/formatter/FormatterRulesComponent";
import {rules} from "@/modules/formatter/Rules";


export const Linter = () => {
    return (
        <>
            <RulesComponent title='Linting Rules' rules={rules}/>
        </>
    )
}
