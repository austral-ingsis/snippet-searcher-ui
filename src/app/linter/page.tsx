import React from 'react'
import {Linter} from "@/modules/settings/Linter";
import {fetcher} from "@/data/fetcher";
import {Snippet} from "@/data/snippet";

const LintingPage = async () => {
    const rules = await fetcher<Snippet>(`manager/linting`);
    return <Linter rules={rules}/>
}

export default LintingPage
