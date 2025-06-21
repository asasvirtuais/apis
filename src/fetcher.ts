// Works
import z from 'zod'
import blueprint from 'asasvirtuais-blueprint/src/index'
import { Result as ListResult } from 'asasvirtuais-tools/src/list/blueprint'

export default function fetcher<Database extends Record<string, { readable: z.SomeZodObject, writable: z.SomeZodObject }>>(database: Database) {

    type TableName = keyof Database & string
    type Readable = z.infer<Database[TableName]['readable']>
    type Writable = z.infer<Database[TableName]['writable']>

    const apis = {
        find: blueprint(
            async ({url, table, id}: { url?: string, table: TableName, id: string }) => {
                const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`)
                const result = await response.json()
                return result as Readable
            }
        ),
        create: blueprint(
            async ({url, table, data}: { url?: string, table: TableName, data: Writable }) => {
                const response = await fetch(`${url ?? ''}/api/v1/${table}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                const result = await response.json()
                return result as Readable
            }
        ),
        update: blueprint(
            async ({url, table, id, data}: { url?: string, table: TableName, id: string, data: Partial<Writable> }) => {
                const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                const result = await response.json()
                return result as Readable
            }
        ),
        remove: blueprint(
            async ({url, table, id}: { url?: string, table: TableName, id: string }) => {
                const response = await fetch(`${url ?? ''}/api/v1/${table}/${id}`, {
                    method: 'DELETE',
                })
                const result = await response.json()
                return result as Partial<Readable>
            }
        ),
        list: blueprint(
            async ({url, table}: { url?: string, table: TableName }) => {
                const response = await fetch(`${url ?? ''}/api/v1/${table}`)
                const result = await response.json()
                return result as ListResult<Readable>
            }
        )
    }

    function api<T extends TableName>(table: T) {

        return {
            find: apis.find.enforce({ table }),
            create: apis.create.enforce({ table }),
            update: apis.update.enforce({ table }),
            remove: apis.remove.enforce({ table }),
            list: apis.list.enforce({ table }),
        }
    }

    return {
        api,
        apis,
    }
}
