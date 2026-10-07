"use client";
import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";
import { Shell, ProductGrid, Quantity } from "@/components/storefront";
import { getProduct, products, formatPrice } from "@/lib/products";
export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return notFound();
  const [image, setImage] = useState(p.image),
    [size, setSize] = useState(p.sizes[1]),
    [color, setColor] = useState(p.colors[0]),
    [qty, setQty] = useState(1);
  const add = () => {
    const old = JSON.parse(localStorage.getItem("nova-cart") || "[]");
    old.push({ product: p, quantity: qty, size, color });
    localStorage.setItem("nova-cart", JSON.stringify(old));
    alert("تمت إضافة المنتج إلى السلة");
  };
  return (
    <Shell>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2">
        <div className="flex flex-col-reverse gap-3 md:flex-row">
          <div className="flex gap-3 md:w-20 md:flex-col">
            {p.images.map((im, i) => (
              <button key={im} onClick={() => setImage(im)}>
                <Image
                  src={im}
                  alt=""
                  width={100}
                  height={120}
                  className="size-16 object-cover"
                />
              </button>
            ))}
          </div>
          <Image
            src={image}
            alt={p.name}
            width={800}
            height={950}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="py-4">
          <p className="text-xs text-[#b89b72]">NOVA ESSENTIALS</p>
          <h1 className="mt-3 text-3xl font-bold">{p.name}</h1>
          <p className="mt-5 text-2xl">{formatPrice(p.price)}</p>
          <p className="mt-6 leading-8 text-neutral-600">{p.description}</p>
          <div className="mt-8">
            <p className="mb-3 text-sm font-bold">اللون: {color}</p>
            <div className="flex gap-2">
              {p.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`border px-4 py-2 text-sm ${c === color ? "border-[#b89b72] bg-[#f6f0e8]" : ""}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-3 text-sm font-bold">المقاس: {size}</p>
            <div className="flex gap-2">
              {p.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border px-4 py-2 text-sm ${s === size ? "bg-[#1c1c1c] text-white" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <Quantity value={qty} onChange={setQty} />
            <span className="text-sm text-green-700">متوفر في المخزون</span>
          </div>
          <button
            onClick={add}
            className="mt-7 w-full bg-[#1c1c1c] py-4 text-white"
          >
            أضف للسلة
          </button>
          <div className="mt-10 border-t pt-6 text-sm leading-8">
            <b>تفاصيل المنتج</b>
            <p>الخامة: {p.material}</p>
            <p>العناية: يغسل على درجة حرارة منخفضة ويجفف بشكل طبيعي.</p>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <h2 className="mb-8 text-2xl font-bold">منتجات مشابهة</h2>
        <ProductGrid
          items={products
            .filter((x) => x.category === p.category && x.id !== p.id)
            .slice(0, 4)}
        />
      </section>
    </Shell>
  );
}
