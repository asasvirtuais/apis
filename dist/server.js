import database from './database';
// Goal: to use this function like so. route( blueprintInstance.implement )
export function route(blueprint) {
    return async (request, { params }) => {
        const resolvedParams = await params;
        const result = await blueprint({ request, params: resolvedParams });
        return Response.json(result);
    };
}
export function server(databaseSchema) {
    const { table } = database(databaseSchema);
    // function nextRoutes<Table extends TableName>() {
    //     return {
    //         find(blueprint: IBlueprint<any, any>) {
    //             return route<{id: string}>(
    //                 blueprint.defaults(({ params }) => ({ id: params.id }))
    //             )
    //         },
    //         list(blueprint: IBlueprint<any, any>) {
    //             return route(
    //                 blueprint.defaults(({ request }) => Object.fromEntries(new URL(request.url).searchParams))
    //             )
    //         },
    //         create(blueprint: IBlueprint<any, any>) {
    //             return route(
    //                 blueprint.defaults(async ({ request }) => ({ data: await request.json() }))
    //             )
    //         },
    //         update(blueprint: IBlueprint<any, any>) {
    //             return route<{id: string}>(
    //                 blueprint.defaults(async ({ request, params }) => ({ id: params.id, data: await request.json() }))
    //             )
    //         },
    //         remove(blueprint: IBlueprint<any, any>) {
    //             return route<{id: string}>(
    //                 blueprint.defaults(({ params }) => ({ id: params.id }))
    //             )
    //         },
    //     }
    // }
    return {
        // nextRoutes: nextRoutes,
        table,
    };
}
//# sourceMappingURL=server.js.map