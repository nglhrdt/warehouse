import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HealthCheck from "./components/HealthCheck";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HealthCheck />
    </QueryClientProvider>
  );
}

export default App;
