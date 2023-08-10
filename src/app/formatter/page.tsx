import React from 'react'
import {Formatter} from "@/modules/settings/Formatter";
import {fetcher} from "@/data/fetcher";
import {Snippet} from "@/data/snippet";

const SettingsPage = async () => {
    const rules = await fetcher<Snippet>(`manager/formatting`);
    return <Formatter rules={rules}/>
}

export default SettingsPage
