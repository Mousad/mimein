"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Shell,
  ProductGrid,
  Quantity,
} from "@/components/storefront";
import {
  products,
  formatPrice,
  type Product,
} from "@/lib/products";

export default function ProductDetails({
  product: p,
}: {
  product: Product;
}) {
  const [image, setImage] = useState(p.image.trim());

  const [size, setSize] = useState(
    p.sizes?.[1] || p.sizes?.[0] || "",
  );

  const [color, setColor] = useState(
    p.colors?.[0] || "",
  );

  const [qty, setQty] = useState(1);

  useEffect(() => {
    setImage(p.image.trim());
  }, [p.image]);

  const add = () => {
    try {
      const old = JSON.parse(
        localStorage.getItem("nova-cart") || "[]",
      );

      const existingIndex = old.findIndex(
        (item: any) =>
          item.product?.id === p.id &&
          item.size === size &&
          item.color === color,
      );

      if (existingIndex >= 0) {
        old[existingIndex].quantity += qty;
      } else {
        old.push({
          product: p,
          quantity: qty,
          size,
          color,
        });
      }

      localStorage.setItem(
        "nova-cart",
        JSON.stringify(old),
      );

      window.dispatchEvent(
        new Event("cart-updated"),
      );

      alert("تمت إضافة المنتج إلى السلة");
    } catch {
      alert("حدث خطأ أثناء إضافة المنتج");
    }
  };

  return (
    <Shell>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2">

        {/* Images */}
        <div className="flex flex-col-reverse gap-3 md:flex-row">

          <div className="flex gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-visible">
            {p.images.map((im, i) => {
              const cleanImage = im.trim();

              return (
                <button
                  key={`${cleanImage}-${i}`}
                  type="button"
                  onClick={() => setImage(cleanImage)}
                  className={`shrink-0 overflow-hidden border transition ${
                    image === cleanImage
                      ? "border-[#b89b72]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={cleanImage}
                    alt={`${p.name} ${i + 1}`}
                    width={100}
                    height={120}
                    className="size-16 object-cover"
                  />
                </button>
              );
            })}
          </div>

          <div className="relative w-full overflow-hidden bg-[#f4f1ed]">
            <Image
              src={image.trim()}
              alt={p.name}
              width={800}
              height={950}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="py-4">

          <p className="text-xs tracking-[0.2em] text-[#b89b72]">
            NOVA ESSENTIALS
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            {p.name}
          </h1>

          <p className="mt-5 text-2xl font-medium">
            {formatPrice(p.price)}
          </p>

          <p className="mt-6 leading-8 text-neutral-600">
            {p.description}
          </p>

          {/* Colors */}
          {p.colors?.length > 0 && (
            <div className="mt-8">

              <p className="mb-3 text-sm font-bold">
                اللون: {color}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`border px-4 py-2 text-sm transition ${
                      c === color
                        ? "border-[#b89b72] bg-[#f6f0e8]"
                        : "border-black/10 hover:border-[#b89b72]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Sizes */}
          {p.sizes?.length > 0 && (
            <div className="mt-6">

              <p className="mb-3 text-sm font-bold">
                المقاس: {size}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`border px-4 py-2 text-sm transition ${
                      s === size
                        ? "border-[#1c1c1c] bg-[#1c1c1c] text-white"
                        : "border-black/10 hover:border-[#1c1c1c]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Quantity */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Quantity
              value={qty}
              onChange={setQty}
            />

            <span className="text-sm text-green-700">
              متوفر في المخزون
            </span>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={add}
            className="mt-7 w-full bg-[#1c1c1c] py-4 text-white transition hover:bg-[#b89b72]"
          >
            أضف للسلة
          </button>

          {/* Details */}
          <div className="mt-10 border-t pt-6 text-sm leading-8">

            <b>تفاصيل المنتج</b>

            <p>
              الخامة: {p.material}
            </p>

            <p>
              العناية: يغسل على درجة حرارة منخفضة ويجفف
              بشكل طبيعي.
            </p>

          </div>

        </div>
      </div>

      {/* Similar Products */}
      <section className="mx-auto max-w-7xl px-5 pb-20">

        <h2 className="mb-8 text-2xl font-bold">
          منتجات مشابهة
        </h2>

        <ProductGrid
          items={products
            .filter(
              (x) =>
                x.category === p.category &&
                x.id !== p.id,
            )
            .slice(0, 4)}
        />

      </section>
    </Shell>
  );
} 