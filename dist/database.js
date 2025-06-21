import createBP from 'asasvirtuais-tools/src/create/blueprint.js';
import removeBP from 'asasvirtuais-tools/src/remove/blueprint.js';
import findBP from 'asasvirtuais-tools/src/find/blueprint.js';
import listBP from 'asasvirtuais-tools/src/list/blueprint.js';
import updateBP from 'asasvirtuais-tools/src/update/blueprint.js';
export default function database(database) {
    function table(tableName) {
        const module = database[tableName];
        const { readable, writable } = module;
        return {
            find: findBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise)),
            create: createBP
                .enforce({ table: tableName })
                .input(({ data, ...props }) => ({ ...props, data: data }))
                .output(async (promise) => (await promise)),
            update: updateBP
                .enforce({ table: tableName })
                .input((props) => {
                const { id, data } = props;
                return { id, data: data };
            })
                .output(async (promise) => (await promise)),
            remove: removeBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise)),
            list: listBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise)),
        };
    }
    return {
        table
    };
}
//# sourceMappingURL=database.js.map