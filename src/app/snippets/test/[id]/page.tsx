import {INITIAL_TEST} from "@/data/fake/fakeSnippetStore";
import TestSnippetPage from "@/modules/snippets/test/testSnippet";
import {fetcher} from "@/data/fetcher";
import {Snippet} from "@/data/snippet";

const TestSnippet = async ({params}: { params: { id: string } }) => {
    const snippet = await fetcher<Snippet>(`manager/${params.id}`)
    return <TestSnippetPage snippet={snippet} tests={INITIAL_TEST}/>
}

export default TestSnippet;