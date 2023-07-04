import {z} from 'zod'

export const TestDescriptorSchema = z.object({
  id: z.string(),
  name: z.string(),
  input: z.array(z.string()),
  output: z.array(z.string()),
  snippet: z.string(),
})
export type TestDescriptor = z.infer<typeof TestDescriptorSchema>

export type Test = z.infer<typeof TestDescriptorSchema>
//
// export const CreateSnippetSchema = z.object({
//   name: z.string(),
//   type: SnippetTypeSchema,
//   content: z.string()
// })
// export type CreateSnippet = z.infer<typeof CreateSnippetSchema>
//
// export const UpdateSnippetSchema = z.object({
//   content: z.string()
// })
// export type UpdateSnippet = z.infer<typeof UpdateSnippetSchema>
