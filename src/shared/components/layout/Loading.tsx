import Logo from "@/shared/components/ui/icon/Logo";

interface LoadingProps {
  progress?: number;
}

const Loading = ({ progress }: LoadingProps) => {
  return (
    <div className="size-full items-center flex flex-col justify-center bg-black fixed z-200">
      <Logo className="h-[3.3125rem] w-[3.75rem] relative z-50 mb-4" />
      <span className="text-base font-medium tracking-widest text-white animate-pulse">
         {progress !== undefined ? `${progress}%` : ''}
      </span>
    </div>
  );
};

export default Loading;
