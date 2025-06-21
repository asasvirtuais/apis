import blueprint from 'asasvirtuais-blueprint/src/index';
export default function fetcher(database) {
    const apis = {
        find: blueprint(async ({ url, table, id }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`);
            const result = await response.json();
            return result;
        }),
        create: blueprint(async ({ url, table, data }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        }),
        update: blueprint(async ({ url, table, id, data }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        }),
        remove: blueprint(async ({ url, table, id }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            return result;
        }),
        list: blueprint(async ({ url, table }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}`);
            const result = await response.json();
            return result;
        })
    };
    function api(table) {
        return {
            find: apis.find.enforce({ table }),
            create: apis.create.enforce({ table }),
            update: apis.update.enforce({ table }),
            remove: apis.remove.enforce({ table }),
            list: apis.list.enforce({ table }),
        };
    }
    return {
        api,
        apis,
    };
}
//# sourceMappingURL=fetcher.js.map