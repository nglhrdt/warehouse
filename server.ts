import express from 'express';
import compartmentRoutes from './routes/compartmentRoutes';

const app = express();
app.use(express.json());
app.use('/api', compartmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
