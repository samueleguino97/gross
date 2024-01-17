import { useQuery } from "@tanstack/react-query";
import { orders } from "../fixtures/orders";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orders,
  });
}
