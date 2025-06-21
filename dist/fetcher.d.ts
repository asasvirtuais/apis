import z from 'zod';
export default function fetcher<Database extends Record<string, {
    readable: z.SomeZodObject;
    writeable: z.SomeZodObject;
}>>(database: Database): {
    api: <T extends keyof Database & string>(table: T) => {
        find: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, "table">, Promise<{}>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<import("asasvirtuais-tools/src/list/blueprint").Result<{}>>>;
    };
    apis: {
        find: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, Promise<{}>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            data: {};
        } & {
            url?: string;
        }, Promise<{}>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
        }, Promise<{}>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, Promise<{}>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
        } & {
            url?: string;
        }, Promise<import("asasvirtuais-tools/src/list/blueprint").Result<{}>>>;
    };
};
//# sourceMappingURL=fetcher.d.ts.map