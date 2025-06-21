import createBP from 'asasvirtuais-tools/src/create/blueprint';
import removeBP from 'asasvirtuais-tools/src/remove/blueprint';
import findBP from 'asasvirtuais-tools/src/find/blueprint';
import listBP from 'asasvirtuais-tools/src/list/blueprint';
import updateBP from 'asasvirtuais-tools/src/update/blueprint';
import blueprint from 'asasvirtuais-blueprint/src/index';
export default function fetcher(database) {
    const apis = {
        find: findBP.toAsync().more(() => (blueprint(async ({ url, table, id }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`);
            const result = await response.json();
            return result;
        }))),
        create: createBP.toAsync().more(() => (blueprint(async ({ url, table, data }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        }))),
        update: updateBP.toAsync().more(() => (blueprint(async ({ url, table, id, data }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            return result;
        }))),
        remove: removeBP.toAsync().more(() => (blueprint(async ({ url, table, id }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            return result;
        }))),
        list: listBP.toAsync().more(() => (blueprint(async ({ url, table }) => {
            const response = await fetch(`${url ?? ''}/api/v1/${table}`);
            const result = await response.json();
            return result;
        }))),
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