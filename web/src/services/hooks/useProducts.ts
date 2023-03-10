import { useQuery } from "react-query"
import { api } from "../apiClient"

type ProductImage = {
  id: string,
  width: number,
  height: number,
  url: string,
}

type Product = {
  id: number,
  name: string,
  categories: string[],
  slug: number,
  description: string,
  brand: string,
  image: ProductImage[],
  hasFreeShipping: boolean,
  rating: number,
  recordId: string,
  minimumQuantity: number,
  total_stock: number,
  kitManagerVariations: string,
  price: number,
}

type Category = {
  recordId: string,
  publicId: string,
}

export type GetProductsResponse = {
  products: Product[],
  total: number,
  userCart: object,
  userWishlist: object,
}

type GetCategoriesResponse = {
  categories: Category[]
}

type GetProductParams = {
  page: number,
  category?: string,
  q?: string,
}

export async function getCategories(page: number): Promise<GetCategoriesResponse> {
  const { data } = await api.get('products/categories', {
    params: {
      page
    }
  })

  const categories = data.map((category: any) => {
    return {
      recordId: category.record_id,
      publicId: category.public_id,
    }
  })

  return {
    categories
  }
}

export async function getProducts({ page, category, q }: GetProductParams): Promise<GetProductsResponse> {
  const { data } = await api.get(`products?q=${q}&category=${category}`, {
    params: {
      page
    }
  })

  return data
}

export function useProducts({ page, category, q }: GetProductParams) {
  return useQuery(['products', page], () => getProducts({ page, category, q }), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}

export function useCategories(page: number) {
  return useQuery(['categories', page], () => getCategories(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}