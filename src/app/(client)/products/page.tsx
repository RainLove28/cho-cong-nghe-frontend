import Link from "next/link";

async function fetchProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data.products || [];
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto w-[90%]">
      <header>
        <h1>Điện thoại</h1>
      </header>
    </div>
  );
}
