import Image from "next/image";
import { Shell, Heading } from "@/components/storefront";
export default function About() {
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 py-16">
        <Heading title="أكثر من مجرد ملابس" subtitle="نصنع أسلوباً يشبهك" />
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
            alt="فريق نوفا"
            width={900}
            height={1100}
            className="aspect-[4/5] object-cover"
          />
          <div className="flex flex-col gap-8 leading-8 text-neutral-600">
            <div>
              <h2 className="mb-2 text-xl font-bold text-[#1c1c1c]">قصتنا</h2>
              <p>
                بدأت NOVA من شغف بسيط: أن نرتدي ما يعبر عنا. نختار خاماتنا
                بعناية ونصمم قطعاً تعيش معك طويلاً.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-[#1c1c1c]">رؤيتنا</h2>
              <p>
                أن نجعل الأناقة اليومية أكثر بساطة وصدقاً، بأسعار عادلة وتفاصيل
                مدروسة.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-[#1c1c1c]">
                ماذا نصنع
              </h2>
              <p>
                إلى جانب الملابس، نصنع بأيدينا البوكسرات والشرابات والأحزمة
                والمحافظ.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-[#1c1c1c]">
                الجودة والتفاصيل
              </h2>
              <p>كل قطعة تمر بمراحل اختيار وفحص قبل أن تصل إليك.</p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
