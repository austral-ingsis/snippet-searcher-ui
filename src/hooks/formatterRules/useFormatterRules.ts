import {useState} from "react";
import {useUser} from "@auth0/nextjs-auth0/dist/client";

export interface RequestOptions {
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}


export const useFormatterRules = (options: RequestOptions) => {
    const {user, checkSession} = useUser()
    const [loading, setLoading] = useState(false);
    const createRules = async () => {
        setLoading(true);
        const userData = {
            userId: '',
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/formatting-rules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.sub}`
            },
            body: JSON.stringify(userData)
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
    const getRules = async () => {
        setLoading(true);
        const userData = {
            userId: '',
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/{userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.sub}`
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
    const editRule = async (ruleId: string) => {
        setLoading(true);
        const userData = {
            userId: '',
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/{userId}/${ruleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.sub}`
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
        createRules,
        loading,
        getRules,
        editRule
    }
}
