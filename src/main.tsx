import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createRoot } from "react-dom/client";
import "./fonts/font.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
