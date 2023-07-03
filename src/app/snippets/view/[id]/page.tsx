import {INITIAL_SNIPPETS} from "@/data/fake/fakeSnippetStore";
import ViewSnippetPage from "@/modules/snippets/view/viewSnippet";

const ViewSnippet = async ({params}: { params: { id: string } }) => {
    // const snippet = await fetcher<Snippet>(`manager/${params.id}`)
    const snippet = INITIAL_SNIPPETS.find(s => s.id === params.id) ?? INITIAL_SNIPPETS[0]
    return <ViewSnippetPage snippet={snippet}/>
}

export default ViewSnippet;