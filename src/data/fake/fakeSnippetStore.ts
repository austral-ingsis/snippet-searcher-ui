import {Snippet} from "@/data/snippet";
import {Test} from "@/data/test";

export const INITIAL_SNIPPETS: Snippet[] = [
  {
    id: '9af91631-cdfc-4341-9b8e-3694e5cb3672',
    name: 'Super Snippet',
    type: 'PRINTSCRIPT',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'pending'
  },
  {
    id: 'c48cf644-fbc1-4649-a8f4-9dd7110640d9',
    name: 'Extra cool Snippet',
    type: 'PRINTSCRIPT',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'not-compliant',
  },
  {
    id: '34bf4b7a-d4a1-48be-bb26-7d9a3be46227',
    name: 'Boaring Snippet',
    type: 'PRINTSCRIPT',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'compliant'
  }
]

export const INITIAL_TEST: Test[] = [
  {
    id: '1234',
    name: 'Test 1',
    input: ["Hello"],
    output: ["World"],
    snippet: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
  }
]