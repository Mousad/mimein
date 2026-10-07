import { Shell, Heading } from "@/components/storefront";
export default function Contact() {
  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-5 py-16">
        <Heading title="تواصل معنا" subtitle="نحن هنا لمساعدتك" />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["واتساب", "0100 123 4567"],
            ["الهاتف", "0100 123 4567"],
            ["إنستجرام", "@nova.wear"],
            ["عنوان المحل", "القاهرة، مصر"],
          ].map((x) => (
            <div key={x[0]} className="border p-5 text-center">
              <b>{x[0]}</b>
              <p className="mt-2 text-sm text-neutral-500">{x[1]}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <form className="flex flex-col gap-4">
            <input placeholder="الاسم" className="border p-3" />
            <input placeholder="رقم الهاتف" className="border p-3" />
            <input placeholder="البريد الإلكتروني" className="border p-3" />
            <textarea placeholder="الرسالة" rows={5} className="border p-3" />
            <button className="bg-[#1c1c1c] py-4 text-white">
              إرسال الرسالة
            </button>
          </form>
          <div className="flex min-h-72 items-center justify-center bg-[#f2eee9] text-neutral-500">
            خريطة الموقع
          </div>
        </div>
      </div>
    </Shell>
  );
}
