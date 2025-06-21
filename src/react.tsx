'use client'
// Works
import z from 'zod'
import fetcher from './fetcher'
import { useIndex } from 'asasvirtuais-react/src/hooks'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FieldsProvider } from 'asasvirtuais-react/src/fields'
import { FormProvider } from 'asasvirtuais-react/src/forms'
import { Props as ListProps, Result as ListResult } from 'asasvirtuais-tools/src/list/blueprint.js' // Assuming this is for filter props
import { IBlueprint } from 'asasvirtuais-blueprint/src/index'
import { createContextFromHook } from 'asasvirtuais-react/src/context'

export function react<DatabaseSchema extends Record<string, { readable: z.SomeZodObject, writeable: z.SomeZodObject }>>(database: DatabaseSchema) {

    type TableName = keyof DatabaseSchema & string

    const { apis } = fetcher(database)

    function useTableProvider<T extends TableName>({table, asAbove}: {table: T, asAbove?: Record<string, z.infer<DatabaseSchema[T]['readable']>>}) {

        type readable = z.infer<DatabaseSchema[T]['readable']>

        const index = useIndex<readable>({...(asAbove??{})})

        useEffect(
            function soBelow() {
                index.setIndex(prev => ({...prev, ...asAbove}))
            }
        , [asAbove])

        const find = useBlueprint(
            useMemo(
                () => (
                    apis.find
                    .enforce({table})
                    .after(async result => index.set(await result))
                ),
                [table]
            )
        )
        const create = useBlueprint(
            useMemo(
                () => (
                    apis.create
                    .enforce({table})
                    .after(async result => index.set(await result))
                ),
                [table]
            )
        )
        const update = useBlueprint(
            useMemo(
                () => (
                    apis.update
                    .enforce({table})
                    .after(async result => index.set(await result))
                ),
                [table]
            )
        )
        const remove = useBlueprint(
            useMemo(
                () => (
                    apis.remove
                    .enforce({table})
                    .after(async result => index.remove(await result))
                ),
                [table]
            )
        )
        const list = useBlueprint(
            useMemo(
                () => (
                    apis.list
                    .enforce({table})
                    .after(async result => index.set(...(await result)))
                ),
                [table]
            )
        )

        return {
            find,
            create,
            update,
            remove,
            list,
            index,
        }

    }

    function useDatabaseProvider( tables: {
        [T in TableName]: ReturnType<typeof useTableProvider<T>>
    }) {
        return tables
    }

    const [DatabaseProvider, useDatabase] = createContextFromHook(useDatabaseProvider)
    
    function useTable<T extends TableName>(name: T) {
        return useDatabase()[name]
    }

    function forms<T extends TableName>(name: T) {
        type readable = z.infer<DatabaseSchema[T]['readable']>
        type writeable = z.infer<DatabaseSchema[T]['writeable']>

        // --- CreateForm ---
        type CreateFormProps = {
            defaults?: Partial<writeable>
            onSuccess?: (result: readable) => void
            children: React.ReactNode
        }

        function CreateForm({ defaults, onSuccess, children }: CreateFormProps) {
            const { create } = useTable(name)

            const handleSubmit = useCallback(
                async (fields: writeable) => {
                    await create({ data: fields }).then(onSuccess)
                },
            [create, onSuccess] )

            return (
                <FieldsProvider<writeable> defaults={defaults || {} as writeable}>
                    <FormProvider<writeable> onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>
            )
        }

        // --- UpdateForm ---
        type UpdateFormProps = {
            id: string // ID of the item to update
            defaults?: Partial<writeable>
            onSuccess?: (result: readable) => void
            children: React.ReactNode
        }

        function UpdateForm({ id, defaults, onSuccess, children }: UpdateFormProps) {
            const { update } = useTable(name)
            
            const handleSubmit = useCallback(async (fields: Partial<writeable>) => {
                await update({ id, data: fields }).then(onSuccess)
            }, [update, id, onSuccess])

            return (
                <FieldsProvider<Partial<writeable>> defaults={defaults || {} as Partial<writeable>}>
                    <FormProvider<Partial<writeable>> onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>
            )
        }

        // --- FilterForm (for listing items) ---
        // Assuming ListProps is the type for filter parameters
        type FilterFormProps = {
            defaults?: Partial<ListProps<readable>>
            onSuccess?: (result: ListResult<readable>) => void
            children: React.ReactNode
        }

        function FilterForm({ defaults, onSuccess, children }: FilterFormProps) {
            const { list } = useTable(name)

            const handleSubmit = useCallback(async (fields: Omit<ListProps<readable>, 'table'>) => {
                await list(fields).then(onSuccess)
            }, [list, onSuccess])

            return (
                <FieldsProvider<ListProps<readable>> defaults={(defaults || {} )as ListProps<readable>}>
                    <FormProvider<ListProps<readable>> onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>
            )
        }

        return {
            CreateForm,
            UpdateForm,
            FilterForm,
        }
    }

    return {
        DatabaseProvider,
        useDatabase,
        useTable,
        useTableProvider,
        forms,
    }
}

function useBlueprint<Props, Result>(blueprint: IBlueprint<Props, Result>): IBlueprint<Props, Result> & {
    result: Result | null
    loading: boolean
    error: Error | null
} {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [result, setResult] = useState<Result | null>(null)

    const enhancedBlueprint = useMemo(
        () => blueprint
            .before(() => setLoading(true))
            .after(async promise => {
                try {
                    const result = await promise
                    setResult(result)
                } catch (err) {
                    setError(err as Error)
                } finally {
                    setLoading(false)
                }
            }),
        [blueprint]
    )

    return useMemo(
        () => Object.assign(enhancedBlueprint, { loading, error, result }),
        [enhancedBlueprint, loading, error, result]
    )
}