import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("http://localhost:5000/api/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data.products || [];
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ul className="space-y-4">
        {products.map((product: { id: number; name: string; price: number }) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <Link href={`/client/products/${product.id}`} className="font-semibold">
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
