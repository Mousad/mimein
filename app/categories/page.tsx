import { Shell, Heading, CategoryCard } from "@/components/storefront";
import { categories } from "@/lib/products";
export default function Categories() {
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Heading title="الأقسام" subtitle="اكتشف عالم NOVA" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </Shell>
  );
}
