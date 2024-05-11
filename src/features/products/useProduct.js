import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getProduct(id),
    queryKey: ["product", id],
  });
  return { product, isLoading, refetch };
}
