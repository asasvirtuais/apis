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
        }, "table">, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            data: {};
        } & {
            url?: string;
            data: z.TypeOf<Database[keyof Database & string]["writeable"]>;
        }, "table">, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
            data: z.TypeOf<Database[keyof Database & string]["writeable"]>;
        }, "table">, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, "table">, Promise<{}> & Partial<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            table: string;
        } & {
            url?: string;
        }, "table">, Promise<import("asasvirtuais-tools/src/list/blueprint").Result<{}>> & {
            data: z.TypeOf<Database[keyof Database & string]["readable"]>[];
        }>;
    };
    apis: {
        find: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            data: {};
        } & {
            url?: string;
            data: z.TypeOf<Database[keyof Database & string]["writeable"]>;
        }, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            data: {};
            id: string;
        } & {
            url?: string;
            data: z.TypeOf<Database[keyof Database & string]["writeable"]>;
        }, Promise<{}> & z.TypeOf<Database[keyof Database & string]["readable"]>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
            id: string;
        } & {
            url?: string;
        }, Promise<{}> & Partial<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            table: string;
        } & {
            url?: string;
        }, Promise<import("asasvirtuais-tools/src/list/blueprint").Result<{}>> & {
            data: z.TypeOf<Database[keyof Database & string]["readable"]>[];
        }>;
    };
};
//# sourceMappingURL=fetcher.d.ts.map