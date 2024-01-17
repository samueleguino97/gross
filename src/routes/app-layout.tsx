import { Link, Outlet } from "@tanstack/react-router";

function AppLayout() {
  return (
    <div className="h-screen w-full">
      <div className="flex gap-4">
        <nav className="h-full w-max p-4 gap-2 flex flex-col">
          <div className="text-sm py-2 bg-slate-200 px-4">Gross Coffee</div>
          <Link to="/">Dashboard</Link>
          <Link to="/pedidos">Pedidos</Link>
          <Link to="/">Punto de Venta</Link>
          <Link to="/">Inventory</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
