// Doesn't work at all
import z from 'zod'
// import database from './database'
import { IBlueprint } from 'asasvirtuais-blueprint/src/index'
// import { findBP } from '@asasvirtuais/tools/src/find/blueprint'
// import { listBP } from '@asasvirtuais/tools/src/list/blueprint'
// import { createBP } from '@asasvirtuais/tools/src/create/blueprint'
// import { updateBP } from '@asasvirtuais/tools/src/update/blueprint'
// import { removeBP } from '@asasvirtuais/tools/src/remove/blueprint'

// Goal: to use this function like so. route( blueprintInstance.implement )
export function route<Params = any>(blueprint: IBlueprint<any, any>) {
    return async (request: Request, { params }: { params: Promise<Params> }) => {
        const resolvedParams = await params
        const result = await blueprint({ request, params: resolvedParams })
        return Response.json(result)
    }
}

export function databaseRouter<DatabaseSchema extends Record<string, { readable: z.SomeZodObject, writable: z.SomeZodObject }>>(databaseCRUD: {
    [K in keyof DatabaseSchema]: {
        find:   IBlueprint<any, any>,
        list:   IBlueprint<any, any>,
        create: IBlueprint<any, any>,
        update: IBlueprint<any, any>,
        remove: IBlueprint<any, any>,
    }
}) {

    // erase
    const router = {} as {
        [K in keyof DatabaseSchema]: {
            find: ReturnType<typeof route>,
            list: ReturnType<typeof route>,
            create: ReturnType<typeof route>,
            update: ReturnType<typeof route>,
            remove: ReturnType<typeof route>,
            
        }
    }
    // erase
    for (const key in databaseCRUD) {
        const tableCRUD = databaseCRUD[key]
        // @ts-expect-error no idea what that is
        router[key as keyof DatabaseSchema] = {
            find: route<{id: string}>(
                // @ts-ignore Todo: implement a function IBlueprint.extendProps method
                tableCRUD.find.input(({ params }) => ({ id: params.id }))
            ),
            list: route(
                // @ts-ignore Todo: implement a function IBlueprint.extendProps method
                tableCRUD.list.defaults(({ request }) => Object.fromEntries(new URL(request.url).searchParams))
            ),
            create: route(
                // @ts-ignore Todo: implement a function IBlueprint.extendProps method
                tableCRUD.create.defaults(async ({ request }) => ({ data: await request.json() }))
            ),
            update: route(
                // @ts-ignore Todo: implement a function IBlueprint.extendProps method
                tableCRUD.update.defaults(async ({ request, params }) => ({ id: params.id, data: await request.json() }))
            ),
            remove: route(
                // @ts-ignore Todo: implement a function IBlueprint.extendProps method
                tableCRUD.remove.defaults(({ params }) => ({ id: params.id }))
            ),
        }
    }
    
    async function databaseRoute(request: Request, params: { params: Promise<[table: keyof DatabaseSchema, id?: string]> }) {

        const [table, id] = await params.params

        const tableRouter = router[table]

        // if ( request.method === 'GET' )
        //     if (id)
        //         find // todo
        //     else
        //         list // todo
        // if ( request.method === 'POST' )
        //     create // todo
        // if ( request.method === 'PATCH' )
        //     update // todo
        // if ( request.method === 'DELETE' )
        //     remove // todo
    }
 
    return {
        databaseRoute,
    }
}