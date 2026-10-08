import Image from "next/image";
import Link from "next/link";
import { Shell, Heading } from "@/components/storefront";

const values = [
  {
    number: "01",
    title: "البساطة",
    text: "نؤمن أن القطعة الجيدة لا تحتاج إلى مبالغة. نصمم ونختار قطعًا سهلة التنسيق، واضحة في تفاصيلها، وتناسب أسلوب الحياة اليومية.",
  },
  {
    number: "02",
    title: "الجودة",
    text: "نهتم بالخامة، التشطيب، التفاصيل الصغيرة وطريقة تقديم المنتج، لأننا نريد أن تكون تجربة القطعة جيدة من أول نظرة وحتى الاستخدام.",
  },
  {
    number: "03",
    title: "الاختيار",
    text: "لا نبحث عن كثرة المنتجات فقط. نختار القطع التي نعتقد أنها تستحق أن تكون جزءًا من خزانة ملابسك.",
  },
  {
    number: "04",
    title: "صُنع بأيدينا",
    text: "بعض التفاصيل والمنتجات نصنعها بأيدينا، مثل البوكسرات والشرابات والأحزمة والمحافظ، لنقدم شيئًا يحمل طابعنا الخاص.",
  },
];

const milestones = [
  {
    number: "01",
    title: "البداية",
    text: "بدأت الفكرة من رغبة بسيطة في تقديم ملابس ومنتجات نحب ارتداءها فعلًا.",
  },
  {
    number: "02",
    title: "الاختيار",
    text: "بدأنا بتكوين مجموعة صغيرة من القطع الأساسية التي يمكن الاعتماد عليها كل يوم.",
  },
  {
    number: "03",
    title: "التطوير",
    text: "مع الوقت توسعت المجموعة وأضفنا منتجات وإكسسوارات نصنع بعضها بأيدينا.",
  },
  {
    number: "04",
    title: "اليوم",
    text: "NOVA تتحول إلى مساحة تجمع الملابس، التفاصيل اليومية، والمنتجات المصنوعة بعناية في مكان واحد.",
  },
];

