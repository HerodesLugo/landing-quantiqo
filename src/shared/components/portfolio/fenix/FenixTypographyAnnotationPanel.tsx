const FenixTypographyAnnotationPanel = () => (
  <div className="bg-[#F6F7F9] p-10 md:p-20 font-poppins w-full overflow-hidden">
    {/* --- SECCIÓN SUPERIOR --- */}
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_250px] gap-x-8 gap-y-16 items-center w-full">
      {/* Fila 1: Headline */}
      <div className="max-w-md">
        <h1 className="text-[52px]  leading-[1.15] font-normal text-black tracking-normal font-space-grotesk ">
          Fenix
          <br />
          Banking Evolved.
          <br />
          DeFi Simplified
        </h1>
      </div>

      {/* Línea conectora 1 */}
      <div className="hidden md:flex items-center w-full">
        <div className="w-3 h-3 bg-[#E07A5F] rounded-full shrink-0 z-10" />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>

      {/* Label 1 */}
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xl font-medium text-black">Headline</span>
        <span className="text-sm text-gray-500">Space Grotesk Regular, Text &gt; 64 px</span>
      </div>

      {/* Fila 2: Body 1 */}
      <div className="max-w-md">
        <p className="text-black text-[18px] font-medium">
          The time to accelerate the process is now.
        </p>
      </div>

      {/* Línea conectora 2 */}
      <div className="hidden md:flex items-center w-full">
        <div className="w-3 h-3 bg-[#E07A5F] rounded-full shrink-0 z-10" />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>

      {/* Label 2 */}
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xl font-medium text-black">Body</span>
        <span className="text-sm text-gray-500">Space Grotesk Medium, Text &gt; 18 px</span>
      </div>
    </div>

    {/* --- DIVISOR --- */}
    <div className="w-full border-t border-gray-300 my-16" />

    {/* --- SECCIÓN INFERIOR --- */}
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_250px] gap-x-8 items-start w-full">
      {/* Fila 3: Title */}
      <div className="max-w-md mb-4 md:mb-0 mt-4">
        <h2 className="text-[28px] md:text-[32px] leading-none font-medium text-black tracking-normal font-space-grotesk">
          Features Overview
        </h2>
      </div>

      {/* Línea conectora 3 */}
      <div className="hidden md:flex items-center w-full mt-[1.375rem]">
        <div className="w-3 h-3 bg-[#E07A5F] rounded-full shrink-0 z-10" />
        <div className="w-full border-t-[2px] border-dashed border-gray-300 -ml-1" />
      </div>

      {/* Label 3 */}
      <div className="flex flex-col gap-1 text-left mt-3">
        <span className="text-xl font-medium text-black">Title</span>
        <span className="text-sm text-gray-500">Space Grotesk Regular, Text &gt; 32 px</span>
      </div>

      {/* Fila 4: Body 2 */}
      <div className="max-w-md mt-6 md:mt-2">
        <p className="text-black text-[14px]">Simple tools. Powerful results.</p>
      </div>

      {/* Línea conectora 4 — L-shape */}
      <div className="hidden md:block relative w-full h-[60px] mt-4">
        <div className="w-3 h-3 bg-[#E07A5F] rounded-full absolute top-[-5px] left-0 z-10" />
        <div className="absolute top-[0px] left-[5px] w-[80%] border-t-[2px] border-dashed border-gray-300" />
        <div className="absolute top-[0px] left-[80%] h-[46px] border-l-[2px] border-dashed border-gray-300" />
        <div className="absolute top-[44px] left-[80%] w-[20%] border-t-[2px] border-dashed border-gray-300" />
      </div>

      {/* Label 4 */}
      <div className="flex flex-col gap-1 text-left mt-6 md:mt-[34px]">
        <span className="text-xl font-medium text-black">Body</span>
        <span className="text-sm text-gray-500">Space Grotesk Regular, Text &gt; 14px</span>
      </div>
    </div>
  </div>
);

export default FenixTypographyAnnotationPanel;
