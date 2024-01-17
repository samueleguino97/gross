import { useState } from "react";
import KitchenOrder from "../components/kitchen-order";

function KitchenOrders() {
  const [readyOrders, setReadyOrders] = useState([{}, {}]);
  const [preparingOrders, setPreparingOrders] = useState([{}, {}]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium">Pedidos</h1>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-medium text-gray-700 mt-4">En Espera</h2>

          <div className="flex flex-col gap-2 mt-4">
            {readyOrders.map((_, i) => {
              return (
                <div className=" w-full flex">
                  <div className="border w-full  grid grid-cols-2 rounded-md border-gray-300 p-4">
                    <div className="flex flex-col mb-6">
                      <span>Pedido #15</span>
                      <span>Estado: En espera</span>
                      <span>Tiempo en Espera: 14:52</span>
                      <span>Prioridad: Inmediata</span>
                    </div>
                    <div className="flex flex-col">
                      <span>Pedido #15</span>
                      <span>Estado: En espera</span>
                      <span>Tiempo en Espera: 14:52</span>
                      <span>Prioridad: Inmediata</span>
                    </div>
                    <button
                      onClick={() => {
                        const newReadyOrders = [...readyOrders];
                        newReadyOrders.splice(i, 1);
                        setReadyOrders(newReadyOrders);
                        setPreparingOrders([...preparingOrders, {}]);
                      }}
                      className="px-4 py-2 bg-orange-500 col-span-2  text-white rounded-md"
                    >
                      Empezar Preparacion
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-xl font-medium text-gray-700 mt-4">
            En Preparacion
          </h2>{" "}
          <div className="mt-4 flex flex-col gap-2">
            {preparingOrders.map(() => {
              return <KitchenOrder />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenOrders;
