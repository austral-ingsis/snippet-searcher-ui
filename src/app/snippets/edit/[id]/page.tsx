import {Snippet} from "@/data/snippet";
import {fetcher} from "@/data/fetcher";
import EditSnippetPage from "@/modules/snippets/edit/editSnippetPage";

const EditSnippet = async ({params}: { params: { id: string } }) => {
  const snippet = await fetcher<Snippet>(`manager/${params.id}`)
  return <EditSnippetPage snippet={snippet}/>
}

export default EditSnippet;