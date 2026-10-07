import { notFound } from "next/navigation";
import Image from "next/image";
import { Shell, Heading, ProductGrid } from "@/components/storefront";
import {
  categories,
  products,
  categoryNames,
  categoryDescriptions,
} from "@/lib/products";
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export default async function Category({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = categories.find((x) => x.slug === slug);
  if (!c) notFound();
  const items = products.filter((p) => p.category === slug);
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="relative mb-14 h-64 overflow-hidden md:h-96">
          <Image src={c.image} alt={c.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <p className="text-xs tracking-[.35em]">{c.en}</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">
              {categoryNames[slug]}
            </h1>
            <p className="mt-3 text-sm text-white/80">
              {categoryDescriptions[slug]}
            </p>
          </div>
        </div>
        <div className="mb-8 flex items-end justify-between">
          <Heading
            title={categoryNames[slug]}
            subtitle={`${items.length} منتجات`}
          />
          <span className="hidden text-sm text-neutral-500 md:block">
            الترتيب: الأحدث
          </span>
        </div>
        <ProductGrid items={items} />
      </div>
    </Shell>
  );
}
