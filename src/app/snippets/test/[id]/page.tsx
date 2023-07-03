import {INITIAL_SNIPPETS, INITIAL_TEST} from "@/data/fake/fakeSnippetStore";
import TestSnippetPage from "@/modules/snippets/test/testSnippet";

const TestSnippet = async ({params}: { params: { id: string } }) => {
    // const snippet = await fetcher<Snippet>(`manager/${params.id}`)
    const snippet = INITIAL_SNIPPETS.find(s => s.id === params.id) ?? INITIAL_SNIPPETS[0]
    return <TestSnippetPage snippet={snippet} tests={INITIAL_TEST}/>
}

export default TestSnippet;