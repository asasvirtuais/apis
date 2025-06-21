import z from 'zod';
import { IBlueprint } from 'asasvirtuais-blueprint/src/index';
export declare function route<Params = any>(blueprint: IBlueprint<any, any>): (request: Request, { params }: {
    params: Promise<Params>;
}) => Promise<Response>;
export declare function server<DatabaseSchema extends Record<string, {
    readable: z.SomeZodObject;
    writable: z.SomeZodObject;
}>>(databaseSchema: DatabaseSchema): {
    table: <T_Name extends keyof DatabaseSchema & string>(tableName: T_Name) => {
        find: IBlueprint<Omit<{
            table: string;
            id: string;
        }, "table">, Promise<{
            [x: string]: any;
        }>>;
        create: IBlueprint<{
            data: {
                [x: string]: any;
            };
        }, Promise<{
            [x: string]: any;
        }>>;
        update: IBlueprint<{
            id: string;
            data: Partial<{
                [x: string]: any;
            }>;
        }, Promise<{
            [x: string]: any;
        }>>;
        remove: IBlueprint<Omit<{
            table: string;
            id: string;
        }, "table">, Promise<{
            [x: string]: any;
        }>>;
        list: IBlueprint<Omit<{
            table: string;
        }, "table">, Promise<{
            [x: string]: any;
        }[]>>;
    };
};
//# sourceMappingURL=server.d.ts.map