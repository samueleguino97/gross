import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";

import Home from "./routes/home.tsx";
import AppLayout from "./routes/app-layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Orders from "./routes/orders.tsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import KitchenOrders from "./routes/kitchen.tsx";
import Authentication from "./routes/auth.tsx";

const rootRoute = new RootRoute({
  component: () => {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});

const appRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "app",
  component: AppLayout,
});

const homeRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/",
  component: Authentication,
});

const ordersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "pedidos",
  component: Orders,
});

const kitchenOrders = new Route({
  getParentRoute: () => rootRoute,
  path: "cocina",
  component: KitchenOrders,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "auth",
  component: Authentication,
});

const routeTree = rootRoute.addChildren([
  appRoute.addChildren([ordersRoute, homeRoute]),
  kitchenOrders,
  authRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement && !rootElement?.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
