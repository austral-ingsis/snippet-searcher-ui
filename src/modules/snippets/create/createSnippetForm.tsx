"use client"
import {CreateSnippetSchema, Snippet, SnippetType} from '@/data/snippet'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Button, Grid} from '@mui/material'
import {FormContainer, SelectElement, TextFieldElement} from 'react-hook-form-mui'
import {SnippetFileField} from '@/modules/snippets/create/snippetFileField'
import {poster} from "@/data/fetcher";
import {useRouter} from "next/navigation";
import {getAccessToken} from "@auth0/nextjs-auth0";
import {useAccessToken} from "@/components/globalContext";

const TYPE_OPTIONS = [
    {
        id: 'PRINTSCRIPT' as SnippetType,
        label: 'Printscript',
    }
]


export const CreateSnippetForm = () => {

    const router = useRouter();
    const accessToken = useAccessToken();
    const onCreate = async(body: Partial<Snippet>) => {
        await poster<Snippet>('manager/create', body, accessToken);
        router.push('/snippets')
    }
    const onCancel = async() => {
        await router.push('/snippets')
    }

    return (
        <FormContainer
            resolver={zodResolver(CreateSnippetSchema)}
            onSuccess={onCreate}
            onError={errors => console.log(errors)}

        >
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <TextFieldElement
                        required
                        fullWidth
                        id="snippet-name"
                        name="name"
                        label="Name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={4}>
                    <SelectElement
                        fullWidth
                        id="snippet-type"
                        name="type"
                        label="Type"
                        defaultValue="printscript"
                        variant="outlined"
                        options={TYPE_OPTIONS}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SnippetFileField/>
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button sx={{mt: 3, ml: 1}} onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1, boxShadow: 0}}
                    type="submit"
                >
                    Create
                </Button>
            </Box>
        </FormContainer>
    )
}