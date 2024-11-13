import { createQueryKeys } from "@lukemorales/query-key-factory";

export const health = createQueryKeys("health", {
    check: {
        queryKey: null,
        queryFn: () => api.healthCheck(),
    },
});