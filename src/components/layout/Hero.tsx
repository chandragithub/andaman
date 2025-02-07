import { Button } from "@/components/ui/button";
import { BookNowDialog } from "@/components/layout";

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden av-hero-img">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Explore the <span className="block xl:inline text-amber-500">andaman islands</span> with us</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories with our expertly crafted tours.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* <div className="rounded-md shadow">
                  <Button className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10 bg-gray-800">
                    Know More
                  </Button>
                </div> */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <BookNowDialog>
                    <Button className="px-8 py-3 md:py-4 md:text-lg md:px-10 text-amber-500">
                      Book Now
                    </Button>
                  </BookNowDialog>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={andamanImage}
          alt="Scenic mountain landscape"
        />
      </div> */}
    </div>
  )
}

