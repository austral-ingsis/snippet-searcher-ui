import {INITIAL_SNIPPETS} from "@/data/fake/fakeSnippetStore";
import ViewSnippetPage from "@/modules/snippets/view/viewSnippet";
import {Snippet} from "@/data/snippet";
import {fetcher} from "@/data/fetcher";

const ViewSnippet = async ({params}: { params: { id: string } }) => {
    const snippet = await fetcher<Snippet>(`manager/snippet/${params.id}`)
    return <ViewSnippetPage snippet={snippet}/>
}

export default ViewSnippet;