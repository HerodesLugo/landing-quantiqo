import ButtonAnimated from "@/shared/components/ui/button-animated";

const PartnersContent = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-base-100 text-2xl flex items-center gap-1.5">
        <span className="size-2 bg-base-100 flex rounded-full "></span>
        Partners
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col text-5xl text-primary-100 font-normal gap-1.5 max-2xl:text-4xl">
          <div>Collaboration, not contracts.</div>
          <div>
            Shared{" "}
            <span className="text-base-200">vision, not isolated</span>{" "}
          </div>
          <div className="text-base-200">services. Allies, not clients.</div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-lg font-medium max-w-2xl text-base-200 max-2xl:text-sm">
            We believe in innovation born from partnership and a shared purpose
            where success is built through collaboration rather than transaction
            and where combining capabilities matters more than buying services
            to create real progress that endures over time
          </div>

          <ButtonAnimated
            label="BOOK A CALL"
            className="rounded-[6.25rem]"
            AnimationOptions={{
              duration: 0.7,
              maskUrl: "/images/nature-sprite.png",
              steps: 22,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersContent;
