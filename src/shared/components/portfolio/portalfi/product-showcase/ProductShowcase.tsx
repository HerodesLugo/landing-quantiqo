import Image from "next/image";

type ProductItem = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

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

const ProductCard = ({ imageSrc, title, subtitle }: ProductItem) => (
  <div className="md:w-1/2  2xl:h-[43rem]  w-full flex flex-col gap-5 mt-5">
    <div className="bg-dark">
      <Image
        src={imageSrc}
        className="h-full object-cover size-full"
        alt=""
        height={903}
        width={1569}
      />
    </div>
    <div className="flex flex-col px-5 ">
      <div className="w-96 justify-start text-black text-2xl md:text-4xl font-semibold font-['Host_Grotesk'] uppercase tracking-[3.60px]">
        {title}
      </div>
      <div className="w-[836px] opacity-50 justify-start text-zinc-800  md:text-xl font-normal font-['Host_Grotesk']">
        {subtitle}
      </div>
    </div>
  </div>
);

const ProductShowcase = () => (
  <div className="flex 2xl:h-[50rem] items-center 2xl:gap-5 md:px-5   my-5 max-md:flex-col">
    {PRODUCTS.map((product) => (
      <ProductCard key={product.title} {...product} />
    ))}
  </div>
);

export default ProductShowcase;
