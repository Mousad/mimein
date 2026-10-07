"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import { Shell, Heading, ProductGrid } from "@/components/storefront";
import { products, categoryNames } from "@/lib/products";
function Products() {
  const sp = useSearchParams();
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("new");
  const q = sp.get("search") || "";
  const list = useMemo(() => {
    let a = products.filter(
      (p) => (cat === "all" || p.category === cat) && p.name.includes(q),
    );
    if (sort === "low") a.sort((x, y) => x.price - y.price);
    if (sort === "high") a.sort((x, y) => y.price - x.price);
    return a;
  }, [cat, sort, q]);
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Heading title="كل المنتجات" subtitle="اكتشف مجموعتنا الكاملة" />
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y py-4">
          <div className="flex flex-wrap gap-2">
            {[["all", "الكل"], ...Object.entries(categoryNames)].map(
              ([k, v]) => (
                <button
                  key={k}
                  onClick={() => setCat(k)}
                  className={`px-3 py-2 text-sm ${cat === k ? "bg-[#1c1c1c] text-white" : ""}`}
                >
                  {v}
                </button>
              ),
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 text-sm"
          >
            <option value="new">الأحدث</option>
            <option value="low">السعر من الأقل للأعلى</option>
            <option value="high">السعر من الأعلى للأقل</option>
          </select>
        </div>
        <ProductGrid items={list} />
        <div className="mt-14 flex justify-center gap-2">
          <button className="border px-4 py-2">السابق</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`size-10 border ${n === 1 ? "bg-[#1c1c1c] text-white" : ""}`}
            >
              {n}
            </button>
          ))}
          <button className="border px-4 py-2">التالي</button>
        </div>
      </div>
    </Shell>
  );
}
export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <Products />
    </Suspense>
  );
}
