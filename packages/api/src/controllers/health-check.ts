import { HealthCheckDTO } from 'api';
import { Request, Response } from 'express';

function healthCheck() {
    return (req: Request, res: Response) => {
        const state: HealthCheckDTO = {
            state: "UP",
            timestamp: new Date().toISOString()
        };
        res.status(200).json(state);
    };
}
export default healthCheck;