export default function About() {
  return (
    <Shell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1c1c1c] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
            alt="NOVA"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto flex min-h-[580px] max-w-7xl items-end px-5 pb-16 md:min-h-[650px] md:px-10 md:pb-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs tracking-[0.35em] text-[#d6bc96]">
              NOVA / OUR STORY
            </p>

            <h1 className="text-5xl font-black leading-[1.05] md:text-7xl lg:text-8xl">
              أكثر من
              <br />
              مجرد ملابس.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/75 md:text-base">
              نؤمن أن الملابس ليست مجرد قطع نرتديها، بل جزء من الطريقة
              التي نعبّر بها عن أنفسنا كل يوم.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-[#b89b72]">
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              أسلوب يشبهك،
              <br />
              وليس شخصًا آخر.
            </h2>
          </div>

          <div className="max-w-2xl text-base leading-9 text-neutral-600">
            <p>
              بدأت NOVA من فكرة بسيطة: لماذا لا تكون الملابس اليومية
              أكثر بساطة، أكثر صدقًا، وأكثر ارتباطًا بالشخص الذي يرتديها؟
            </p>

            <p className="mt-5">
              لذلك اخترنا أن نبني مجموعة تعتمد على القطع الأساسية
              التي يمكن ارتداؤها بسهولة، مع الاهتمام بالخامة، القصّة،
              الألوان والتفاصيل التي تجعل القطعة مختلفة دون أن تكون
              مبالغًا فيها.
            </p>

            <p className="mt-5">
              بالنسبة لنا، الموضة ليست سباقًا وراء كل صيحة جديدة.
              هي معرفة ما يناسبك، وما يجعلك تشعر بالراحة والثقة،
              ثم اختيار القطعة التي تكمل ذلك.
            </p>
          </div>
        </div>
      </section>

      {/* Story Image */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-3 md:grid-cols-[1.4fr_0.8fr]">
          <div className="relative h-[500px] overflow-hidden md:h-[680px]">
            <Image
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85"
              alt="منتجات وأسلوب NOVA"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="relative h-[400px] overflow-hidden md:h-[680px]">
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=85"
              alt="تفاصيل الأزياء"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#f6f3ee]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#b89b72]">
              OUR STORY
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              كيف بدأت الحكاية؟
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {milestones.map((item) => (
              <div
                key={item.number}
                className="border-t border-black/15 pt-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm text-[#b89b72]">
                    {item.number}
                  </span>

                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handmade */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85"
              alt="تفاصيل ومنتجات مصنوعة بعناية"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-5 right-5 bg-white px-5 py-4">
              <p className="text-xs tracking-[0.2em] text-[#b89b72]">
                MADE BY US
              </p>

              <p className="mt-1 text-sm font-bold">
                صُنع بأيدينا
              </p>
            </div>
          </div>

          <div className="lg:pr-10">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#b89b72]">
              MADE BY US
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              بعض الأشياء
              <br />
              نصنعها بأنفسنا.
            </h2>

            <div className="mt-7 space-y-5 leading-8 text-neutral-600">
              <p>
                لا نريد أن تكون NOVA مجرد مكان لبيع الملابس. لذلك بدأنا
                أيضًا في صناعة بعض المنتجات بأنفسنا.
              </p>

              <p>
                من البوكسرات والشرابات إلى الأحزمة والمحافظ، نحاول أن
                نضيف منتجات تحمل لمستنا الخاصة وتكمل القطع الموجودة في
                المجموعة.
              </p>

              <p>
                هذه المنتجات بالنسبة لنا ليست مجرد إضافة للمجموعة،
                بل مساحة للتجربة والتطوير وصناعة شيء يحمل شخصية NOVA.
              </p>
            </div>

            <Link
              href="/categories/accessories"
              className="mt-8 inline-flex border-b border-[#1c1c1c] pb-2 text-sm font-medium transition hover:border-[#b89b72] hover:text-[#b89b72]"
            >
              اكتشف الإكسسوارات ←
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1c1c1c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.3em] text-[#d6bc96]">
              WHAT WE BELIEVE
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              الأشياء التي نؤمن بها.
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.number}
                className="bg-[#1c1c1c] p-8 md:p-10"
              >
                <span className="text-xs text-[#d6bc96]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md leading-8 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-[#b89b72]">
              QUALITY & DETAILS
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              التفاصيل الصغيرة
              <br />
              تصنع الفرق.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-bold">
                اختيار الخامات
              </h3>

              <p className="mt-3 leading-8 text-neutral-600">
                نهتم بأن تكون الخامات مناسبة للاستخدام اليومي، مريحة
                وقادرة على الحفاظ على شكلها مع الوقت.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-bold">
                الاهتمام بالتفاصيل
              </h3>

              <p className="mt-3 leading-8 text-neutral-600">
                من الخياطة إلى التشطيب وطريقة التغليف، نراجع التفاصيل
                الصغيرة التي قد لا تلاحظها من أول مرة، لكنها تصنع فرقًا
                في التجربة.
              </p>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h3 className="text-xl font-bold">
                تجربة أفضل
              </h3>

              <p className="mt-3 leading-8 text-neutral-600">
                هدفنا أن تكون عملية اختيار المنتج وطلبه واستلامه بسيطة
                وواضحة من البداية إلى النهاية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f3ee]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <p className="mb-4 text-xs tracking-[0.3em] text-[#b89b72]">
            FIND YOUR STYLE
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            جاهز تكتشف أسلوبك؟
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-neutral-600">
            اكتشف مجموعتنا واختر القطع التي تناسبك وتكمل أسلوبك اليومي.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="bg-[#1c1c1c] px-8 py-4 text-sm text-white transition hover:bg-[#b89b72]"
            >
              تسوق الآن
            </Link>

            <Link
              href="/contact"
              className="border border-[#1c1c1c] px-8 py-4 text-sm transition hover:bg-[#1c1c1c] hover:text-white"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}