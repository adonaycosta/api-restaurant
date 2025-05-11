import { Router } from "express"

import { TablesSessionsController } from "@/controllers/tables-sessions-controller"

const tablesSessionsRoutes = Router()
const tablesSessionController = new TablesSessionsController

tablesSessionsRoutes.get('/', tablesSessionController.index)
tablesSessionsRoutes.post('/', tablesSessionController.create)
tablesSessionsRoutes.patch('/:id', tablesSessionController.update)


export {tablesSessionsRoutes}