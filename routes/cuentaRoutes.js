import express from 'express';
import * as cuentasController from '../controllers/cuentasControllers.js';
const router = express.Router();

router.get('/', cuentasController.getCuentas);


router.get('/buscar', cuentasController.getCuentaByQuery);


router.get('/:id', cuentasController.getCuentaById);


router.get('/balance', cuentasController.getCuentasBalance);

export default router;
