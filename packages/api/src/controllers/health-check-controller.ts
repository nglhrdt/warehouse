import { Request, Response } from 'express';
import { HealthCheckResponse, HealthState } from '../../../shared/lib/interfaces';

function healthCheck() {
    return (req: Request, res: Response) => {
        const state: HealthCheckResponse = {
            state: HealthState.UP,
            timestamp: new Date().toISOString()
        };
        res.status(200).json(state);
    };
}
export default healthCheck;