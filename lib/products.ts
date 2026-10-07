export type Category =
  | "tshirts"
  | "shirts"
  | "pants"
  | "jackets"
  | "accessories";

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  subcategory?: string;
  brand: Brand;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  stock: number;
  material: string;
};

/* =========================================================
   Image Helper
========================================================= */

const img = (id: string) =>
  id.startsWith("http")
    ? id.trim()
    : `https://images.unsplash.com/${id.trim()}?auto=format&fit=crop&w=900&q=85`;

/* =========================================================
   Brands
   غيّر logo إلى رابط اللوجو الحقيقي لكل ماركة
========================================================= */

export const brands: Brand[] = [
  {
    id: "nike",
    name: "Nike",
    logo: "https://placehold.co/220x100/ffffff/111111?text=NIKE",
  },
  {
    id: "adidas",
    name: "Adidas",
    logo: "https://placehold.co/220x100/ffffff/111111?text=adidas",
  },
  {
    id: "puma",
    name: "Puma",
    logo: "https://placehold.co/220x100/ffffff/111111?text=PUMA",
  },
  {
    id: "new-balance",
    name: "New Balance",
    logo: "https://placehold.co/220x100/ffffff/111111?text=NEW+BALANCE",
  },
  {
    id: "levi",
    name: "Levi's",
    logo: "https://placehold.co/220x100/ffffff/111111?text=LEVI%27S",
  },
  {
    id: "tommy",
    name: "Tommy Hilfiger",
    logo: "https://placehold.co/220x100/ffffff/111111?text=TOMMY",
  },
  {
    id: "calvin-klein",
    name: "Calvin Klein",
    logo: "https://placehold.co/220x100/ffffff/111111?text=CALVIN+KLEIN",
  },
  {
    id: "lacoste",
    name: "Lacoste",
    logo: "https://placehold.co/220x100/ffffff/111111?text=LACOSTE",
  },
];

/* =========================================================
   Brand Helper
========================================================= */

const getBrand = (id: string): Brand => {
  return (
    brands.find((brand) => brand.id === id) || {
      id,
      name: id,
      logo: "",
    }
  );
};

/* =========================================================
   Common Product Data
========================================================= */

const common = {
  description:
    "قطعة مصممة بعناية لتمنحك الراحة والأناقة في كل يوم.",
  sizes: ["S", "M", "L", "XL"],
  colors: ["أسود", "أبيض", "بيج"],
  stock: 18,
  material: "قطن فاخر 100%",
};

/* =========================================================
   Products
========================================================= */

