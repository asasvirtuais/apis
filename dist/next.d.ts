import z from 'zod';
import { IBlueprint } from 'asasvirtuais-blueprint/src/index';
export declare function route<Params = any>(blueprint: IBlueprint<any, any>): (request: Request, { params }: {
    params: Promise<Params>;
}) => Promise<Response>;
export declare function databaseRouter<DatabaseSchema extends Record<string, {
    readable: z.SomeZodObject;
    writable: z.SomeZodObject;
}>>(databaseCRUD: {
    [K in keyof DatabaseSchema]: {
        find: IBlueprint<any, any>;
        list: IBlueprint<any, any>;
        create: IBlueprint<any, any>;
        update: IBlueprint<any, any>;
        remove: IBlueprint<any, any>;
    };
}): {
    databaseRoute: (request: Request, params: {
        params: Promise<[table: keyof DatabaseSchema, id?: string]>;
    }) => Promise<void>;
};
//# sourceMappingURL=next.d.ts.map