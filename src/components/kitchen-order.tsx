import { useState } from "react";

function KitchenOrder() {
  const [items, setItems] = useState([
    { name: "Cafe Latte", quantity: 2, status: "waiting" },
    { name: "Cafe Latte", quantity: 2, status: "waiting" },
    { name: "Cafe Latte", quantity: 2, status: "waiting" },
    { name: "Cafe Latte", quantity: 2, status: "waiting" },
    { name: "Cafe Latte", quantity: 2, status: "waiting" },
  ]);
  return (
    <div className=" w-full flex">
      <div className="border w-full  grid grid-cols-2 rounded-md border-gray-300 p-4">
        <div className="flex flex-col mb-4">
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
        <div className="col-span-2 mb-6">
          <h5 className="font-medium text-gray-700">Detalle</h5>
          <div className="flex flex-col gap-2">
            {items.map((item, i) => {
              return (
                <div key={i} className="flex items-center justify-between">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  {item.status === "ready" ? (
                    <button
                      onClick={() => {
                        const newItems = [...items];
                        const newItem = { ...newItems[i] };
                        newItems[i] = newItem;
                        newItem.status = "waiting";
                        setItems(newItems);
                      }}
                      className="px-6 py-2 bg-gray-200 text-white rounded-md ml-4"
                    >
                      No Listo
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const newItems = [...items];
                        const newItem = { ...newItems[i] };
                        newItem.status = "ready";
                        newItems[i] = newItem;
                        setItems(newItems);
                      }}
                      className="px-6 py-2 bg-green-500 text-white rounded-md ml-4"
                    >
                      Listo
                    </button>
                  )}
                </div>
              );
            })}{" "}
          </div>
        </div>
        <button
          disabled={
            items.filter((item) => item.status === "waiting").length > 0
          }
          className=" disabled:bg-gray-200 px-4 py-2 bg-green-500 col-span-2  text-white rounded-md"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default KitchenOrder;
