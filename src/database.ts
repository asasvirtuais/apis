// Works
import z from 'zod'
import createBP from 'asasvirtuais-tools/src/create/blueprint.js'
import removeBP from 'asasvirtuais-tools/src/remove/blueprint.js'
import findBP from 'asasvirtuais-tools/src/find/blueprint.js'
import listBP from 'asasvirtuais-tools/src/list/blueprint.js'
import updateBP from 'asasvirtuais-tools/src/update/blueprint.js'

export default function database<Database extends Record<string, { readable: z.SomeZodObject, writeable: z.SomeZodObject }>>(database: Database) {

    type TableName = keyof Database & string

    function table<T_Name extends TableName>(tableName: T_Name) {

        const module = database[tableName]

        const { readable, writeable } = module

        type readable = z.infer<typeof readable>
        type writeable = z.infer<typeof writeable>

        return {
            find: findBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise) as readable),

            create: createBP
                .enforce({ table: tableName }) 
                .input(({data, ...props}) => ({ ...props, data: data as writeable }))
                .output(async (promise) => (await promise) as readable),

            update: updateBP
                .enforce({ table: tableName }) 
                .input((props) => {
                    const { id, data } = props;
                    return { id, data: data as Partial<writeable> };
                })
                .output(async (promise) => (await promise) as readable),

            remove: removeBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise) as readable),

            list: listBP
                .enforce({ table: tableName })
                .output(async (promise) => (await promise) as readable[]),
        }
    }

    return {
        table
    }
}
