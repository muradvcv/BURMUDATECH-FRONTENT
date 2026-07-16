export interface Product {
  _id: string;
  title: string;
  price: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  userEmail?: string;
  userId?: string;
}

interface ProductsResponse {
  success: boolean;
  data: Product[];
  message?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();

  return data.data;
}