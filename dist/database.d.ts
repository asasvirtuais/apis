import z from 'zod';
export default function database<Database extends Record<string, {
    readable: z.SomeZodObject;
    writable: z.SomeZodObject;
}>>(database: Database): {
    table: <T_Name extends keyof Database & string>(tableName: T_Name) => {
        find: import("asasvirtuais-blueprint/src").IBlueprint<Omit<{
            table: string;
            id: string;
        }, "table">, Promise<{
            [x: string]: any;
        }>>;
        create: import("asasvirtuais-blueprint/src").IBlueprint<{
            data: {
                [x: string]: any;
            };
        }, Promise<{
            [x: string]: any;
        }>>;
        update: import("asasvirtuais-blueprint/src").IBlueprint<{
            id: string;
            data: Partial<{
                [x: string]: any;
            }>;
        }, Promise<{
            [x: string]: any;
        }>>;
        remove: import("asasvirtuais-blueprint/src").IBlueprint<Omit<{
            table: string;
            id: string;
        }, "table">, Promise<{
            [x: string]: any;
        }>>;
        list: import("asasvirtuais-blueprint/src").IBlueprint<Omit<{
            table: string;
        }, "table">, Promise<{
            [x: string]: any;
        }[]>>;
    };
};
//# sourceMappingURL=database.d.ts.map