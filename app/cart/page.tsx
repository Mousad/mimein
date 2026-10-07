"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import {
  Shell,
  Heading,
  CartSummary,
  Quantity,
  useCart,
} from "@/components/storefront";
import { formatPrice } from "@/lib/products";
export default function Cart() {
  const { items, update, remove } = useCart();
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Heading title="سلة التسوق" />
        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg">السلة فارغة</p>
            <Link
              href="/products"
              className="mt-6 inline-block bg-[#1c1c1c] px-7 py-3 text-sm text-white"
            >
              ابدأ التسوق
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="flex flex-col gap-5">
              {items.map((x, i) => (
                <div key={x.product.id} className="flex gap-4 border-b pb-5">
                  <Image
                    src={x.product.image}
                    alt={x.product.name}
                    width={120}
                    height={140}
                    className="size-24 object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium">{x.product.name}</h3>
                      <p className="mt-2 text-xs text-neutral-500">
                        المقاس: {x.size} · اللون: {x.color}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Quantity
                        value={x.quantity}
                        onChange={(n) => update(i, n)}
                      />
                      <span>{formatPrice(x.product.price * x.quantity)}</span>
                      <button onClick={() => remove(i)}>
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/products" className="text-sm underline">
                متابعة التسوق
              </Link>
            </div>
            <CartSummary items={items} />
          </div>
        )}
      </div>
    </Shell>
  );
}
