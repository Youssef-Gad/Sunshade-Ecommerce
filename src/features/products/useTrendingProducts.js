import { useQuery } from "@tanstack/react-query";
import { getTrendingProducts } from "../../services/apiProducts";

export function useTrendingProducts() {
  const { data: trendingProducts, isLoading } = useQuery({
    queryKey: ["trending-products"],
    queryFn: getTrendingProducts,
  });
  return { trendingProducts, isLoading };
}
