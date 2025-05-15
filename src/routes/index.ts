import { Router } from 'express'
import { productsRoutes } from './products-routes'
import { tablesRoutes } from './tables-routes'
import { tablesSessionsRoutes } from './tables-sessions-routes'
import { ordersRoutes } from './orders-routes'
import { OrdersController } from '@/controllers/orders-controller'


const routes = Router()
routes.use('/products', productsRoutes)
routes.use('/tables', tablesRoutes)
routes.use('/tables-sessions', tablesSessionsRoutes)
routes.use('/orders', ordersRoutes)


export { routes }