export const products: Product[] = [
  [
    "تيشيرت القطن الأساسي",
    "t-basic",
    "tshirts",
    390,
    "https://i.pinimg.com/1200x/6d/aa/cb/6daacbf1a4960c76377ee498933704ff.jpg",
    "nike",
  ],

  [
    "تيشيرت أوفر سايز رمادي",
    "t-gray",
    "tshirts",
    450,
    "https://i.pinimg.com/736x/94/e3/d4/94e3d445a3eb65987cef0bfeab9a3340.jpg",
    "adidas",
  ],

  [
    "تيشيرت بخطوط عصرية",
    "t-stripe",
    "tshirts",
    420,
    "https://i.pinimg.com/736x/db/22/17/db221798320c5cfa4cff6e5df07fca2f.jpg",
    "puma",
  ],

  [
    "تيشيرت أسود كلاسيك",
    "t-black",
    "tshirts",
    390,
    "https://i.pinimg.com/736x/e4/b8/ce/e4b8ceea8dfe5403272b62c87a9e5441.jpg",
    "calvin-klein",
  ],

  [
    "تيشيرت بيج ناعم",
    "t-beige",
    "tshirts",
    420,
    "https://i.pinimg.com/736x/ca/64/fe/ca64febd78c30aa1d006562b3a872fac.jpg",
    "tommy",
  ],

  [
    "تيشيرت أبيض يومي",
    "t-white",
    "tshirts",
    350,
    "https://i.pinimg.com/736x/f7/ac/be/f7acbe4c355be2ef74b74628180c6e36.jpg",
    "lacoste",
  ],

  /* ===================================================== */

  [
    "قميص الكتان الهادئ",
    "s-linen",
    "shirts",
    690,
    "https://i.pinimg.com/736x/f7/a6/16/f7a61608d6bd7b8e3b7932fdb1724a1e.jpg",
    "tommy",
  ],

  [
    "قميص دنيم أزرق",
    "s-denim",
    "shirts",
    720,
    "https://i.pinimg.com/736x/f4/c2/c0/f4c2c0f15fe4bb20b5b4c0e1df11eee7.jpg",
    "levi",
  ],

  [
    "قميص رسمي أبيض",
    "s-white",
    "shirts",
    650,
    "https://i.pinimg.com/736x/40/7a/cf/407acf47b1c56dcdae10c548c0dc9168.jpg",
    "calvin-klein",
  ],

  [
    "قميص كاروهات",
    "s-check",
    "shirts",
    740,
    "https://i.pinimg.com/736x/36/83/cd/3683cd9fab9c82ea3b48c02c30493678.jpg",
    "puma",
  ],

  [
    "قميص أسود واسع",
    "s-black",
    "shirts",
    690,
    "https://i.pinimg.com/736x/a9/41/f8/a941f8bd3fe6603902dd11bf5221cd0f.jpg     ",
    "lacoste",
  ],

  [
    "قميص بوبلين مخطط",
    "s-stripe",
    "shirts",
    680,
    "https://i.pinimg.com/736x/a6/d0/7b/a6d07b5e5123ede2b59e40342bc15fcf.jpg    ",
    "new-balance",
  ],

  /* ===================================================== */

  [
    "بنطال تشينو رملي",
    "p-chino",
    "pants",
    650,
    "https://i.pinimg.com/1200x/5e/e5/ff/5ee5ff9631992157e51153c22a144277.jpg",
    "tommy",
  ],

  [
    "بنطال جينز مستقيم",
    "p-jeans",
    "pants",
    780,
    "https://i.pinimg.com/736x/07/68/35/076835320decc788f2655c2b689dbff6.jpg",
    "levi",
  ],

  [
    "بنطال أسود واسع",
    "p-wide",
    "pants",
    720,
    "https://i.pinimg.com/736x/44/c9/71/44c971642ea05c6d69f7e30a6ede822e.jpg",
    "calvin-klein",
  ],

  [
    "بنطال كارجو عملي",
    "p-cargo",
    "pants",
    790,
    "https://i.pinimg.com/736x/3c/00/75/3c0075f07cac3f2c11c657233f8b7a75.jpg ",
    "nike",
  ],

  [
    "بنطال كتان صيفي",
    "p-linen",
    "pants",
    680,
    "https://i.pinimg.com/1200x/4a/e0/07/4ae00738bb58fd36c675681836c3c9a7.jpg ",
    "adidas",
  ],

  [
    "بنطال رياضي أنيق",
    "p-relaxed",
    "pants",
    590,
    "https://i.pinimg.com/736x/b2/40/25/b240258b35ea928422c8f49a663d41e5.jpg",
    "new-balance",
  ],

  /* ===================================================== */

  [
    "جاكيت بومبر أسود",
    "j-bomber",
    "jackets",
    990,
    "https://i.pinimg.com/736x/29/b5/1e/29b51ea0e270e4c02f9fea6fadb25bd5.jpg    ",
    "nike",
  ],

  [
    "جاكيت دنيم كلاسيك",
    "j-denim",
    "jackets",
    920,
    "https://i.pinimg.com/736x/51/4c/93/514c93f848ed1f587f592689dd6a0377.jpg ",
    "levi",
  ],

  [
    "جاكيت خفيف بيج",
    "j-beige",
    "jackets",
    890,
    "https://i.pinimg.com/736x/2d/33/31/2d33316ff493f4c1227f1cb9552ef696.jpg",
    "tommy",
  ],

  [
    "جاكيت جلد عصري",
    "j-leather",
    "jackets",
    1450,
    "https://i.pinimg.com/1200x/ef/7b/45/ef7b458dbce1a80ecc03c1205388d5b9.jpg",
    "calvin-klein",
  ],

  [
    "جاكيت أوفر سايز",
    "j-oversize",
    "jackets",
    1050,
    "https://i.pinimg.com/1200x/b2/8b/9c/b28b9cea0996a41f71d5394857eb045e.jpg",
    "puma",
  ],

  [
    "معطف شتوي طويل",
    "j-coat",
    "jackets",
    1290,
    "https://i.pinimg.com/736x/97/8c/59/978c599800fc3e87bb537173b57648c6.jpg",
    "lacoste",
  ],

  /* ===================================================== */

  [
    "شرابات قطنية فاخرة",
    "a-socks-1",
    "accessories",
    120,
    "https://i.pinimg.com/736x/cf/d0/1d/cfd01dc3a27dc5ebdd5d0388a533b4b6.jpg",
    "nike",
  ],

  [
    "شرابات رياضية",
    "a-socks-2",
    "accessories",
    110,
    "https://i.pinimg.com/736x/b5/48/c7/b548c786951bcb308c8bc9e219210751.jpg",
    "adidas",
  ],

  [
    "بوكسر مريح أسود",
    "a-boxer-1",
    "accessories",
    180,
    "https://i.pinimg.com/1200x/fd/9a/03/fd9a0306cb46da2b90afec39b95736ec.jpg ",
    "calvin-klein",
  ],

  [
    "بوكسر قطن أبيض",
    "a-boxer-2",
    "accessories",
    180,
    "https://i.pinimg.com/1200x/be/bd/e3/bebde335c5e6ecf25293c9f3f7c51616.jpg",
    "tommy",
  ],

  [
    "حزام جلد بني",
    "a-belt-1",
    "accessories",
    290,
    "https://i.pinimg.com/1200x/dd/da/13/ddda1302899163a97406928c780269c7.jpg",
    "levi",
  ],

  [
    "حزام جلد أسود",
    "a-belt-2",
    "accessories",
    290,
    "https://i.pinimg.com/1200x/20/29/c3/2029c37bc990cf3ce41602309129b620.jpg",
    "lacoste",
  ],

  [
    "محفظة جلدية بنية",
    "a-wallet-1",
    "accessories",
    350,
    "https://i.pinimg.com/1200x/a6/cc/e8/a6cce81cbbbd97efc7f04fd94981911d.jpg ",
    "puma",
  ],

  [
    "محفظة جلدية سوداء",
    "a-wallet-2",
    "accessories",
    350,
    "https://i.pinimg.com/736x/e7/d1/f7/e7d1f7a010e41c4e7b5adb402a60b640.jpg",
    "new-balance",
  ],
].map((p: any, i) => ({
id: String(i + 1),

slug: p[1],

name: p[0],

category: p[2],

price: p[3],

image: img(p[4]),

images: [
  img(p[4]),

  img("photo-1551488831-00ddcb6c6bd3"),

  img("photo-1523381210434-271e8be1f52b"),
],

  brand: getBrand(p[5]),

  ...common,

  isBestSeller: i < 6,

  isNew: i % 5 === 0,

  subcategory:
    p[2] === "accessories"
      ? [
          "socks",
          "socks",
          "boxers",
          "boxers",
          "belts",
          "belts",
          "wallets",
          "wallets",
        ][i - 24]
      : undefined,
}));

