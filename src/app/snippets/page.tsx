import SnippetPage from "@/modules/snippets/snippetPage";
import {Snippet} from "@/data/snippet";
import {fetcher} from "@/data/fetcher";

const Snippets = async () => {
    const snippets = await fetcher<Snippet[]>('manager')
    return <SnippetPage snippets={snippets}/>
}
export default Snippets;