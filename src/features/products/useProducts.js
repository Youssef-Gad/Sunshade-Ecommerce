import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("gender_sort");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", filter],
    queryFn: () => getProducts(!filter ? "All" : filter),
  });
  return { products, isLoading };
}
