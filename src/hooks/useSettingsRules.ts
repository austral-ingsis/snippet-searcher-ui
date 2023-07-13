import {useState} from "react";
import {RuleValues} from "@/modules/settings/SettingsRulesComponent";

export interface RequestOptions {
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}


export const useSettingsRules = (options: RequestOptions, url: string) => {
    const [loading, setLoading] = useState(false);
    const editRules = async (rules: RuleValues) => {
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${user?.sub}`
            },
            body: JSON.stringify(rules)
        }).then(response => {
            if (response.ok) {
                options.onSuccess && options.onSuccess(response)
            } else {
                options.onError && options.onError(response)
            }
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            options.onError && options.onError(error)
        })
    };
    const getAllRules = async () => {
        setLoading(true);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${user?.sub}`
            },
        }).then(response => {
            if (response.ok) {
                options.onSuccess && options.onSuccess(response)
            } else {
                options.onError && options.onError(response)
            }
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            options.onError && options.onError(error)
        })
    };
    return {
        editRules,
        loading,
        getAllRules,
    }
}
