import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductItem = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: ProductItem[] = [
  {
    imageSrc: "/images/portfolios/portalfi/portalfi-product-1.webp",
    title: "website",
    subtitle: "UI / UX and Final Launch",
  },
  {
    imageSrc: "/images/portfolios/portalfi/portalfi-product-2.webp",
    title: "product / app",
    subtitle: "UI / UX and Final Launch",
  },
];

// ─── Sub-component ────────────────────────────────────────────────────────────

const ProductCard = ({ imageSrc, title, subtitle }: ProductItem) => (
  <div className="w-1/2 h-[43rem] flex flex-col gap-9">
    <div className="bg-dark">
      <Image
        src={imageSrc}
        className="h-full object-cover"
        alt=""
        height={903}
        width={1569}
      />
    </div>
    <div className="flex flex-col">
      <div className="w-96 justify-start text-black text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
        {title}
      </div>
      <div className="w-[836px] opacity-50 justify-start text-zinc-800 text-xl font-normal font-['Host_Grotesk']">
        {subtitle}
      </div>
    </div>
  </div>
);

// ─── Public component ─────────────────────────────────────────────────────────

const ProductShowcase = () => (
  <div className="flex h-[50rem] items-center gap-5 px-5 my-5">
    {PRODUCTS.map((product) => (
      <ProductCard key={product.title} {...product} />
    ))}
  </div>
);

export default ProductShowcase;
