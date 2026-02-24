const ScrollDown = () => {
  return (
    <div className="flex flex-col items-center max-sm:animate-bounce sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 gap-2.5 max-sm:border-base-purple-200 max-sm:border max-sm:p-2.5 rounded-full">
      <span className="sm:animate-bounce" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="max-sm:size-4 size-5"
        >
          <path
            d="M13.5002 1.50003V17.766L20.7812 11.6055L22.7192 13.8945L12.0002 22.965L1.28125 13.8945L3.21925 11.6055L10.5002 17.766V1.50003H13.5002Z"
            fill="#E1F9FD"
          />
        </svg>
      </span>
      <span className="uppercase text-sm text-white font-normal max-sm:hidden">SCROLL TO DISCOVER</span>
    </div>
  );
};

export default ScrollDown;
