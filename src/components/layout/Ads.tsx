import { Link } from "@/components/ui";
import Marquee from "react-fast-marquee";

export const Ads = () => {
    return (
        <div className="text-center border bg-amber-500 text-black text-sm">
          <Marquee pauseOnHover={true} speed={10}>
            <p>Hurry! Package starts from 14999 ₹ only. <Link href=""><span className="text-xs">Book Now</span></Link></p>
          </Marquee>
        </div>
    )
}