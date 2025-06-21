// import { findBP } from '@asasvirtuais/tools/src/find/blueprint'
// import { listBP } from '@asasvirtuais/tools/src/list/blueprint'
// import { createBP } from '@asasvirtuais/tools/src/create/blueprint'
// import { updateBP } from '@asasvirtuais/tools/src/update/blueprint'
// import { removeBP } from '@asasvirtuais/tools/src/remove/blueprint'
// Goal: to use this function like so. route( blueprintInstance.implement )
export function route(blueprint) {
    return async (request, { params }) => {
        const resolvedParams = await params;
        const result = await blueprint({ request, params: resolvedParams });
        return Response.json(result);
    };
}
export function databaseRouter(databaseCRUD) {
    // erase
    const router = {};
    // erase
    for (const key in databaseCRUD) {
        const tableCRUD = databaseCRUD[key];
        // @ts-expect-error no idea what that is
        router[key] = {
            find: route(
            // @ts-ignore Todo: implement a function IBlueprint.extendProps method
            tableCRUD.find.input(({ params }) => ({ id: params.id }))),
            list: route(
            // @ts-ignore Todo: implement a function IBlueprint.extendProps method
            tableCRUD.list.defaults(({ request }) => Object.fromEntries(new URL(request.url).searchParams))),
            create: route(
            // @ts-ignore Todo: implement a function IBlueprint.extendProps method
            tableCRUD.create.defaults(async ({ request }) => ({ data: await request.json() }))),
            update: route(
            // @ts-ignore Todo: implement a function IBlueprint.extendProps method
            tableCRUD.update.defaults(async ({ request, params }) => ({ id: params.id, data: await request.json() }))),
            remove: route(
            // @ts-ignore Todo: implement a function IBlueprint.extendProps method
            tableCRUD.remove.defaults(({ params }) => ({ id: params.id }))),
        };
    }
    async function databaseRoute(request, params) {
        const [table, id] = await params.params;
        const tableRouter = router[table];
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
    };
}
//# sourceMappingURL=next.js.map