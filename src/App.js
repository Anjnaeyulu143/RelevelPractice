import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Ecommerce } from "./Pages/Ecommerce";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Ecommerce />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
