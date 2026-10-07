"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Search,
  ShoppingBag,
  ShoppingCart,

  Home,
  Heart,
  User,
  Plus,
  Minus,
  Phone,
  MapPin,
  Check,
  ArrowLeft,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import {
  categories,
  products,
  formatPrice,
  categoryNames,
  type Product,
  type CartItem,
} from "@/lib/products";

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const links = [
  ["الرئيسية", "/"],
  ["المنتجات", "/products"],
  ["تشيرتات", "/categories/tshirts"],
  ["قمصان", "/categories/shirts"],
  ["بناطيل", "/categories/pants"],
  ["جاكيتات", "/categories/jackets"],
  ["إكسسوارات", "/categories/accessories"],
  ["من نحن", "/about"],
];

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const [open, setOpen] = useState(false);
  const [hideBottomNav, setHideBottomNav] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  /* =======================================================
     CART COUNT
  ======================================================= */

  useEffect(() => {
    const updateCart = () => {
      try {
        const cart = JSON.parse(
          localStorage.getItem("nova-cart") || "[]",
        );

        const count = cart.reduce(
          (total: number, item: CartItem) =>
            total + Number(item.quantity || 0),
          0,
        );

        setCartCount(count);
      } catch {
        setCartCount(0);
      }
    };

    updateCart();

    window.addEventListener("cart-updated", updateCart);
    window.addEventListener("storage", updateCart);

    return () => {
      window.removeEventListener("cart-updated", updateCart);
      window.removeEventListener("storage", updateCart);
    };
  }, []);

  /* =======================================================
     HIDE MOBILE BOTTOM NAV WHEN FOOTER IS VISIBLE
  ======================================================= */

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBottomNav(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, [pathname]);

  /* =======================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-sm">

        {/* =================================================
            DESKTOP NAVBAR
        ================================================= */}

        <div className="mx-auto hidden max-w-[1400px] items-center justify-between px-5 py-4 md:flex md:px-8 lg:py-5">

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 text-sm md:flex">

            <Link
              href="/products"
              className="transition-opacity hover:opacity-50"
            >
              المنتجات
            </Link>

            <Link
              href="/categories/tshirts"
              className="transition-opacity hover:opacity-50"
            >
              تشيرتات
            </Link>

            <Link
              href="/categories/shirts"
              className="transition-opacity hover:opacity-50"
            >
              قمصان
            </Link>

            <Link
              href="/categories/pants"
              className="transition-opacity hover:opacity-50"
            >
              بناطيل
            </Link>

            <Link
              href="/about"
              className="transition-opacity hover:opacity-50"
            >
              قصتنا
            </Link>

          </nav>

          {/* Desktop Logo */}

          <Link
            href="/"
            className="text-center leading-none"
          >
            <span className="block font-serif text-2xl tracking-[0.22em]">
              M<span className="text-[#b89b72]">ؤ</span>ME<span className="text-[#b89b72]">ن</span>
             
            </span>
          </Link>

          {/* Desktop Icons */}

          <div className="flex items-center gap-4">

            {/* Search / Home */}

            <Link
              href={
                isHomePage
                  ? "/products?searchOpen=true"
                  : "/"
              }
              aria-label={
                isHomePage
                  ? "بحث"
                  : "الرئيسية"
              }
              className="transition-opacity hover:opacity-50"
            >
              {isHomePage ? (
                <Search
                  size={20}
                  strokeWidth={1.4}
                />
              ) : (
                <Home
                  size={20}
                  strokeWidth={1.4}
                />
              )}
            </Link>

            {/* Wishlist */}

            <Link
              href="/wishlist"
              aria-label="المفضلة"
              className="relative transition-opacity hover:opacity-50"
            >
              <Heart
                size={20}
                strokeWidth={1.4}
              />
            </Link>

            {/* Cart */}

            <Link
              href="/cart"
              aria-label="السلة"
              data-cart-target
              className="relative transition-opacity hover:opacity-50"
            >
              <ShoppingBag
                size={20}
                strokeWidth={1.4}
              />

              {cartCount > 0 && (
                <span className="absolute -left-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1c1c1c] text-[9px] text-white">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

        </div>

        {/* =================================================
            MOBILE TOP NAVBAR
        ================================================= */}

        <div className="md:hidden">

          <div className="flex h-[62px] items-center justify-center">

            <Link
  href="/"
  dir="ltr"
  className="group flex items-center gap-1 text-[#1c1c1c]"
>
  <span className="text-[25px] font-black tracking-[-0.04em]">
    M
  </span>

  <span className="text-[27px] font-black text-[#b89b72]">
    ؤ
  </span>

  <span className="text-[25px] font-black tracking-[-0.04em]">
    ME
  </span>
   <span className="text-[27px] font-black text-[#b89b72]">
    ن
  </span>
</Link>

          </div>

        </div>

        {/* =================================================
            MOBILE FULL SCREEN MENU
        ================================================= */}

        {open && (
          <div className="fixed inset-0 z-[9999] h-screen w-screen bg-white text-[#1c1c1c]">

            {/* Menu Header */}

            <div className="flex h-20 items-center justify-between border-b border-black/10 px-6">

              <span className="text-xs tracking-[0.2em]">
                NOVA MENU
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="إغلاق القائمة"
                className="flex h-10 w-10 items-center justify-center"
              >
                <X
                  size={24}
                  strokeWidth={1.5}
                />
              </button>

            </div>

            {/* Menu Links */}

            <nav className="px-6 pt-10">

              <div className="flex flex-col">

                {links.map(
                  ([label, href], index) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-black/10 py-5 text-xl font-serif transition-opacity hover:opacity-50"
                    >

                      <span>
                        {label}
                      </span>

                      <span className="text-sm text-black/30">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                    </Link>
                  ),
                )}

              </div>

            </nav>

            {/* Menu Footer */}

            <div className="absolute bottom-8 left-6 right-6 border-t border-black/10 pt-5">

              <p className="text-sm">
                أسلوبك يبدأ من هنا
              </p>

              <p className="mt-1 text-xs text-black/40">
                ملابس وإكسسوارات مختارة بعناية
              </p>

            </div>

          </div>
        )}

      </header>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ====================================================== */}

      <nav
        className={`fixed bottom-6 left-6 right-6 z-50 rounded-[16px] border border-black/10 bg-white/85 p-[1px] backdrop-blur-md transition-all duration-300 md:hidden ${
          hideBottomNav
            ? "pointer-events-none translate-y-60 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >

        <div className="flex h-[50px] items-center rounded-full bg-white">

          {/* CART */}

          <Link
            href="/cart"
            aria-label="السلة"
            data-cart-target
            className="relative flex h-full w-full items-center justify-center"
          >

            <ShoppingBag
              size={21}
              strokeWidth={1.5}
            />

            {cartCount > 0 && (
              <span className="absolute right-[22%] top-[14px] flex h-4 w-4 items-center justify-center rounded-full bg-[#1c1c1c] text-[9px] text-white">
                {cartCount}
              </span>
            )}

          </Link>

          {/* WISHLIST */}

          <Link
            href="/wishlist"
            aria-label="المفضلة"
            className="relative flex h-full w-full items-center justify-center"
          >

            <Heart
              size={21}
              strokeWidth={1.5}
            />

          </Link>

          {/* CENTER SEARCH / HOME */}

          <Link
            href={
              isHomePage
                ? "/products?searchOpen=true"
                : "/"
            }
            aria-label={
              isHomePage
                ? "البحث"
                : "الرئيسية"
            }
            className="flex h-full w-full items-center justify-center"
          >

            <span className="relative flex h-[50px] w-[50px] -translate-y-4 items-center justify-center rounded-full bg-[#b89b72] text-white shadow-md">

              {isHomePage ? (
                <Search
                  size={26}
                  strokeWidth={2}
                />
              ) : (
                <Home
                  size={26}
                  strokeWidth={2}
                />
              )}

            </span>

          </Link>

          {/* ABOUT */}

          <Link
            href="/about"
            aria-label="من نحن"
            className="flex h-full w-full items-center justify-center"
          >

            <User
              size={21}
              strokeWidth={1.8}
            />

          </Link>

          {/* MENU */}

          <button
            type="button"
            onClick={() =>
              setOpen((prev) => !prev)
            }
            aria-label={
              open
                ? "إغلاق القائمة"
                : "فتح القائمة"
            }
            className="flex h-full w-full items-center justify-center"
          >

            {open ? (
              <X
                size={21}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={2}
              />
            )}

          </button>

        </div>

      </nav>
    </>
  );
}

/* =========================================================
   SHELL
========================================================= */

export function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="pb-20 lg:pb-0">
        {children}
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] px-5 py-12 text-white md:px-10 md:py-16">

      <div className="mx-auto max-w-[1400px]">

        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}

          <div className="text-center">

            <div className="font-serif text-[20px] tracking-[0.2em]">
              NOVA
              <span className="text-[#b89b72]">
                .
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/60">
              أزياء معاصرة صُممت لترافقك كل يوم،
              بتفاصيل تليق بأسلوبك.
            </p>

          </div>

          {/* EXPLORE + HELP */}

          <div className="grid grid-cols-2 text-center">

            {/* Explore */}

            <div>

              <h3 className="mb-4 text-sm text-white/50">
                استكشفي
              </h3>

              <div className="flex flex-col gap-3 text-sm">

                <Link href="/products">
                  كل المنتجات
                </Link>

                <Link href="/categories/tshirts">
                  تشيرتات
                </Link>

                <Link href="/categories/shirts">
                  قمصان
                </Link>

                <Link href="/categories/pants">
                  بناطيل
                </Link>

                <Link href="/categories/jackets">
                  جاكيتات
                </Link>

              </div>

            </div>

            {/* Help */}

            <div>

              <h3 className="mb-4 text-sm text-white/50">
                مساعدتك
              </h3>

              <div className="flex flex-col gap-3 text-sm">

                <Link href="/about">
                  من نحن
                </Link>

                <Link href="/cart">
                  سلة التسوق
                </Link>

                <Link href="/contact">
                  تواصل معنا
                </Link>

                <Link href="/categories/accessories">
                  الإكسسوارات
                </Link>

              </div>

            </div>

          </div>

          {/* CONTACT */}

          <div className="text-center">

            <h3 className="mb-5 text-sm text-white/50">
              تواصل معنا
            </h3>

            <div className="flex items-center justify-center gap-4">

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              {/* WhatsApp */}

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaWhatsapp size={17} />
              </a>

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              {/* TikTok */}

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaTiktok size={17} />
              </a>

            </div>

          </div>

          {/* BRAND MESSAGE */}

          <div className="text-center">

            <h3 className="mb-5 text-sm text-white/50">
              صُنع بأيدينا
            </h3>

            <p className="text-sm leading-7 text-white/60">
              بعض التفاصيل نصنعها بأيدينا،
              لأننا نؤمن أن القطعة المميزة
              تبدأ من الاهتمام بالتفاصيل.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#b89b72] transition hover:text-white"
            >
              اكتشف قصتنا
              <ArrowLeft size={14} />
            </Link>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-12 border-t border-white/15 pt-5 text-center text-xs text-white/40">

          © 2026 NOVA. جميع الحقوق محفوظة

          <span className="mx-2">
            |
          </span>

          <span className="text-[#b89b72]">
            تم التطوير بواسطة مصعب
          </span>

        </div>

      </div>

    </footer>
  );
}

/* =========================================================
   HEADING
========================================================= */

export function Heading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">

      <h1 className="text-3xl font-bold md:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-sm text-neutral-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  const add = () => {
    try {
      const old = JSON.parse(
        localStorage.getItem("nova-cart") || "[]",
      );

      const i = old.findIndex(
        (x: CartItem) =>
          x.product.id === product.id,
      );

      if (i >= 0) {
        old[i].quantity++;
      } else {
        old.push({
          product,
          quantity: 1,
          size:
            product.sizes?.[1] ||
            product.sizes?.[0] ||
            "",
          color:
            product.colors?.[0] || "",
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
    <article className="group min-w-0 ">

      <Link
        href={"/product/" + product.slug}
        className="relative block overflow-hidden bg-[#f4f1ed]"
      >

        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={850}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute right-3 top-3 bg-white px-2 py-1 text-[10px]">
            جديد
          </span>
        )}

      

      </Link>

      <div className="pt-3">

        <Link
          href={"/product/" + product.slug}
          className="block truncate text-sm font-medium"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex items-center justify-between">

          <span className="text-sm">
            {formatPrice(product.price)}
          </span>

          <button
  type="button"
  onClick={add}
  aria-label="أضف للسلة"
  className="flex h-10 w-10 items-center justify-center border border-[#1c1c1c]/10 text-[#1c1c1c] transition hover:border-[#b89b72] hover:bg-[#b89b72] hover:text-white"
>
  <ShoppingCart size={18} strokeWidth={1.7} />
</button>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   PRODUCT GRID
========================================================= */

export function ProductGrid({
  items,
}: {
  items: Product[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
      {items.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </div>
  );
}

/* =========================================================
   CATEGORY CARD
========================================================= */

export function CategoryCard({
  c,
}: {
  c: any;
}) {
  return (
    <Link
      href={"/categories/" + c.slug}
      className="group relative block overflow-hidden"
    >

      <Image
        src={c.image}
        alt={c.name}
        width={700}
        height={1150}
        className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-5 right-5 text-white">

        <div className="text-2xl font-bold">
          {c.name}
        </div>

        <div className="text-[10px] tracking-[.3em] text-white/70">
          {c.en}
        </div>

      </div>

    </Link>
  );
}

/* =========================================================
   PROMO
========================================================= */

export function Promo({
  title,
  text,
  image,
  href = "/products",
}: {
  title: string;
  text: string;
  image: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] text-white">

      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-55"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <p className="mb-3 text-sm text-[#d6bc96]">
          NOVA EDIT
        </p>

        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <p className="mt-4 text-white/75">
          {text}
        </p>

        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-3 border border-white px-6 py-3 text-sm"
        >
          اكتشف المجموعة
          <ArrowLeft size={16} />
        </Link>

      </div>

    </section>
  );
}

/* =========================================================
   CART SUMMARY
========================================================= */

export function CartSummary({
  items,
}: {
  items: CartItem[];
}) {
  const subtotal = items.reduce(
    (a, x) =>
      a + x.product.price * x.quantity,
    0,
  );

  const shipping =
    subtotal > 1500 ? 0 : 80;

  return (
    <div className="border border-[#e8e4df] p-6">

      <h2 className="mb-6 text-xl font-bold">
        ملخص الطلب
      </h2>

      <div className="flex justify-between border-b pb-4 text-sm">

        <span>
          المجموع الفرعي
        </span>

        <span>
          {formatPrice(subtotal)}
        </span>

      </div>

      <div className="flex justify-between border-b py-4 text-sm">

        <span>
          الشحن
        </span>

        <span>
          {shipping === 0
            ? "مجاني"
            : formatPrice(shipping)}
        </span>

      </div>

      <div className="flex justify-between pt-5 text-lg font-bold">

        <span>
          الإجمالي
        </span>

        <span>
          {formatPrice(
            subtotal + shipping,
          )}
        </span>

      </div>

      <Link
        href="/checkout"
        className="mt-7 block bg-[#1c1c1c] py-4 text-center text-sm text-white transition hover:bg-[#b89b72]"
      >
        إتمام الطلب
      </Link>

    </div>
  );
}

/* =========================================================
   CART HOOK
========================================================= */

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(
    [],
  );

  useEffect(() => {
    const load = () => {
      try {
        setItems(
          JSON.parse(
            localStorage.getItem(
              "nova-cart",
            ) || "[]",
          ),
        );
      } catch {
        setItems([]);
      }
    };

    load();

    window.addEventListener(
      "cart-updated",
      load,
    );

    return () =>
      window.removeEventListener(
        "cart-updated",
        load,
      );
  }, []);

  const update = (
    i: number,
    q: number,
  ) => {
    const next = items.map(
      (x, n) =>
        n === i
          ? {
              ...x,
              quantity: Math.max(
                1,
                q,
              ),
            }
          : x,
    );

    setItems(next);

    localStorage.setItem(
      "nova-cart",
      JSON.stringify(next),
    );

    window.dispatchEvent(
      new Event("cart-updated"),
    );
  };

  const remove = (i: number) => {
    const next = items.filter(
      (_, n) => n !== i,
    );

    setItems(next);

    localStorage.setItem(
      "nova-cart",
      JSON.stringify(next),
    );

    window.dispatchEvent(
      new Event("cart-updated"),
    );
  };

  return {
    items,
    update,
    remove,
  };
}

/* =========================================================
   QUANTITY
========================================================= */

export function Quantity({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center border">

      <button
        type="button"
        className="p-2"
        onClick={() =>
          onChange(value - 1)
        }
      >
        <Minus size={14} />
      </button>

      <span className="w-8 text-center text-sm">
        {value}
      </span>

      <button
        type="button"
        className="p-2"
        onClick={() =>
          onChange(value + 1)
        }
      >
        <Plus size={14} />
      </button>

    </div>
  );
}

/* =========================================================
   SUCCESS
========================================================= */

export function Success() {
  const [orderNumber, setOrderNumber] =
    useState("");

  useEffect(() => {
    setOrderNumber(
      `NOVA-${Math.floor(
        10000 +
          Math.random() * 90000,
      )}`,
    );
  }, []);

  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center px-5 text-center">

      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-[#f0e8dd] text-[#9b7c55]">

        <Check size={38} />

      </div>

      <h1 className="text-3xl font-bold">
        تم استلام طلبك بنجاح
      </h1>

      <p className="mt-4 text-neutral-500">
        شكرًا لطلبك. سنتواصل معك لتأكيد
        تفاصيل الطلب.
      </p>

      {orderNumber && (
        <p className="mt-8 text-sm">
          رقم الطلب:{" "}
          <b>{orderNumber}</b>
        </p>
      )}

      <div className="mt-8 flex gap-3">

        <Link
          href="/"
          className="bg-[#1c1c1c] px-6 py-3 text-sm text-white transition hover:bg-[#b89b72]"
        >
          العودة للرئيسية
        </Link>

        <Link
          href="/products"
          className="border px-6 py-3 text-sm transition hover:border-[#b89b72]"
        >
          متابعة التسوق
        </Link>

      </div>

    </div>
  );
}