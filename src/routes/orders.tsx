import { useOrders } from "../hooks/orders";

function Orders() {
  const { data: orders } = useOrders();

  return (
    <div>
      <h1>Orders</h1>
      <div>
        {orders?.map((order) => {
          return <div key={order.id}>{order.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Orders;
