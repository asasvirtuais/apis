import z from 'zod';
import React from 'react';
import { Props as ListProps, Result as ListResult } from 'asasvirtuais-tools/src/list/blueprint.js';
import { IBlueprint } from 'asasvirtuais-blueprint/src/index';
export declare function react<DatabaseSchema extends Record<string, {
    readable: z.SomeZodObject;
    writable: z.SomeZodObject;
}>>(database: DatabaseSchema): {
    DatabaseProvider: ({ children, ...props }: React.PropsWithChildren<{ [T in keyof DatabaseSchema & string]: {
        find: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            data: z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
            data: Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
        }, "table">, Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        index: {
            index: Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>;
            array: z.TypeOf<DatabaseSchema[T]["readable"]>[];
            set: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
            setIndex: React.Dispatch<React.SetStateAction<Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>>>;
            remove: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
        };
    }; }>) => React.JSX.Element;
    useDatabase: () => { [T in keyof DatabaseSchema & string]: {
        find: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            data: z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
            data: Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
        }, "table">, Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        index: {
            index: Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>;
            array: z.TypeOf<DatabaseSchema[T]["readable"]>[];
            set: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
            setIndex: React.Dispatch<React.SetStateAction<Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>>>;
            remove: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
        };
    }; };
    useTable: <T extends keyof DatabaseSchema & string>(name: T) => { [T_1 in keyof DatabaseSchema & string]: {
        find: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            data: z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
            data: Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
        }, "table">, Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        index: {
            index: Record<string, z.TypeOf<DatabaseSchema[T_1]["readable"]>>;
            array: z.TypeOf<DatabaseSchema[T_1]["readable"]>[];
            set: (...params: z.TypeOf<DatabaseSchema[T_1]["readable"]>[]) => void;
            setIndex: React.Dispatch<React.SetStateAction<Record<string, z.TypeOf<DatabaseSchema[T_1]["readable"]>>>>;
            remove: (...params: z.TypeOf<DatabaseSchema[T_1]["readable"]>[]) => void;
        };
    }; }[T];
    useTableProvider: <T extends keyof DatabaseSchema & string>({ table, asAbove }: {
        table: T;
        asAbove?: Record<string, z.infer<DatabaseSchema[T]["readable"]>>;
    }) => {
        find: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            data: z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
            data: Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["writable"]>>;
        }, "table">, Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> & {
            result: Promise<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
            id: string;
        }, "table">, Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<Partial<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            url?: string;
            table: keyof DatabaseSchema & string;
        }, "table">, Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>>> & {
            result: Promise<ListResult<z.TypeOf<DatabaseSchema[keyof DatabaseSchema & string]["readable"]>>> | null;
            loading: boolean;
            error: Error | null;
        };
        index: {
            index: Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>;
            array: z.TypeOf<DatabaseSchema[T]["readable"]>[];
            set: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
            setIndex: React.Dispatch<React.SetStateAction<Record<string, z.TypeOf<DatabaseSchema[T]["readable"]>>>>;
            remove: (...params: z.TypeOf<DatabaseSchema[T]["readable"]>[]) => void;
        };
    };
    forms: <T extends keyof DatabaseSchema & string>(name: T) => {
        CreateForm: ({ defaults, onSuccess, children }: {
            defaults?: Partial<z.TypeOf<DatabaseSchema[T]["writable"]>>;
            onSuccess?: (result: z.TypeOf<DatabaseSchema[T]["readable"]>) => void;
            children: React.ReactNode;
        }) => React.JSX.Element;
        UpdateForm: ({ id, defaults, onSuccess, children }: {
            id: string;
            defaults?: Partial<z.TypeOf<DatabaseSchema[T]["writable"]>>;
            onSuccess?: (result: z.TypeOf<DatabaseSchema[T]["readable"]>) => void;
            children: React.ReactNode;
        }) => React.JSX.Element;
        FilterForm: ({ defaults, onSuccess, children }: {
            defaults?: Partial<ListProps<z.TypeOf<DatabaseSchema[T]["readable"]>>>;
            onSuccess?: (result: ListResult<z.TypeOf<DatabaseSchema[T]["readable"]>>) => void;
            children: React.ReactNode;
        }) => React.JSX.Element;
    };
};
//# sourceMappingURL=react.d.ts.map