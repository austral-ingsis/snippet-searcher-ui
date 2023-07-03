import SnippetPage from "@/modules/snippets/snippetPage";
import {INITIAL_SNIPPETS} from "@/data/fake/fakeSnippetStore";

const Snippets = async () => {
    // const snippets = await fetcher<Snippet[]>('manager')
    const snippets = INITIAL_SNIPPETS
    return <SnippetPage snippets={snippets}/>
}
export default Snippets;