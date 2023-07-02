import FormatterRulesComponent from "@/modules/settings/FormatterRulesComponent";
import styles from './Settings.module.scss'


export const Settings = () => {
    return (
        <>
            <h3 className={styles.title}>Formatting Settings</h3>
            <FormatterRulesComponent/>
        </>
    )
}
