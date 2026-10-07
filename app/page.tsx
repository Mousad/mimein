import Image from "next/image";
import Link from "next/link";
import {
  Shell,
  Heading,
  CategoryCard,
  ProductGrid,
  
  ProductCard,
  Promo,
} from "@/components/storefront";

const brands = [
  {
    name: "Nike",
    logo: "https://i.pinimg.com/1200x/b2/b6/e9/b2b6e9c64ce0b5cb321bc88f920047c8.jpg",
  },
  {
    name: "Adidas",
    logo: "https://i.pinimg.com/736x/68/21/4b/68214b8db3a809e8de10f1a344a2bc85.jpg",
  },
  {
    name: "Puma",
    logo: " https://i.pinimg.com/1200x/78/7d/af/787daf13dccf0a92e7a5f1596d0c9e6a.jpg",
  },
  {
    name: "New Balance",
    logo: "https://i.pinimg.com/736x/85/59/cb/8559cbec29cae2e8d7267a07cbc6f366.jpg",
  },
  {
    name: "Levi's",
    logo: "https://i.pinimg.com/1200x/e8/7f/98/e87f98b27c743a8409d96f5d47b3bbc6.jpg",
  },
  {
    name: "Tommy Hilfiger",
    logo: "https://i.pinimg.com/736x/da/6b/84/da6b847432c5629f88174180e3fe3a33.jpg",
  },
  {
    name: "Calvin Klein",
    logo: "https://i.pinimg.com/736x/a0/a1/aa/a0a1aaf94f029eed8919dad4b137f7b0.jpg",
  },
  {
    name: "Lacoste",
    logo: "https://i.pinimg.com/736x/43/58/7b/43587bbcb46715ee71db13a17d974340.jpg",
  },
];
import { categories, products } from "@/lib/products";
export default function Home() {
  return (
    <Shell>
     <section className="relative min-h-[560px] overflow-hidden bg-[#1c1c1c] text-white">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/hero-fashion.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Soft gradient for text readability */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

  {/* Content */}
  <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-6 pb-20 lg:items-center lg:pb-0">
    <div>
      <p className="mb-4 text-sm tracking-[.35em] text-[#d6bc96]">
        NOVA / 2026
      </p>

      <h1 className="text-5xl font-bold leading-tight md:text-7xl">
        اكتشف
        <br />
        أسلوبك
      </h1>

      <p className="mt-5 max-w-sm text-white/75">
        قطع مختارة بعناية لتكمل أسلوبك اليومي.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/products"
          className="bg-white px-7 py-3 text-sm font-medium text-[#1c1c1c] transition hover:bg-[#b89b72] hover:text-white"
        >
          تسوق الآن
        </Link>

        <Link
          href="/categories"
          className="border border-white/80 px-7 py-3 text-sm transition hover:border-[#b89b72] hover:bg-[#b89b72] hover:text-white"
        >
          اكتشف المجموعة
        </Link>
      </div>
    </div>
  </div>
</section>


<section
  className="overflow-hidden bg-[#1c1c1c] text-white"
  dir="ltr"
>
  <div className="flex w-max animate-[marquee_28s_linear_infinite]">
    {[
      "شحن مجاني للطلبات فوق 1500 جنيه",
      "خصم 20% على الطلب الثاني",
      "صُنع بأيدينا",
      "توصيل لجميع المحافظات",
      "قطع جديدة وصلت الآن",
    ]
      .concat([
        "شحن مجاني للطلبات فوق 1500 جنيه",
        "خصم 20% على الطلب الثاني",
        "صُنع بأيدينا",
        "توصيل لجميع المحافظات",
        "قطع جديدة وصلت الآن",
      ])
      .map((offer, index) => (
        <div
          key={`${offer}-${index}`}
          className="flex items-center whitespace-nowrap"
        >
          <span className="px-7 py-4 text-xs font-medium tracking-wide md:px-10 md:py-5 md:text-sm">
            {offer}
          </span>

          <span className="text-base text-[#b89b72] md:text-lg">
            ✦
          </span>
        </div>
      ))}
  </div>
</section>

<section className="mx-auto max-w-7xl px-5 py-20">
  <Heading
    title="تسوق حسب الفئة"
    subtitle="اختر ما يناسب أسلوبك"
  />

  {/* Desktop */}
  <div className="hidden grid-cols-2 gap-3 md:grid md:grid-cols-5">
    {categories.map((c) => (
      <CategoryCard key={c.slug} c={c} />
    ))}
  </div>

  {/* Mobile - Circular Categories */}
  <div className="md:hidden">
    <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/categories/${c.slug}`}
          className="group flex min-w-[92px] flex-col items-center text-center"
        >
          {/* Circle Image */}
          <div className="relative h-[140px] w-[100px] overflow-hidden rounded-full border border-[#b89b72]/30 bg-[#f7f3ea]">
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes="92px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/10" />
          </div>

          {/* Category Name */}
          <span className="mt-3 text-sm font-medium text-[#1c1c1c]">
            {c.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>


      <section className="mx-auto max-w-7xl px-5 pb-20">
        <Heading title="الأكثر مبيعًا" />
        <ProductGrid items={products.slice(0, 6)} />
      </section>


      <Promo
        title="مجموعة جديدة"
        text="أسلوب جديد يبدأ من التفاصيل."
        image="https://i.pinimg.com/736x/6d/e3/de/6de3de1e34624ce48abc4310c4dc65f6.jpg"
      />

      
  <section className="mx-auto max-w-7xl px-5 py-20">
  <Heading title="اختياراتنا لك" />

  <div className="flex gap-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    {products.slice(0, 15).map((p) => (
      <div
        key={p.id}
        className="w-[42vw] min-w-[42vw] shrink-0 sm:w-[220px] sm:min-w-[220px] md:w-[260px] md:min-w-[260px]"
      >
        <ProductCard product={p} />
      </div>
    ))}
  </div>
</section>


     <section className="mx-auto max-w-7xl px-5 pb-20">
  <div className="group relative overflow-hidden">
    <Image
      src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1600&q=85"
      alt="تفاصيل من منتجات نوفا"
      width={1600}
      height={1000}
      className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[600px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Text */}
    <div className="absolute inset-0 flex items-end p-7 text-white md:p-12 lg:p-16">
      <div className="max-w-xl">
        <p className="mb-4 text-sm text-[#d6bc96]">
          قصتنا
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          أكثر من مجرد ملابس
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 md:text-base md:leading-8">
          نؤمن أن الأسلوب الحقيقي يظهر في التفاصيل. إلى جانب الملابس،
          نصنع بعض القطع بأيدينا مثل البوكسرات والشرابات والأحزمة والمحافظ.
        </p>

        <Link
          href="/about"
          className="mt-7 inline-flex border-b border-white pb-2 text-sm transition hover:border-[#b89b72] hover:text-[#d6bc96]"
        >
          من نحن ←
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="overflow-hidden border-y border-black/10 bg-white py-8">
  <div className="mb-6 px-5 text-center">
    <p className="text-[11px] tracking-[0.3em] text-black/40">
      BRANDS WE LOVE
    </p>

    <h2 className="mt-2 text-xl font-semibold">
      الماركات
    </h2>
  </div>

  <div className="overflow-hidden" dir="ltr">
    <div className="flex w-max animate-[brands-marquee_30s_linear_infinite] items-center">
      {brands.concat(brands).map((brand, index) => (
        <div
          key={`${brand.name}-${index}`}
          className="flex h-16 w-[150px] shrink-0 items-center justify-center border-r border-black/5 px-8"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-9 max-w-[110px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      <Promo
        title="التفاصيل الصغيرة تصنع الفرق"
        text="اكتشف القطع التي نصنعها بعناية."
        href="/categories/accessories"
        image="https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="px-5 py-20 text-center">
        <Heading title="تواصل معنا" subtitle="لديك سؤال؟ نحن هنا لمساعدتك." />
        <div className="flex justify-center gap-3">
          <a
            href="https://wa.me/201001234567"
            className="bg-[#1c1c1c] px-6 py-3 text-sm text-white"
          >
            تواصل عبر واتساب
          </a>
          <Link href="/contact" className="border px-6 py-3 text-sm">
            معلومات التواصل
          </Link>
        </div>
      </section>
    </Shell>
  );
}
