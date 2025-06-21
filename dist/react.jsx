'use client';
import fetcher from './fetcher';
import { useIndex } from 'asasvirtuais-react/src/hooks';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldsProvider } from 'asasvirtuais-react/src/fields';
import { FormProvider } from 'asasvirtuais-react/src/forms';
import { createContextFromHook } from 'asasvirtuais-react/src/context';
export function react(database) {
    const { apis } = fetcher(database);
    function useTableProvider({ table, asAbove }) {
        const index = useIndex({ ...(asAbove ?? {}) });
        useEffect(function soBelow() {
            index.setIndex(prev => ({ ...prev, ...asAbove }));
        }, [asAbove]);
        const find = useBlueprint(useMemo(() => (apis.find
            .enforce({ table })
            .after(async (result) => index.set(await result))), [table]));
        const create = useBlueprint(useMemo(() => (apis.create
            .enforce({ table })
            .after(async (result) => index.set(await result))), [table]));
        const update = useBlueprint(useMemo(() => (apis.update
            .enforce({ table })
            .after(async (result) => index.set(await result))), [table]));
        const remove = useBlueprint(useMemo(() => (apis.remove
            .enforce({ table })
            .after(async (result) => index.remove(await result))), [table]));
        const list = useBlueprint(useMemo(() => (apis.list
            .enforce({ table })
            .after(async (result) => index.set(...(await result)))), [table]));
        return {
            find,
            create,
            update,
            remove,
            list,
            index,
        };
    }
    function useDatabaseProvider(tables) {
        return tables;
    }
    const [DatabaseProvider, useDatabase] = createContextFromHook(useDatabaseProvider);
    function useTable(name) {
        return useDatabase()[name];
    }
    function forms(name) {
        function CreateForm({ defaults, onSuccess, children }) {
            const { create } = useTable(name);
            const handleSubmit = useCallback(async (fields) => {
                await create({ data: fields }).then(onSuccess);
            }, [create, onSuccess]);
            return (<FieldsProvider defaults={defaults || {}}>
                    <FormProvider onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>);
        }
        function UpdateForm({ id, defaults, onSuccess, children }) {
            const { update } = useTable(name);
            const handleSubmit = useCallback(async (fields) => {
                await update({ id, data: fields }).then(onSuccess);
            }, [update, id, onSuccess]);
            return (<FieldsProvider defaults={defaults || {}}>
                    <FormProvider onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>);
        }
        function FilterForm({ defaults, onSuccess, children }) {
            const { list } = useTable(name);
            const handleSubmit = useCallback(async (fields) => {
                await list(fields).then(onSuccess);
            }, [list, onSuccess]);
            return (<FieldsProvider defaults={(defaults || {})}>
                    <FormProvider onSubmit={handleSubmit}>
                        {children}
                    </FormProvider>
                </FieldsProvider>);
        }
        return {
            CreateForm,
            UpdateForm,
            FilterForm,
        };
    }
    return {
        DatabaseProvider,
        useDatabase,
        useTable,
        useTableProvider,
        forms,
    };
}
function useBlueprint(blueprint) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const enhancedBlueprint = useMemo(() => blueprint
        .before(() => setLoading(true))
        .after(async (promise) => {
        try {
            const result = await promise;
            setResult(result);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }), [blueprint]);
    return useMemo(() => Object.assign(enhancedBlueprint, { loading, error, result }), [enhancedBlueprint, loading, error, result]);
}
//# sourceMappingURL=react.jsx.map