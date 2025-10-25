import  express from 'express';   
const app = express();
import cuentasRoutes from './routes/cuentaRoutes.js';
const PORT = 3130;

app.use(express.json());
app.use('/cuentas', cuentasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo correctamente en http://localhost:${PORT}`);
});