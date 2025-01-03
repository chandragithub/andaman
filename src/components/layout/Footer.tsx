import { Link } from "../ui/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 text-gray-300">
            <p className="text-gray-300 text-base">
              Explore the Andaman with expertly crafted tours and unforgettable experiences.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Destinations</h3>
                <ul className="mt-4 space-y-4 text-gray-300">
                  <li>
                    <Link href="#" >
                      Port Blair
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Havelock Islands
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Neil Islands
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Baratang
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Tour Types</h3>
                <ul className="mt-4 space-y-4 text-gray-300">
                  <li>
                    <Link href="#" >
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Honeymoon
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Day Tour
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Group Tours
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4 text-gray-300">
                  <li>
                    <Link href="#" >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4 text-gray-300">
                  <li>
                    <Link href="#" >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 andamanview.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

