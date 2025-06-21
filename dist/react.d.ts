import z from 'zod';
import React from 'react';
import { Props as ListProps, Result as ListResult } from 'asasvirtuais-tools/src/list/blueprint.js';
import { IBlueprint } from 'asasvirtuais-blueprint/src/index';
export declare function react<DatabaseSchema extends Record<string, {
    readable: z.SomeZodObject;
    writeable: z.SomeZodObject;
}>>(database: DatabaseSchema): {
    DatabaseProvider: ({ children, ...props }: React.PropsWithChildren<{ [T in keyof DatabaseSchema & string]: {
        find: IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<ListResult<{}>>> & {
            result: Promise<ListResult<{}>> | null;
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
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<ListResult<{}>>> & {
            result: Promise<ListResult<{}>> | null;
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
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<ListResult<{}>>> & {
            result: Promise<ListResult<{}>> | null;
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
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        create: IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        update: IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        remove: IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>> & {
            result: Promise<{}> | null;
            loading: boolean;
            error: Error | null;
        };
        list: IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<ListResult<{}>>> & {
            result: Promise<ListResult<{}>> | null;
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
            defaults?: Partial<z.TypeOf<DatabaseSchema[T]["writeable"]>>;
            onSuccess?: (result: z.TypeOf<DatabaseSchema[T]["readable"]>) => void;
            children: React.ReactNode;
        }) => React.JSX.Element;
        UpdateForm: ({ id, defaults, onSuccess, children }: {
            id: string;
            defaults?: Partial<z.TypeOf<DatabaseSchema[T]["writeable"]>>;
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