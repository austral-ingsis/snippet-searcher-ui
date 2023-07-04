import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Button, Grid} from '@mui/material'
import {Controller, FormContainer} from 'react-hook-form-mui'
import {Snippet, UpdateSnippetSchema} from '@/data/snippet'
import {javascript} from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'

export const EditSnippetForm = ({snippet}: { snippet: Snippet }) => {
    const onUpdate = () => {
        return;
    }
    const onCancel = () => {
        return;
    }

    return (
        <FormContainer
            resolver={zodResolver(UpdateSnippetSchema)}
            onSuccess={onUpdate}
            onError={errors => console.log(errors)}
            defaultValues={snippet}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller
                        name="content"
                        render={({field}) => (
                            <CodeMirror
                                value={field.value}
                                onChange={field.onChange}
                                height="500px"
                                width="100%"
                                extensions={[javascript({typescript: true, jsx: false})]}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button sx={{mt: 3, ml: 1}} onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1}}
                    type="submit"
                >
                    Update
                </Button>
            </Box>
        </FormContainer>
    )
}