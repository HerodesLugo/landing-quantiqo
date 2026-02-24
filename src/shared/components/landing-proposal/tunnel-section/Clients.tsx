import CardTestimonials from "./CardTestimonials"

const Clients = () => {
  return (
     <div className="absolute inset-0 w-full h-full flex justify-center items-center ">
        <div className="flex flex-col gap-3 relative text-6xl items-center">
          <div className="text-2xl text-base-200 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-base-200 flex" />
            Testimonials
          </div>
          <div className="text-primary-100 font-medium">Clients Who </div>
          <div className="text-base-50 font-medium">Trust Us</div>
        </div>
        <CardTestimonials  className="absolute top-36 right-80 scale-80 animate-slide-absorb"/>
        <CardTestimonials  className="absolute top-36 left-20 scale-80"/>
        <CardTestimonials  className="absolute bottom-20 right-20 scale-95"/>
      </div>
  )
}

export default Clients