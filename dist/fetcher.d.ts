import z from 'zod';
import { Result as ListResult } from 'asasvirtuais-tools/src/list/blueprint';
export default function fetcher<Database extends Record<string, {
    readable: z.SomeZodObject;
    writable: z.SomeZodObject;
}>>(database: Database): {
    api: <T extends keyof Database & string>(table: T) => {
        find: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            url?: string;
            table: keyof Database & string;
            id: string;
        }, "table">, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            url?: string;
            table: keyof Database & string;
            data: z.TypeOf<Database[keyof Database & string]["writable"]>;
        }, "table">, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            url?: string;
            table: keyof Database & string;
            id: string;
            data: Partial<z.TypeOf<Database[keyof Database & string]["writable"]>>;
        }, "table">, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            url?: string;
            table: keyof Database & string;
            id: string;
        }, "table">, Promise<Partial<z.TypeOf<Database[keyof Database & string]["readable"]>>>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<Omit<{
            url?: string;
            table: keyof Database & string;
        }, "table">, Promise<ListResult<z.TypeOf<Database[keyof Database & string]["readable"]>>>>;
    };
    apis: {
        find: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            url?: string;
            table: keyof Database & string;
            id: string;
        }, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        create: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            url?: string;
            table: keyof Database & string;
            data: z.TypeOf<Database[keyof Database & string]["writable"]>;
        }, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        update: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            url?: string;
            table: keyof Database & string;
            id: string;
            data: Partial<z.TypeOf<Database[keyof Database & string]["writable"]>>;
        }, Promise<z.TypeOf<Database[keyof Database & string]["readable"]>>>;
        remove: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            url?: string;
            table: keyof Database & string;
            id: string;
        }, Promise<Partial<z.TypeOf<Database[keyof Database & string]["readable"]>>>>;
        list: import("asasvirtuais-blueprint/src/index").IBlueprint<{
            url?: string;
            table: keyof Database & string;
        }, Promise<ListResult<z.TypeOf<Database[keyof Database & string]["readable"]>>>>;
    };
};
//# sourceMappingURL=fetcher.d.ts.map