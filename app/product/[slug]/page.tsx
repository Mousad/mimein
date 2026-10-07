import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}