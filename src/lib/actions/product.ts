'use server'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
interface Product {
  title: string;
  price: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  userId: string;
  userEmail: string;
}

export async function addProduct(newProduct: Product) {
  const res=await fetch(`${baseUrl}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  });
  return res.json();
  
}
