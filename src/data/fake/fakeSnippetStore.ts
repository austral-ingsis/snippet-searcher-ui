import {Test} from "@/data/test";

export const INITIAL_TEST: Test[] = [
  {
    id: '1234',
    name: 'Test 1',
    input: ["Hello"],
    output: ["World"],
    snippet: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
  }
]