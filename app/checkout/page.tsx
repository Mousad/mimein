"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Shell, Heading, useCart, CartSummary } from "@/components/storefront";
import { formatPrice } from "@/lib/products";
export default function Checkout() {
  const { items } = useCart();
  const r = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    governorate: "",
    city: "",
    address: "",
    notes: "",
  });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return alert("السلة فارغة");
    if (
      !form.name ||
      !form.phone ||
      !form.governorate ||
      !form.city ||
      !form.address
    )
      return alert("يرجى إكمال البيانات المطلوبة");
    localStorage.removeItem("nova-cart");
    r.push("/order-success");
  };
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Heading title="إتمام الطلب" subtitle="أدخل بياناتك لإتمام الشحن" />
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
            {[
              ["name", "الاسم الكامل"],
              ["phone", "رقم الهاتف"],
              ["governorate", "المحافظة"],
              ["city", "المدينة"],
              ["address", "العنوان بالتفصيل"],
            ].map(([k, l]) => (
              <label key={k} className={k === "address" ? "md:col-span-2" : ""}>
                <span className="mb-2 block text-sm">{l} *</span>
                <input
                  required
                  value={(form as any)[k]}
                  onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  className="w-full border p-3 outline-none focus:border-[#b89b72]"
                />
              </label>
            ))}
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm">ملاحظات الطلب</span>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full border p-3"
                rows={4}
              />
            </label>
            <button className="md:col-span-2 bg-[#1c1c1c] py-4 text-white">
              تأكيد الطلب
            </button>
          </form>
          <div>
            <CartSummary items={items} />
          </div>
        </div>
      </div>
    </Shell>
  );
}