/* =========================================================
   Categories
========================================================= */

export const categories = [
  {
    slug: "tshirts",
    name: "تشيرتات",
    en: "T-SHIRTS",
    image: img(
      "photo-1521572163474-6864f9cf17ab",
    ),
  },

  {
    slug: "shirts",
    name: "قمصان",
    en: "SHIRTS",
    image: img(
      "photo-1602810318383-e386cc2a3ccf",
    ),
  },

  {
    slug: "pants",
    name: "بناطيل",
    en: "PANTS",
    image: img(
      "photo-1473966968600-fa801b869a1a",
    ),
  },

  {
    slug: "jackets",
    name: "جاكيتات",
    en: "JACKETS",
    image: img(
      "photo-1551028719-00167b16eac5",
    ),
  },

  {
    slug: "accessories",
    name: "إكسسوارات",
    en: "ACCESSORIES",
    image: img(
      "photo-1624222247344-550fb60583dc",
    ),
  },
];

/* =========================================================
   Product Helpers
========================================================= */

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  `${n.toLocaleString("ar-EG")} ج.م`;

/* =========================================================
   Category Names
========================================================= */

export const categoryNames: Record<string, string> = {
  tshirts: "تشيرتات",
  shirts: "قمصان",
  pants: "بناطيل",
  jackets: "جاكيتات",
  accessories: "إكسسوارات",
};

/* =========================================================
   Category Descriptions
========================================================= */

export const categoryDescriptions: Record<
  string,
  string
> = {
  tshirts:
    "قطع يومية بتفاصيل بسيطة وخامات مريحة.",

  shirts:
    "قمصان معاصرة تناسب إطلالتك من الصباح للمساء.",

  pants:
    "قصّات مريحة وأقمشة مصممة لحركتك.",

  jackets:
    "طبقات أساسية تضيف حضوراً لكل إطلالة.",

  accessories:
    "تفاصيل نصنعها بأيدينا لتكمل أسلوبك.",
};

/* =========================================================
   Cart
========================================================= */

export type CartItem = {
  product: Product;
  quantity: number;
  size: string;
  color: string;
};

/* =========================================================
   Related Products
========================================================= */

export const related = (p: Product) =>
  products
    .filter(
      (x) =>
        x.category === p.category &&
        x.id !== p.id,
    )
    .slice(0, 4);